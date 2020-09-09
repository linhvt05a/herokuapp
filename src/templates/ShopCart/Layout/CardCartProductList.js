import React from 'react';
import { Trans } from 'react-i18next';
import InputCheckboxViolet from '../../../components/base/Input/InputCheckboxViolet'
import { ItemProjectName, ItemProjectProduct } from '../Item/index'

const CardCartProductList = (props) => {
    const { showPaymentProgressModal, showPromotionModal, setCheck, check, datas, onSubmit } = props
    let allCheck = localStorage.getItem("AllCheckProject");

    React.useEffect(() => {
        if (allCheck) {

        }
        else {
            let newCheck = [];
            for (let i = 0;i < 2;i++) {
                let newCheckProduct = []
                for (let j = 0;j < 2;j++) {
                    newCheckProduct.push({ checked: false, like: datas.product_love_flag })
                }
                newCheck.push({ checked: false, product: newCheckProduct });
            }
            setCheck({ ...check, allProduct: newCheck })
        }
    }, [datas])
    const onCheckProject = (checked) => {
        let { allProduct } = check;
        let newCheckProduct = [].concat(allProduct);
        for (let i = 0;i < allProduct.length;i++) {
            for (let j = 0;j < allProduct[i].product.length;j++) {
                newCheckProduct[i].product[j].checked = checked
            }
            newCheckProduct[i].checked = checked
        }
        setCheck({ ...check, allProject: checked, allProduct: newCheckProduct })
    }
    const onCheckAllProduct = (checked, index) => {
        let { allProduct } = check;
        let newCheckProduct = [].concat(allProduct);
        let newCheckProject = true;
        for (let i = 0;i < newCheckProduct.length;i++) {
            if (index == i) {
                newCheckProduct[i].checked = checked;
                for (let j = 0;j < newCheckProduct[i].product.length;j++) {
                    newCheckProduct[i].product[j].checked = checked
                }
            }
            if (!newCheckProduct[i].checked) { newCheckProject = false; }
        }
        setCheck({ ...check, allProject: newCheckProject, allProduct: newCheckProduct })
    }
    const onCheckProduct = (checked, index, indexParent) => {
        let newCheckProduct = [].concat(check.allProduct);
        let newCheckProject = true;
        let { allProduct } = check;
        for (let i = 0;i < allProduct.length;i++) {
            newCheckProduct[i].checked = true;
            for (let j = 0;j < allProduct[i].product.length;j++) {
                if (index == j && indexParent == i) {
                    newCheckProduct[i].product[j].checked = checked
                }
                if (!newCheckProduct[i].product[j].checked) { newCheckProduct[i].checked = false; }
            }
            if (!newCheckProduct[i].checked) { newCheckProject = false; }
        }
        setCheck({ ...check, allProject: newCheckProject, allProduct: newCheckProduct })
    }
    const onLike = (checked, index, indexParent) => {
        let newCheckProduct = [].concat(check.allProduct);
        let { allProduct } = check;
        for (let i = 0;i < allProduct.length;i++) {
            for (let j = 0;j < allProduct[i].product.length;j++) {
                if (index == j && indexParent == i) {
                    newCheckProduct[i].product[j].like = checked
                }
            }
        }
        setCheck({ ...check, allProduct: newCheckProduct })
    }
    const onDisabled = () => {
        let { allProduct } = check;
        for (let i = 0;i < allProduct.length;i++) {
            for (let j = 0;j < allProduct[i].product.length;j++) {
                if (allProduct[i].product[j].checked) {
                    return false
                }
            }
        }
        return true
    }
    return (
        <div className="col-12 col-sm-12 col-lg-8 main-cart__order">
            <div class="block select-check fw-bold bg_white">
                <InputCheckboxViolet checked={check.allProject} onChange={(checked) => onCheckProject(checked)} />
                <span class="title-project"><Trans>cart_select_all</Trans> (5 <Trans>cart_products</Trans>)</span>
                <div class="icon-trash">
                    <a class="fas fa-trash-alt icon-trash" onClick={() => alert("tính năng đang phát triển")}></a>
                </div>
            </div>
            {check.allProduct.length > 0 ?
                check.allProduct.map((data, index) => {
                    return (
                        [<ItemProjectName key={index} checked={data.checked} onChange={checked => onCheckAllProduct(checked, index)} />,
                        <div className="block bg_white apartment" key={check.allProduct.length + index + 1}>
                            {data.product && data.product.map((item, i) => {
                                return <ItemProjectProduct
                                    key={i + 1}
                                    showPaymentProgressModal={showPaymentProgressModal}
                                    showPromotionModal={showPromotionModal}
                                    checked={item.checked}
                                    data={datas}
                                    like={item.like}
                                    saveToProduct={(checked) => onLike(checked, i, index)}
                                    onChange={checked => onCheckProduct(checked, i, index)} />
                            })}
                        </div>]
                    )
                })

                : null}
            <div class="text-right mt-2" onClick={onSubmit}><a class={`btn btn_purple text-uppercase ${onDisabled() ? "diabled" : ""}`}>Xác nhận</a></div>
        </div>
    )
}
export default CardCartProductList;

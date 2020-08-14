import React, { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';

const SalesSummary = (props) => {

    const { isGetDataTotalSuccess, dataTotalRes } = props;
    const [state, setState] = useState({
        isChannelArrow: false,
        isInternalArrow: false,
        isProjectArrow: false,
        isProductArrow: false,
        channelPer: 0,
        internalPer: 0,
        projectPer: 0,
        productPer: 0
    })

    useEffect(() => {
        getPercentAndArrow();
    }, [props]);

    const getPercentAndArrow = () => {
        var channelPer = 0;
        var internalPer = 0;
        var projectPer = 0;
        var productPer = 0;

        var isChannelUp = false;
        var isInternalUp = false;
        var isProjectUp = false;
        var isProductUp = false;
        if (isGetDataTotalSuccess && dataTotalRes) {
            if (dataTotalRes.channel && dataTotalRes.channel.total_channel_all && dataTotalRes.channel.total_channel_join_project && dataTotalRes.channel.total_channel_all != 0) {
                channelPer = (dataTotalRes.channel.total_channel_join_project * 100) / dataTotalRes.channel.total_channel_all
            }
            if (dataTotalRes.internal && dataTotalRes.internal.total_seller_all && dataTotalRes.internal.total_seller_join && dataTotalRes.internal.total_seller_all != 0) {
                internalPer = (dataTotalRes.internal.total_seller_join * 100) / dataTotalRes.internal.total_seller_all
            }
            if (dataTotalRes.total_product && dataTotalRes.total_product.total_product_all && dataTotalRes.total_product.total_product_open_sell && dataTotalRes.total_product.total_product_all != 0) {
                productPer = (dataTotalRes.total_product.total_product_open_sell * 100) / dataTotalRes.total_product.total_product_all
            }
            if (dataTotalRes.total_project && dataTotalRes.total_project.total_project_all && dataTotalRes.total_project.total_project_sell_open && dataTotalRes.total_project.total_project_all != 0) {
                projectPer = (dataTotalRes.total_project.total_project_sell_open * 100) / dataTotalRes.total_project.total_project_all
            }

            if (dataTotalRes.channel && dataTotalRes.channel.total_channel_diff && dataTotalRes.channel.total_channel_diff > 0) {
                isChannelUp = true
            }
            if (dataTotalRes.internal && dataTotalRes.internal.total_seller_sale_diff && dataTotalRes.internal.total_seller_sale_diff > 0) {
                isInternalUp = true
            }
            if (dataTotalRes.total_product && dataTotalRes.total_product.total_product_diff && dataTotalRes.total_product.total_product_diff > 0) {
                isProductUp = true
            }
            if (dataTotalRes.total_project && dataTotalRes.total_project.total_project_diff && dataTotalRes.total_project.total_project_diff > 0) {
                isProjectUp = true
            }
        }
        setState({
            ...state,
            isChannelArrow: isChannelUp,
            isInternalArrow: isInternalUp,
            isProjectArrow: isProjectUp,
            isProductArrow: isProductUp,

            channelPer: channelPer > 100 ? 100 : channelPer,
            internalPer: internalPer > 100 ? 100 : internalPer,
            projectPer: projectPer > 100 ? 100 : projectPer,
            productPer: productPer > 100 ? 100 : productPer,
        })
    }
 
    return (
        <div className="row sales_summary">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                <div className="sales_summary--item style_01 h-100">
                    <div className="image">
                        <i className="icon las la-store"></i>
                    </div>
                    <div className="text">
                        <div className="text-1">{(dataTotalRes && dataTotalRes.channel) ? dataTotalRes.channel.total_channel_all : 0}</div>
                        <div className="text-2"><Trans>total_agents</Trans></div>
                        <div className="text-3">
                            <span style={{width: state.channelPer + "%"}} class="done"></span>
                        </div>
                        {
                            (dataTotalRes && dataTotalRes.channel && dataTotalRes.channel.total_channel_diff ? dataTotalRes.channel.total_channel_diff != 0 ? true : false : false) &&
                            <div className="text-4"><i className={"las la-arrow-" + (state.isChannelArrow ? "up" : "down") + " fs-12"}></i> {dataTotalRes.channel.total_channel_diff}</div>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                <div className="sales_summary--item style_02 h-100">
                    <div className="image">
                        <i className="icon las la-store"></i>
                    </div>
                    <div className="text">
                        <div className="text-1">{(dataTotalRes && dataTotalRes.internal) ? dataTotalRes.internal.total_seller_all : 0}</div>
                        <div className="text-2"><Trans>total_sales_staff</Trans></div>
                        <div className="text-3">
                            <span style={{width: state.internalPer + "%"}} class="done"></span>
                        </div>
                        {
                            (dataTotalRes && dataTotalRes.internal && dataTotalRes.internal.total_seller_sale_diff ? dataTotalRes.internal.total_seller_sale_diff != 0 ? true : false : false) &&
                            <div className="text-4"><i className={"las la-arrow-" + (state.isInternalArrow ? "up" : "down") + " fs-12"}></i> {dataTotalRes.internal.total_seller_sale_diff}</div>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                <div className="sales_summary--item style_03 h-100">
                    <div className="image">
                        <i className="icon las la-building"></i>
                    </div>
                    <div className="text">
                        <div className="text-1">{(dataTotalRes && dataTotalRes.total_project) ? dataTotalRes.total_project.total_project_all : 0}</div>
                        <div className="text-2"><Trans>total_project</Trans></div>
                        <div class="text-3">
                            <span style={{width: state.projectPer + "%"}} class="done"></span>
                        </div>
                        {
                            (dataTotalRes && dataTotalRes.total_project && dataTotalRes.total_project.total_project_diff ? dataTotalRes.total_project.total_project_diff != 0 ? true : false : false) &&
                            <div className="text-4"><i className={"las la-arrow-" + (state.isProjectArrow ? "up" : "down") + " fs-12"}></i> {dataTotalRes.total_project.total_project_diff}</div>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                <div className="sales_summary--item style_04 h-100">
                    <div className="image">
                        <i className="icon las la-hotel"></i>
                    </div>
                    <div className="text">
                        <div className="text-1">{(dataTotalRes && dataTotalRes.total_product) ? dataTotalRes.total_product.total_product_all : 0}</div>
                        <div className="text-2"><Trans>total_products_are_selling</Trans></div>
                        <div className="text-3">
                            <span style={{width: state.productPer + "%"}} class="done"></span>
                        </div>
                        {
                            (dataTotalRes && dataTotalRes.total_product && dataTotalRes.total_product.total_product_diff ? dataTotalRes.total_product.total_product_diff != 0 ? true : false : false) &&
                            <div className="text-4"><i className={"las la-arrow-" + (state.isProductArrow ? "up" : "down") + " fs-12"}></i> {dataTotalRes.total_product.total_product_diff}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesSummary;
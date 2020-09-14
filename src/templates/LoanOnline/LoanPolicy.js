import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeadingFilter from '../../components/common/HeadingLine';
import { SliderSimple } from '../../components/common/Sliders'

import { FloatingRates } from './FloatingRates';
import { InputLoanNumber } from './LoanContainer/InputLoanNumber';
import { InterestDebtForm } from './LoanContainer/InterestDebtForm';
import { SidebarRight } from './SidebarRight/SidebarRight';
import { AmountInformation, Banking } from './Layout';

const LoanPolicy = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };
    const dataImgs = [
        {
            image_url: "../images/bank02.jpg"
        },
        {
            image_url: "../images/bank03.jpg"
        },
        {
            image_url: "../images/bank04.jpg"
        },
        {
            image_url: "../images/bank05.jpg"
        },
        {
            image_url: "../images/bank06.jpg"
        },
        {
            image_url: "../images/bank07.jpg"
        }
    ];

    const [state, setState] = useState({
        loanPolicyTabs: 0
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.pathname === "/loan-policy") {
            setState({
                loanPolicyTabs: 3
            })
            console.log('/loan-policy');
        } else {
            setState({
                loanPolicyTabs: 2
            })
        }
    }, []);

    const onStatusClick = (e) => {
        setState({
            loanPolicyTabs: parseInt(e.target.name)
        });
    }

    return (
        <div className="borrow bg_grey">
            <div className="container container-sm container-md">
                <HeadingFilter headerBodyClassName="borrow--heading" labelHeader="Chính sách cho vay" onStatusClick={onStatusClick} loanPolicyTabs={state.loanPolicyTabs} />
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="borrow01" role="tabpanel" aria-labelledby="borrow01-tab">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-8">
                                <div className="borrow__wrap">
                                    <AmountInformation />
                                    <Banking />
                                    <FloatingRates />
                                </div>
                            </div>
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoanPolicy
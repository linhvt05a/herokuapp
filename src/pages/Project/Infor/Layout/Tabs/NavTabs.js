import React from 'react';

const NavTabs = () => {
    return (
        <ul className="nav square nav-tabs nav-top-border no-hover-bg" id="curentTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" role="presentation" aria-expanded="true" data-toggle="tab" href="#block_project_investor">
                    Investor</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#block_project_parameters">
                    Project parameters</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#block_construction_progress">
                    Construction progress</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#sales_policy">
                    Sales policy</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#on_open_sale">
                    Sell open list</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#distribution_channel">
                    Distribution channel</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" role="presentation" aria-expanded="true" data-toggle="tab" href="#bank">
                    Banking</a>
            </li>
        </ul>
    )
}

export default NavTabs;
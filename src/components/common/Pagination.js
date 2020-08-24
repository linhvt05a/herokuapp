import React, { useState } from "react";
import PaginationPage from "react-js-pagination";
import { Trans } from "react-i18next";
 
const Pagination = (props) => {
    let { dataPaging } = props;
    const [activePage, setActivePage] = useState(dataPaging.currentPage);
    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    }
    return (
        <ul className="pagination">
            <PaginationPage
            itemClass="page-item"
            linkClass="page-link"
            activeLinkClass="active"
            prevPageText={<i className="fas fa-angle-double-left " />}
            nextPageText={<i className="fas fa-angle-double-right " />}
            firstPageText= {<div><Trans>First</Trans></div>}
            lastPageText={<div><Trans>Last</Trans></div>}
            activePage={activePage}
            itemsCountPerPage={dataPaging.itemOnPage}
            totalItemsCount={dataPaging.totalItem}
            pageRangeDisplayed={dataPaging.totalPage}
            onChange={handlePageChange.bind(this)}
            />
        </ul>
    )
}
export default Pagination;
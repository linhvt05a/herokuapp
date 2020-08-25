import React, { useState } from "react";
import PaginationPage from "react-js-pagination";
import { Trans } from "react-i18next";
 
const Pagination = (props) => {
    let { data } = props;
    var isPage = 0;
    if(data != null) {
        isPage = data.currentPage
    }
    const [activePage, setActivePage] = useState(isPage);
    const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
    }
    return (
        data && data.totalPage > 1 ?
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
            itemsCountPerPage={data.itemOnPage}
            totalItemsCount={data.totalItem}
            pageRangeDisplayed={data.totalPage}
            onChange={handlePageChange.bind(this)}
            />
        </ul>: ""
    )
}
export default Pagination;
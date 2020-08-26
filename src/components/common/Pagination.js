import React, { useState, useEffect } from "react";
import PaginationPage from "react-js-pagination";
import { Trans } from "react-i18next";
 
const Pagination = (props) => {
    let { data, onChange } = props;
    var isPage = 0;
    if(data != null) {
        isPage = data.page
    }
    const [activePage, setActivePage] = useState(isPage);
    const handlePageChange = (pageNumber) => {
        onChange(pageNumber)
        setActivePage(pageNumber);
    }
    useEffect(() => {
        setActivePage(data.page);
    }, [data.page]);
    return (
        data && data.total_page > 1 ?
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
            itemsCountPerPage={data.limit}
            totalItemsCount={data.total_record}
            pageRangeDisplayed={data.total_page}
            onChange={handlePageChange.bind(this)}
            />
        </ul>: ""
    )
}
export default Pagination;
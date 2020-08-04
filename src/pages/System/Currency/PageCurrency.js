import React, { useEffect, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentcyListRequest } from "../../../store/action";
import { CardHeader, Spinner } from '../../../components/common';
import { useHistory } from "react-router-dom";
import CurrencyTable from './Layout/CurrencyTable';

const PageCurrency = (props) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const currentcy = useSelector(state => state.currency); // get value currentcy from reducer
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { token } = props.user;
  console.log('currentcy', currentcy);
  useEffect(() => {
    const pageProp = props.search.page ? props.search.page : 1;
    props.setActiveItemMenu("menu_system_currency");
    setPage(pageProp);
    dispatch(currentcyListRequest({ token, search, page })); // call action to Sagas to get data from api
  }, []);

  // Process data from states of currencyReducer
  const isFetching = currentcy.isFetching;
  const isSuccess = currentcy.currentcyList.success;
  const isError = currentcy.currentcyList.error;
  const currenceData = isSuccess ? currentcy.currentcyList.detail : null;
  const totalRecords = isSuccess ? currentcy.currentcyList.total_record : 0;
  const totalPage = isSuccess ? currentcy.currentcyList.total_page : 0;

  const onSearch = (value) => {
    setSearch(value.trim());
    if (value.trim() != "") {
      dispatch(currentcyListRequest({ token, search: value.trim(), page: 1 }));
      navigate.push("/system/currency?seach=" + value);
    } else {
      dispatch(currentcyListRequest({ token, search: "", page: 1 }));
      navigate.push("/system/currency");
    }
  }
  const changePage = (page) => {
    setPage(page);
    //let search = props.search.search ? "search=" + props.search.search + "&" : "";
    dispatch(currentcyListRequest({ token, search, page }));
    navigate.push(`/system/currency?${search}page=${page}`);
  }

  const actions = [
    { "href": "/system/currency/add", "value": "Add" },
  ]

  return (
    <div>
      <CardHeader label="Currency List"
        searchLabel="Search"
        actionData={actions}
        searchHolder="Name Currency"
        onSearch={onSearch} />

      {isFetching && <Spinner />}
      {isError && props.showToast('error', isError)}
      {isSuccess &&
        <CurrencyTable
          data={currenceData}
          total_page={totalPage}
          total_record={totalRecords}
          page={page}
          changePage={changePage}
        />
      }
    </div>
  );
}

export default PageCurrency;
import React, {memo} from 'react';
import { Pagination  } from '../../../../components/common';
import api from '../../../../services/api';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const CurrencyTable = (props) => {
      const { data, total_page, total_record, page, changePage } = props;
      let pageSize = page * api.LIMIT - api.LIMIT
      return (
        <div className="card square">
          <div className="card-body">
            <div className="m_table m_table--list_project mt-3" style={{ maxHeight: "100%" }}>
              {
                data &&
                  (
                    <>
                      <table className="table" style={{ minWidth: "auto" }}>
                        <thead>
                          <tr>
                            <th><Trans>No.</Trans></th>
                            <th><Trans>Name</Trans></th>
                            <th><Trans>Code</Trans></th>
                            <th style={{ textAlign: "right" }}>
                              <Trans>Exchange rate to vnd</Trans>{data.time_convert_exchange_rate}.
                                                    <span className="uni_text_6d30ab">({data.service})</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.list.map((item, index) => <Currency key={index} index={index + pageSize} data={item} />)
                          }
                        </tbody>
                      </table>
                      <Pagination total_page={total_page} total_record={total_record} page={page} change={changePage} />
                    </>
                  )
              }
            </div>
          </div>
        </div>
      )
  }

  export default memo(CurrencyTable)

  export const Currency = (props) => {
    const { data, index } = props;
    let href = "/system/currency/edit/" + data.id;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Link style={{ "textDecoration": "underline", "color": "rgb(0, 0, 0)", "fontWeight": "500" }} 
                    to={href}>
                {data.name}
                </Link>
            </td>
            <td>{data.code}</td>
            <td align="right">{data.exchange_rate_to_VND} (VND)</td>
        </tr>
    )
  };
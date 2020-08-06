import React from 'react';
import { Trans } from 'react-i18next';
import { Select } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown'

const CardHeader = props => {
    return (
        <div className={props.classHeading ? props.classHeading : "m_heading"}>
            <button className="m_button no-event">
                <span><Trans>{props.label}</Trans>{props.labelEnd}</span>
            </button>
            {/* {
                props.dropdown ?
        
                    <div className="dropdown m_select m_dropdown">
                        <button className=" m_select--label m_dropdown--label square  dropdown-toggle" type="button">
                            {props.dropdown.title}
                        </button>
                        <div className="dropdown-menu">
                            {
                                props.dropdown.data.map((value, index) => {
                                    return <a key={index} className="dropdown-item" href={`${value.href}`}>{value.label.toUpperCase()}</a>
                                })
                            }
                        </div>
                    </div> : null
            } */}

            {
                props.dropdown ?
                <Dropdown className="m_select">
                    <Dropdown.Toggle className="m_select--label">
                        {props.dropdown.title}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { props.dropdown.data.map((value, index) => {
                            return  <Dropdown.Item key={index} className="dropdown-item" href={`${value.href}`}>
                                        {value.label.toUpperCase()}
                                    </Dropdown.Item>
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown> : null
            }
        </div>

    );
}

export default CardHeader;
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import iconDot from '../../../public/static/images/logo.png'
import {
    DropdownAction,
    DropdownPurple,
    DropdownBlue,
    DropdownDot,
    DropdownEnd
} from '../../components/base/Dropdown';

const Story = () => {
    const onClick = (value) => {
        alert(value)
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className='col-4'>
                        <label>Dropdown Purple</label>
                        <DropdownPurple label='Dropdown Purple'
                                        datas={[{href:'', value: '0', label:'item dropdown'}]}
                        />
                    </div>
                    <div className='col-4'>
                        <label>Dropdown Blue</label>
                        <DropdownBlue label='Dropdown Blue'
                                      datas={[{href:'', value: '0', label:'item dropdown'}]}
                        />
                    </div>
                    <div className='col-3'>
                        <label>Dropdown Dot</label>
                        <div>
                            <DropdownDot label='Dropdown Dot'
                                          datas={[{href:'', value: '0', label:'item dropdown'},
                                                  {href:'', value: '1', label:'item dropdown'}]}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-4'>
                        <label>Dropdown End</label>
                        <DropdownEnd label='Dropdown End'
                                     title='DROPDOWN END'
                                     datas={[{href:'', value: '0', label:'item dropdown'}]}
                                     onClick={onClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;
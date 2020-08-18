import React from "react";
import { SelectDefault, SelectMultiple } from "../../components/base/Select";

const Elements = (props) => {
    return (
        <div className="container" style={{paddingTop:'300px', paddingBottom:"100px"}}>
            <div className="row">
                <div className="col-3">
                    <SelectDefault />
                </div>
                <div className="col-3">
                    <SelectMultiple />
                </div>
            </div>
        </div>
    );
}
export default Elements;

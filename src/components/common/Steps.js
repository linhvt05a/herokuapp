import React from 'react';
import ProtoTypes from 'prop-types';
const Steps = ({ currentStep, steps , ...props }) => {
    return (
        <div class="create-contract__steps">
            {
                steps && steps.map((item, key) => {
                    let classActive = '';
                    if(item.active===currentStep){
                        classActive = 'create-contract__step active';
                    } else if(item.active < currentStep) {
                        classActive = 'create-contract__step active done';
                    } else {
                        classActive = 'create-contract__step';
                    }
                    return (
                        <div key={key} className={classActive}>
                            <span className="number">{item.label}</span>
                            <span className="text">{item.description}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Steps;

Steps.protoTypes = {
    currentStep: ProtoTypes.number,
    steps: ProtoTypes.array,
}
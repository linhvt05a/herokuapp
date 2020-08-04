import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class InputFile extends Component{
    render(){
        return(
            <div className={this.props.className ? this.props.className : ''}>
                <div className="m_compensation_form form-column">
                    <div className="form-group" >
                        <div className="input_file">
                            <input preview="dvPreviewImage"  multiple name="project_images" type="file" className={this.props.classInput} style={{opacity: "0"}}/>
                            <span className="center">
                                <figure className="image">
                                    <img src={this.props.src} alt={this.props.alt} />
                                </figure>
                                <i id="upload_file_document" className={this.props.classText}>Thả các tập tin ở đây <br/> hoặc nhấn vào đây để thêm tập tin</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputFile

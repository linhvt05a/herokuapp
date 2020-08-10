import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

const TextEditor = (props) => {
	const editor = useRef(null)
	const config = {
		readonly: false 
	}
	
	return (
            <JoditEditor
            	ref={editor}
                value={props.value}
                config={config}
		        tabIndex={1} 
                onChange={props.handleChange}
            />
        );
}

export default TextEditor;
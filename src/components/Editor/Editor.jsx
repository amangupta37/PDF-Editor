import React from "react";
import "./Editor.css";
import Draggable from "react-draggable";
const Editor = () => {
    return (
        <div className="Editor">
            <div className="Left">
                <h1>Elements</h1>
                <div className="Content">
                    <Draggable>
                        <div className="element one"></div>
                    </Draggable>
                </div>
            </div>
            <div className="Right">
                <div className="RightContent">
                    <h1>Dragable area</h1>
                </div>
            </div>
        </div>
    );
};

export default Editor;

import React, { useState } from "react";
import "./Editor.css";
import Draggable from "react-draggable";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Elements = [
    {
        id: 1,
        icon: "",
        type: "",
        element: (
            <img
                width={"100px"}
                src="https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
                alt=""
                draggable="false"
            />
        ),
    },
    {
        id: 2,
        icon: "",
        type: "",
        element: <h2>Class</h2>,
    },
    {
        id: 3,
        icon: "",
        type: "",
        element: <h2>School name</h2>,
    },
    {
        id: 4,
        icon: "",
        type: "",
        element: <h2>Section</h2>,
    },
    {
        id: 5,
        icon: "",
        type: "",
        element: <h2>Certificate Header</h2>,
    },
    {
        id: 6,
        element: <h2>Date of Birth</h2>,
    },
    {
        id: 7,
        icon: "",
        type: "",
        element: <h2>Certificate Design</h2>,
    },
    {
        id: 8,
        icon: "",
        type: "",
        element: <h2>Address</h2>,
    },
    {
        id: 9,
        icon: "",
        type: "",
        element: <h2>Student Name</h2>,
    },
    {
        id: 10,
        icon: "",
        type: "",
        element: <h2>Father Name</h2>,
    },
];

const Editor = () => {
    const [data, setData] = useState([]);
    const handleClick = (element) => {
        console.log("=============>", element);
        Elements.pop(element);
        setData([...data, element]);
    };
    return (
        <div className="Editor">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className="Left">
                <h1>Elements</h1>
                <div className="Content" ref={ref}>
                    {/* <Draggable bounds="parent">
                        <div className="element one"></div>
                    </Draggable>
                    <Draggable bounds="parent">
                        <h1 style={{ position: "absolute" }}>hello world</h1>
                    </Draggable>
                    <Draggable bounds="parent">
                        <img
                            style={{ position: "absolute" }}
                            width={"100px"}
                            src="https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
                            alt=""
                            draggable="false"
                        />
                    </Draggable> */}
                    {Elements.map((element, index) => {
                        return (
                            <div
                                className="three"
                                key={index}
                                onClick={() => handleClick(element)}
                            >
                                {element?.element}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="Right">
                <div className="RightContent">
                    {/* <h1>Dragable area</h1> */}

                    {data?.map((element, index) => {
                        return (
                            <Draggable bounds="parent">
                                {element?.element}
                            </Draggable>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Editor;

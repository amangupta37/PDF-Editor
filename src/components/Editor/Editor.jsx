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
        style: {
            color: "red",
        },
        element: <h2 style={{ color: "red" }}>Class</h2>,
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
        // Elements.pop(element.id);
        setData([...data, element]);
    };

    const handleMouse = (ele) => {
        const obj = {
            color: "blue",
            fontSize: "200px",
        };

        data[0].style = obj;

        console.log(ele.element.props.style);
        console.log("clicked", ele.element);
    };

    const handleMouseUp = (e) => {
        console.log("up");
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
            <h1>
                Hello world
                <button>style text red</button>
            </h1>

            <div className="Right">
                <div className="RightContent">
                    {data?.map((element, index) => {
                        return (
                            <Draggable
                                bounds="parent"
                                key={index}
                                style={{ color: "green" }}
                            >
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

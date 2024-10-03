import React, { useState } from "react";
import "./Box.css"; // Assuming you save your CSS in this file

const Box = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="row">
            <div className="col-12">
            </div>
            <div className="col-12 mt-5 d-flex justify-content-center">
                <div className={`box ${isOpen ? "open" : ""}`} onClick={handleClick}>
                    <div className={`box-body ${isOpen ? "open" : ""}`}>
                        <button className="img" onClick={()=>alert("hello")}>Click Here</button>
                        {/* <img className="img" src="https://via.placeholder.com/150" alt="Placeholder" /> */}
                        <div className="box-lid"></div>
                        <div className="box-bowtie"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box;

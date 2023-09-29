import React, { useState, useEffect } from "react";
import ChildComponent from "./ChildComponent";
import TreeComponent from "./TreeComponent";

const Right = () => {



    
    //zoom in or out and dragging
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                // Scroll down to zoom out
                setZoomLevel((prevZoom) => Math.max(0.5, prevZoom - 0.1));
            } else {
                // Scroll up to zoom in
                setZoomLevel((prevZoom) => Math.min(2, prevZoom + 0.1));
            }
        };

        const handleMouseMove = (event) => {
            if (isDragging) {
                setDragPosition({
                    x: event.clientX - dragStart.x,
                    y: event.clientY - dragStart.y,
                });
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, dragStart]);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setDragStart({
            x: event.clientX - dragPosition.x,
            y: event.clientY - dragPosition.y,
        });
    };
    //zoom in or out and dragging




    const [isHovering, setIsHovering] = useState(false);
    const [parents, setParents] = useState([]);

    const [data, setData] = useState({
        name: "",
        children: [

        ]
    });

    const addTreeNode = () => {
        const newNode = {
            // name: `Child ${parents.length + 1}`
        };

        setData(prevData => {
            const newData = { ...prevData };
            newData.children.push(newNode);
            return newData;
        });

        setParents([...parents, <ChildComponent key={parents.length} label='' />]);

    };
    return (
        <div className="flex-grow bg-[#f4f4f6] flex items-center"
            style={{
                transform: `scale(${zoomLevel}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
        >


            <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} className="w-[160px] z-[1]" >
                <button className="bg-gray-500 w-[120px] h-[35px] rounded-3xl  mt-4 ml-2 text-white hover:button">Start</button>
                {isHovering && (
                    <button className="bg-gray-500 w-[25px] h-[25px] rounded-3xl  mt-4 text-white" onClick={addTreeNode}>
                        <b className="text-white pt-1" >+</b>
                    </button>
                )}

            </div>




            <div className="ml-[-60px] mr-[-179px] mt-4">
                <TreeComponent data={data} />
            </div>



            <div className="flex flex-col ml-[15px] mt-[15px]">
                {parents.map((parent, index) => (
                    <div key={index}>{parent}</div>
                ))}
            </div>




        </div>
    )
}

export default Right;
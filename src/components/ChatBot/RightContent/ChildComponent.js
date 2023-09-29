import React, { useState } from "react";
import { Button, Popover } from 'antd';
import Drawers from "../RightDrawer/Drawer";

const ChildComponent = ({ label }) => {

  const [children, setChildren] = useState([]);
  const [open, setOpen] = useState(false); //For Popver Open And Close
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); //For Drawer Open and Close 
  const [displayText, setDisplayText] = useState(""); //For display text
  const [hover, setHover] = useState(false);




  const a = () => {

  }
  const b = () => {
    setHover(false)
  }




  const handleOpenChange = (newOpen) => {
    if (label !== 'Bot Response') {
      setOpen(newOpen);
    }
  };


  const addChildWithLabel = (childLabel) => {
    if (childLabel === 'Bot Response') {
      const child = <ChildComponent key={children.length} label={childLabel} />;
      setChildren([...children, child]);
    } else {
      setOpen(true);
      const child = <ChildComponent key={children.length} label={childLabel} />;
      setChildren([...children, child]);
    }
    setOpen(false);
  };


  const showDrawer = () => {
    if (label !== 'Bot Response') {
      setIsDrawerVisible(true);
    } else {
      setIsDrawerVisible(false);
    }
  };


  return (

    <div className="flex">

      <div className="flex justify-center">

        <div>
          <p>{displayText}</p>
        </div>

        <div onMouseOver={() => label !== 'Bot Response' ? setHover(true) : undefined}

          onMouseLeave={() => setHover(false)}>

          {label === '' && (
            <button onClick={showDrawer} className="border border-gray-400 rounded-[6px] rotate transform rotate-45 bg-[#b1abab]">
              <img src="\images\chatbot.png" className="rotate transform -rotate-45" />
            </button>
          )}

          {label === 'User Input' && (
            <button onClick={showDrawer} className="border border-gray-400 rounded-[6px] ml-4 mb-5 rotate transform rotate-45 bg-[#b1abab] mt-0">
              <img src="\images\chatbot.png" className="rotate transform -rotate-45" />
            </button>
          )}

          {label === 'Bot Response' && (
            <button onClick={showDrawer} className="bg-[white] text-[black] w-[130px] h-7 rounded-[15px]">Bot Response</button>
          )}

          {label === 'A' && (
            <button onClick={showDrawer} className="bg-[red] text-[black] w-[130px] h-7 rounded-[15px]">A</button>
          )}

          {label === 'B' && (
            <button onClick={showDrawer} className="bg-[green] text-[black] w-[130px] h-7 rounded-[15px]">B</button>
          )}

          {label === 'C' && (
            <button onClick={showDrawer} className="bg-[orange] text-[black] w-[130px] h-7 rounded-[15px]">C</button>
          )}

          {label === 'D' && (
            <button onClick={showDrawer} className="bg-[purple] text-[black] w-[130px] h-7 rounded-[15px]">D</button>
          )}


          <Popover
            placement="rightTop"
            content={
              <div className="flex flex-col">
                <Button type="text" onClick={() => addChildWithLabel('User Input')}>User Input</Button>
                <Button type="text" onClick={() => addChildWithLabel('A')}>A</Button>
                <Button type="text" onClick={() => addChildWithLabel('B')}>B</Button>
                <Button type="text" onClick={() => addChildWithLabel('C')}>C</Button>
                <Button type="text" onClick={() => addChildWithLabel('D')}>D</Button>
                <Button type="text" onClick={() => addChildWithLabel('Bot Response')}>Bot Response</Button>
              </div>
            }
            title={<></>}
            trigger="click"
            visible={open}
            onVisibleChange={handleOpenChange}
          >
            {hover && (
              <button className="bg-gray-500 w-[25px] h-[25px] rounded-3xl ml-1 text-white">
                <b className="text-white pt-1">+</b>
              </button>
            )}
          </Popover>

        </div>

      </div>

      <div>{children}</div>

      <Drawers
        setDisplayText={setDisplayText}
        isDrawerVisible={isDrawerVisible}
        setIsDrawerVisible={setIsDrawerVisible}
      />
    </div>
  );
};

export default ChildComponent;

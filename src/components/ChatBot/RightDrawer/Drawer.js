import React, { useState } from "react";
import { Button, Drawer } from 'antd';
import { Input } from 'antd';
import { WechatFilled, CheckOutlined, CloseOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const Drawers = ({isDrawerVisible,setDisplayText,setIsDrawerVisible }) => {
    const [inputText, setInputText] = useState("");
    const [fields, setFields] = useState([""]);

    const onCloseDrawer = () => {
        setIsDrawerVisible(false);
    };

    const handleOk = () => {
        setIsDrawerVisible(false);
        setDisplayText(inputText);
        setInputText("");
    };


    const handleFieldChange = (index, value) => {
        const updatedFields = [...fields];

        if (index === updatedFields.length - 1 && value !== "") {
            updatedFields.push("");
        }

        updatedFields[index] = value;
        setFields(updatedFields);
    };
    return (
        <Drawer
            closable={false}
            visible={isDrawerVisible}
            width={530}
            height={520}
            style={{ boxShadow: "none" }}
        >
            <div>
                <div className="flex items-end justify-between">
                    <div className="flex items-end ">
                        <WechatFilled className="text-[black] mt-[15px] text-[20px] ml-[5px]" />
                        <p className="text-[black] ml-[10px] text-[#919ead] font-semibold uppercase]">USER INPUT</p>
                    </div>
                    <div className="flex items-end gap-2.5">
                        <Button onClick={onCloseDrawer} className="flex items-center justify-center bg-[white] text-[#47607c] h-[25px] w-[25px]"><CloseOutlined /></Button>
                        <Button onClick={handleOk} className="flex items-center justify-center bg-[white] text-[#47607c] h-[25px] w-[25px]"><CheckOutlined /></Button>
                    </div>
                </div>
                <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type block title"
                    className=" h-[50px] w-[420px] ml-1.5 mt-4"
                />
            </div>
            <div className="mt-[30px]">
                <div className="flex items-end gap-[10px]">
                    <QuestionCircleOutlined className="text-[black] mt-[15px] text-[20px] ml-[5px]" />
                    <p className="text-[black] text-[#919ead] text-[16px] font-semibold uppercase]">User says</p>
                </div>
                <div>
                    {fields.map((field, index) => (
                        <div key={index}>
                            <Input
                                type="text"
                                value={field}
                                onChange={(e) => handleFieldChange(index, e.target.value)}
                                className="h-[50px] w-[420px] ml-1.5 mt-4"
                                placeholder="Enter user message"

                            />
                        </div>
                    ))}
                </div>
            </div>
        </Drawer>
    )
}

export default Drawers;
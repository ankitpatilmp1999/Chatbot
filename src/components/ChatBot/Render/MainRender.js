import React from 'react'
import LeftContent from '../LeftContent/LeftContent'
import Right from '../RightContent/Parent'
const MainRender = () => {
    return (
        <>
            <div className="flex" style={{ overflow: "hidden" }}>
                <LeftContent />
                <Right />
            </div>
        </>
    )
}

export default MainRender
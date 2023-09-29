import React from 'react'
import { Tree } from "react-tree-graph";

const TreeComponent = ({data}) => {
    return (
        <Tree
            data={data}
            height={550}
            width={280}
        />
    )
}

export default TreeComponent
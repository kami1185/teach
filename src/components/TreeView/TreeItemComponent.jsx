import { TreeItem } from '@mui/x-tree-view/TreeItem'
import React from 'react'
import { Link } from 'react-router-dom'

const TreeItemComponent = ({item}) => {

    return (
        < >
            <Link to={item.path}>
                <TreeItem nodeId="2" label={`${item.title}`} />  
            </Link>
        </>
    )
}

export default TreeItemComponent
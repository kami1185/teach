import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItemComponent from './TreeItemComponent';

const TreeViewComponent = ({routes}) => {

  return (
    // <></>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{  flexGrow: 1, maxWidth: 300, overflowY: 'auto' }} //height: 0,
    >
      
      <TreeItem nodeId="1" label={routes.titlemenu}>
        {
            routes.menu.map((item,index) => (
                // <AccordionJS key={index} item={item} index={index}/>
                <TreeItemComponent key={item.name} item={item} index={index}/>           
            ))
        }  
      </TreeItem>
    </TreeView>
  )
}

export default TreeViewComponent
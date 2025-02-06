
import { componentsReact } from '../../data/components.react'
import TreeViewComponent from '../../components/TreeView/TreeViewComponent'

const ReactMenu = () => {
  return (
    <>

      <TreeViewComponent routes={componentsReact}/>
      
        {/* <ButtonHome /> */}
        {/* {
          componentsReact.map((item,index) => (
              <AccordionJS key={index} item={item} index={index}/>
          ))
        } */}

    </>
  )
}

export default ReactMenu
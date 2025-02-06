
import TreeViewComponent from '../../components/TreeView/TreeViewComponent';
import { componentsJavascript } from '../../data/components.javascript';

const JavascriptMenu = () => {

  return (
    <>
      <TreeViewComponent routes={componentsJavascript}/>
    </>
  )

}

export default JavascriptMenu
import { pagesJest } from '../../../data/pages.jest'
import { TreeViewComponent } from '../../../components'

function JestMenu() {
    return (
        <>
            <TreeViewComponent routes={pagesJest}/>
        </>
    )
}

export default JestMenu
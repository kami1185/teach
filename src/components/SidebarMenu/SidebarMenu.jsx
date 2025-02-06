
import { JavascriptMenu, ReactMenu } from '../../pages'
import JestMenu from '../../pages/Jest/Introduction/JestMenu'
import './Sidebar.css'

const SidebarMenu = () => {

    return (
        <>
            <aside className='sidebar'>
                <section style={{color: '#fff'}}>
                    <input type="search" name="" id="" />

                        <JavascriptMenu/>
                        <ReactMenu/>
                        <JestMenu/>

                </section>
            </aside>
        </>
    )
}

export default SidebarMenu
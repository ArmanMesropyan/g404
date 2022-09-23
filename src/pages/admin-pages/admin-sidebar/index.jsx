import React, {useState} from 'react';
import './style.scss'
import BlocksComponent from "./components/blocks";
import ElementsComponent from "./components/elements";
import ColorsComponent from "./components/colors";

const AdminSidebar = () => {
    const [block , setBlock] = useState({
        active: false,
        index: 0
    })
    const handleClick = (index) => {
        setBlock({active: true, index: index})
        if (block.active === true && block.index === index) {
            setBlock({active: false, index: index})
        }
    }
    return (
        <>
            <div className='L-admin-sidebar G-flex G-flex-column '>
                <ul className='L-admin-sidebar-list G-flex G-flex-column'>
                    <li>
                        <span className='icon-eye'/> <p>Preview</p>
                    </li>
                    <li
                        className={block.index === 1 && block.active ? 'L-admin-sidebar-link-active' : 'L-admin-sidebar-link'}
                        onClick={() => handleClick(1)}>
                        <span className='icon-box'/> <p>Blocks</p>
                    </li>
                    <li
                        className={block.index === 2 && block.active ? 'L-admin-sidebar-link-active' : 'L-admin-sidebar-link'}
                        onClick={() => handleClick(2)}>
                        <span className='icon-cubes'/> <p>Elements</p>
                    </li>
                    <li
                        className={block.index === 3 && block.active ? 'L-admin-sidebar-link-active' : 'L-admin-sidebar-link'}
                        onClick={() => handleClick(3)}>
                        <span className='icon-droplet1'/> <p>Colors</p>
                    </li>
                    <li><span className='icon-stack'/> <p>Progress</p></li>
                </ul>
                <ul className='L-admin-sidebar-list G-flex G-flex-column'>
                    <li><span className='icon-loop2 G-flex G-flex-column'/></li>
                    <li><span className='icon-info G-flex G-flex-column'/></li>
                </ul>
            </div>
            {block.index === 1 && block.active ? <BlocksComponent block={block} setBlock={setBlock}/> : null}
            {block.index === 2 && block.active ? <ElementsComponent block={block} setBlock={setBlock}/> : null}
            {block.index === 3 && block.active ? <ColorsComponent block={block} setBlock={setBlock}/> : null}
        </>
    );
};

export default AdminSidebar;

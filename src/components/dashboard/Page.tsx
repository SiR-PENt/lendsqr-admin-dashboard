import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from 'react';

type PageProps = {
   children: React.ReactNode,
   title?: string,
}

export default function Page ({children, title}: PageProps) {
    
    const [ show, setShow ] = useState<boolean>(false)

    return (
        <>
        <Navbar toggleSidebar={{ show, setShow}}/>
        <Sidebar show={ show}/>
        <div className='page'>
        { title ? <h1>{title}</h1> : '' }  {/* this will be useful for other not yet existent pages  */}
            {children}
        </div>
        </>
    )
}
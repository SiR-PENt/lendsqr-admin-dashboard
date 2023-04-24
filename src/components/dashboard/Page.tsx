import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type PageProps = {
   children: React.ReactNode,
   title?: string,
}

export default function Page ({children, title}: PageProps) {

    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className='page'>
        { title ? <h1>{title}</h1> : '' }  {/* this will be useful for other not yet existent pages  */}
            {children}
        </div>
        </>
    )
}
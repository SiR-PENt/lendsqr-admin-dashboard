import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type PageProps = {
   children: React.ReactNode
}

export default function Page ({children}: PageProps) {

    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className='page'>
            {children}
        </div>
        </>
    )
}
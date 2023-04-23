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
        <h1>{title}</h1>
            {children}
        </div>
        </>
    )
}
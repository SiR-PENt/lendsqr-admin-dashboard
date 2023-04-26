import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import Table from "./Table";
import { AxiosResponse } from "axios"
import left from '../../../assets/dashboard/left.png'
import right from '../../../assets/dashboard/right.png'
import { getUsers } from "../../../utils/requests";
import dropdown from '../../../assets/dashboard/ipp-dropdown.png'

type ButtonProps = {
   src: string,
}

type DropdownProps = {  
    className: string,
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
}

export function Button({ src } : ButtonProps) {

    return (
        <button>
         <img src={src} alt={`${src} icon`}/>
        </button>
    )
}

export function DropdownFilter({className, setItemsPerPage } : DropdownProps) {

    return (
        <div className={`dropdown-filter ${className}`}>
          <p onClick={() => setItemsPerPage(20)}>20</p>   
          <p onClick={() => setItemsPerPage(50)}>50</p>   
          <p onClick={() => setItemsPerPage(100)}>100</p>   
        </div>
    )
}
  
export default  function PaginatedItems<T extends object>() {
     
   const [currentItems, setCurrentItems] = useState<T[]>([]);
    const [ itemsPerPage, setItemsPerPage ] = useState<number>(50);
    const [ showDropdown, setShowDropdown ] = useState<boolean>(false)
    const [ users, setUsers ] = useState<T[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState<number>(0);
    
    const fetchData = useCallback(() => {
     getUsers()
    .then(({data} : AxiosResponse<T[]>) => { 
      setUsers(data)  
    })
    .catch(err => console.log(err))
  }, []);
  
    useEffect(() => {
        fetchData()
      }, [])

    useEffect(() => {
      if(users){
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(users.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(users.length / itemsPerPage));
      }
    }, [users, itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected : number}) => { //since we just need the selected property
     if(currentItems) {
         const newOffset = event.selected * itemsPerPage % users.length;
         setItemOffset(newOffset);
     }
    };
  
    return (
      <>
      {
      (currentItems.length > 0) && (
        <>
          <Table users={currentItems} />

          <div className="pagination-container">
            <div>
            <p>Showing</p>
            <div 
            onClick={() => setShowDropdown(!showDropdown)}
            className="items-per-page">
             <p>{itemsPerPage}</p> 
             <img src={dropdown} alt='dropdown icon'/>
             <DropdownFilter 
             setItemsPerPage={setItemsPerPage}
             className={showDropdown ? 'active' : ''}/>
            </div>
            <p>out of {users.length}</p>
            </div>
           <ReactPaginate
            nextLabel={<Button src={right}/>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<Button src={left}/>}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />
          </div>
        </>
      )
      }
      </>
    );
  }
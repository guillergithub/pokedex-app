
const Pagination = ({ pokemonsPerPage, pokemonsAmount, paginate, currentPage, maxPageNumberLimit, minPageNumberLimit, handleNextPage, handlePrevPage }) => {


    const pages = []

    for(let i=1; i <= Math.ceil(pokemonsAmount/pokemonsPerPage); i++) {
        pages.push(i)        
    }

    const renderPagination = pages.map((num => {        
        if(minPageNumberLimit+1 > 10 && minPageNumberLimit === num){
            
        } 

        if(num < maxPageNumberLimit+1 && num > minPageNumberLimit) {
            return (
                <li key={num} className="page-item">
                    <div onClick={() => paginate(num)} className={ (currentPage === num) ? "page-link selected-page" : "page-link" }>
                        {num}
                    </div>                        
                </li>
            )
        } else {
            return null
        }

    }))    

    return (
        <nav>
            <ul className='pagination'>
               
                <li className="page-item">
                    <div onClick={() => handlePrevPage()} className='page-link'>Prev</div>
                </li>

                { renderPagination }

                <li className='page-item"'>
                    <div onClick={() => handleNextPage()} className='page-link'>Next</div>
                </li>
                
            </ul>
        </nav>
    )
    
}

export default Pagination;
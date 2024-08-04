import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate,currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
        
    }
  return (
    <div>
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <span>
                            <a 
                                onClick={() => paginate(number)} 
                                className="page-link" 
                                aria-current={number === currentPage ? "page" : undefined} 
                                href="#"
                            >
                                {number}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination

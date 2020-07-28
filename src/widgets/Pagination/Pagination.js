import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const pageNumber = Number(props.pageNumber);
    const isTherePreviousPage = pageNumber > 1;
    const isThereNextPage = pageNumber < props.totalPages;
    const previousNumber = () => {
        return isTherePreviousPage ? 
            ( <li className="page-item"><a className="page-link" href={`${props.baseLink}/${pageNumber - 1}`}>{pageNumber - 1}</a></li> ) : null;
    }
    const nextNumber = () => {
        return isThereNextPage ? 
            ( <li className="page-item"><a className="page-link" href={`${props.baseLink}/${pageNumber + 1}`}>{pageNumber + 1}</a></li> ) : null;
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${ isTherePreviousPage ? "" : "disabled"}`}>
                <a className="page-link" href={`${props.baseLink}/${pageNumber - 1}`} tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                {previousNumber()}
                <li className="page-item active disabled"><a className="page-link" href={`${props.baseLink}/${pageNumber}`}>{pageNumber}</a></li>
                {nextNumber()}
                <li className={`page-item ${ isThereNextPage ? "" : "disabled"}`}>
                <a className="page-link" href={`${props.baseLink}/${pageNumber + 1}`}>Next</a>
                </li>
            </ul>
        </nav>      
    );
}

export default Pagination;
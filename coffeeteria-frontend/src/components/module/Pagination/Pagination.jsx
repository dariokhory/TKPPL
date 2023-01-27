import React from 'react'
// pkgs: react-paginate
import ReactPaginate from 'react-paginate'
// styles: module
import style from './Pagination.module.css'

export const Pagination = (props) => {
  return (
    <>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={parseInt(props.totalPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={props.pageEvent}
        containerClassName={`${style.pagination}`}
        subContainerClassName={`${style.pagination}`}
        activeClassName={style.active}
      />
    </>
  )
}

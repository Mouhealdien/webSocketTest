import React from "react";
import ReactPaginate from "react-paginate";

type propsType = {
  pageCount: number;
  setCurrentPage: (e: never) => void;
};
const Pagination = ({ pageCount, setCurrentPage }: propsType) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      onPageChange={({ selected }: never) => {
        setCurrentPage(selected);
      }}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;

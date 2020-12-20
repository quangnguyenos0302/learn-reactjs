import React from "react";
import PropTypes from "prop-types";

Pagingnation.propTypes = {
  paging: PropTypes.object.isRequired,
  onHandlerChangePage: PropTypes.func,
};

Pagingnation.defaultProps = {
  onHandlerChangePage: null,
};

function Pagingnation(props) {
  const { paging, onHandlerChangePage } = props;
  const { _limit, _page, _totalRows } = paging;
  const totalPage = Math.ceil(_totalRows / _limit);
  const handlerChangePage = (value) => {
    if (!onHandlerChangePage) return;
    onHandlerChangePage(value);
  };
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlerChangePage(-1)}>
        Prev
      </button>
      <button
        disabled={_page >= totalPage}
        onClick={() => handlerChangePage(1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagingnation;

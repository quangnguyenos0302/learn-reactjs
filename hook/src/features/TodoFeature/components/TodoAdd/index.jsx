import React, { useState } from "react";
import PropTypes from "prop-types";

TodoAdd.propTypes = {
  onSubmitForm: PropTypes.func,
};

TodoAdd.defaultProps = {
  onSubmitForm: null,
};

function TodoAdd(props) {
  const { onSubmitForm } = props;
  const [valueText, setValueText] = useState(() => {
    return "";
  });
  const handlerTextChange = (e) => {
    setValueText(e.target.value);
  };
  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (!onSubmitForm) return;
    let valueSend = {
      title: valueText,
    };
    onSubmitForm(valueSend);
    setValueText("");
  };
  return (
    <form onSubmit={handlerFormSubmit}>
      <input type="text" value={valueText} onChange={handlerTextChange} />
    </form>
  );
}

export default TodoAdd;

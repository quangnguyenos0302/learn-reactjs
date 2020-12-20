import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

SearchTerm.propTypes = {
  onSubmitForm: PropTypes.func,
};

SearchTerm.defaultProps = {
  onSubmitForm: null,
};

function SearchTerm(props) {
  const { onSubmitForm } = props;
  const [value, setValue] = useState(() => {
    return "";
  });
  const valueTermRef = useRef(null);
  const handlerChangeValue = (e) => {
    setValue(e.target.value);
    if (!onSubmitForm) return;
    if (valueTermRef.current) {
      clearTimeout(valueTermRef.current);
    }
    valueTermRef.current = setTimeout(() => {
      let valueForm = {
        title_like: e.target.value,
      };
      onSubmitForm(valueForm);
    }, 300);
  };
  return (
    <form>
      <input type="text" value={value} onChange={handlerChangeValue}></input>
    </form>
  );
}

export default SearchTerm;

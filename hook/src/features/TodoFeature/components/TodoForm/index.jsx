import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  handlerFormValues: PropTypes.func,
};

TodoForm.defaultProps = {
  handlerFormValues: null,
};

function TodoForm(props) {
  const { handlerFormValues } = props;
  const [value, setValue] = useState(() => {
    return "";
  });
  const handlerValueText = (e) => {
    setValue(e.target.value);
  };
  const handlerSubmitForm = (e) => {
    e.preventDefault();
    if (handlerFormValues) {
      const formValues = {
        task: value,
      };
      handlerFormValues(formValues);
    }
  };
  return (
    <form onSubmit={handlerSubmitForm}>
      <input type="input" value={value} onChange={handlerValueText} />
    </form>
  );
}

export default TodoForm;

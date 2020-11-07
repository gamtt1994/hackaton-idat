import PropTypes from "prop-types";
import React from "react";

const Money = (props) => {
  const { name, imagen } = props;

  return (
    <option className="imgoption" value={name}>
      {name}
    </option>
  );
};

export default Money;

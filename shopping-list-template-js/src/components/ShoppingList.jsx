import React from "react";
import PropTypes from 'prop-types';

export const ShoppingList = ({
  activeUser,
}) => {

  return (
    <div>{activeUser}</div>
  );
};

ShoppingList.propTypes = {
  activeUser: PropTypes.string.isRequired,
};

export default ShoppingList;

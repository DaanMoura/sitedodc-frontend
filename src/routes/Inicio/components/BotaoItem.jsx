import React from "react";
import { Link } from "react-router-dom";
import Card, { CardBody } from "../../../components/Card";
import PropTypes from "prop-types";

const BotaoItem = ({ to, children, className }) => (
  <div className="col-4 p-0 m-0">
    <Link to={to} className="text-decoration-none">
    <div className={"botao-item text-white pl-4 " + className}>
      <h5 className="pt-4">{children}</h5>
    </div>
  </Link>
  </div>
);

BotaoItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BotaoItem;
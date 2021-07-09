import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";

// variant: text(default) - fill - outline
// color: primary - secondary - danger
// size: sm - md(default) - lg

const Button = ({
  children,
  color,
  size,
  variant,
  disableShadow,
  ...props
}) => {
  // btn btn-fill btn-fill-primary btn-fill-sm
  const buttonClassName = classNames(
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${variant}-${color}`],
    styles[`btn-${variant}-${size}`],

    {
      [styles["btn-disableShadow"]]: disableShadow,
    }
  );

  return (
    <button type='button' className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,

  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["text", "outline", "fill"]),
  disableShadow: PropTypes.bool,
};

Button.defaultProps = {
  color: null,
  size: "md",
  variant: "text",
  disableShadow: false,
};

export default Button;

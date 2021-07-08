import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  label,
  color,
  backgroundColor,
  size,
  variant,
  disableShadow,
  ...props
}) => {
  const buttonClassName = classNames(
    styles.btn,
    styles[`btn-${color}`],
    styles[`btn-${size}`],
    styles[`btn-${variant}`],

    {
      [styles["btn-disableShadow"]]: disableShadow,
    }
  );

  return (
    <button
      type='button'
      className={buttonClassName}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,

  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outline"]),
};

Button.defaultProps = {
  color: "default",
  size: "medium",
  backgroundColor: null,
  variant: null,
};

export default Button;

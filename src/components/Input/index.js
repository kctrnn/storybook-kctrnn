import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  outline: none;
  border: 1px solid #828282;
  border-radius: 8px;

  padding: ${({ size }) => (size === 'sm' ? '10px 12px' : '18px 12px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  font-family: inherit;
  color: #333;
  font-weight: 500;
  font-size: 14px;

  background-color: ${({ disabled }) => (disabled ? '#f2f2f2' : '#fff')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &::placeholder {
    color: #828282;
  }

  &:hover {
    border-color: #333;
  }

  &:focus {
    border-color: ${({ error }) => (error ? '#D32F2F' : '#2962ff')};
  }

  border-color: ${({ error, disabled }) => {
    if (error) return '#D32F2F';
    if (disabled) return '#e0e0e0';

    return '#828282';
  }};

  & + p {
    color: ${({ error }) => error && '#D32F2F'};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 4px;

  font-size: 12px;
  color: #333;
  font-weight: 400;
`;

const HelperText = styled.p`
  font-size: 10px;
  color: #828282;
  font-weight: 400;
  margin-top: 4px;
`;

const Input = ({ value, multiline, row, helperText, ...props }) => {
  return (
    <FormGroup>
      <LabelStyled>Label</LabelStyled>

      <InputStyled
        placeholder='Placeholder'
        defaultValue={value}
        as={multiline ? 'textarea' : 'input'}
        rows={Number(row)}
        {...props}
      />

      {helperText && <HelperText>{helperText}</HelperText>}
    </FormGroup>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  multiline: PropTypes.bool,
  row: PropTypes.string,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
};

Input.defaultProps = {
  size: 'md',
  fullWidth: false,
  error: false,
  disabled: false,
  helperText: '',
  multiline: false,
  row: '',
  startIcon: false,
  endIcon: false,
};

export default Input;

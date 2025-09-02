import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ onHandleLoadBtn }) => {
  return <StyledButton onClick={onHandleLoadBtn}>Load more</StyledButton>;
};

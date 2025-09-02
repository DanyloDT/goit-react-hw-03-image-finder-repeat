import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #c3d3c6ff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #032905ff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  /* min-width: 180px; */
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #61a87bff;
    color: #fff;
    border-radius: 10px;
  }
`;

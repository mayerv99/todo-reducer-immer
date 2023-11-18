import styled from "styled-components";
import { opacify, toColorString } from "polished";

export const Container = styled.ul`
  width: 1028px;
  margin: 20px auto;
  overflow-y: scroll;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

export const FilterButton = styled.button<{
  color: string;
  isCurrent: boolean;
}>`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: transparent;
  gap: 5px;
  transition: 0.2s linear;
  border-radius: 4px;
  box-shadow: ${({ theme, isCurrent, color }) =>
    isCurrent ? `0 0 0 2px ${color}` : `0 0 0 1px ${theme.colors.gray_300} `};

  &:hover {
    box-shadow: ${({ theme, isCurrent, color }) =>
      isCurrent ? `0 0 0 2px ${color}` : `0 0 0 2px ${theme.colors.gray_300} `};
  }

  /* &:hover {
    background-color: ${({ color }) => opacify(0.02, color)};
  } */
  > h6 {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`;

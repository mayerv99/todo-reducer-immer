import styled, { css } from "styled-components";

export const Container = styled.div<{ isCompleted: boolean }>`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 10px 15px 10px 40px;

  border: 2px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const CategoryIndicator = styled.span<{ color: string }>`
  content: "";
  position: absolute;
  left: 0;
  width: 15px;
  height: 100%;
  background-color: ${({ color }) => color};
  border-radius: 2px 0 0 2px;
`;

const ButtonBase = css`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 4px;
  transition: 0.25s linear;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  ${ButtonBase}
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_dark};
  }
`;

export const CheckButton = styled.button<{ isCompleted: boolean }>`
  ${ButtonBase}
`;

export const TodoName = styled.div<{ isCompleted: boolean }>`
  position: relative;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

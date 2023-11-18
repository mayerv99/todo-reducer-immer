import styled, { css, keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const contentShow = keyframes`
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  `;

export const Container = styled.div`
  max-width: 1028px;
  margin: 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.gray_700};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Title = styled(Dialog.Title)`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputCss = css`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray_300};
  padding: 5px 10px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 0 0 1px black;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
    outline: none;
  }
`;

export const Input = styled.input`
  ${InputCss};
  width: 100%;
`;

export const TextArea = styled.textarea`
  ${InputCss};

  resize: none;
`;

export const NewButton = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 4px 7px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export const PageTitle = styled.h2`
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_200};
  color: black;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 5px 10px;
  transition: 0.5s linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 1px black;
  }
`;

export const CategoryButton = styled.button<{
  isSelected: boolean;
  color: string;
}>`
  width: 30%;
  border: 1px solid transparent;
  border-radius: 4px;

  cursor: pointer;

  background-color: ${({ isSelected, theme, color }) =>
    isSelected ? color : theme.colors.background.primary};

  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.text.dark};
  &:hover {
    box-shadow: 0 0 0 1px black;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
    outline: none;
  }
`;
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

import styled from "styled-components";
import { primaryFont } from "../fonts";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: end;
    gap: 1.4rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    gap: 1.8rem;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`;

export const FormBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const SelectInput = styled.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;

  appearance: none;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 22.4rem;
  }
`;

export const SelectedOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27.2rem;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1.4rem;
  overflow-y: scroll;

  padding: 1.4rem 1.8rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SelectedOptionText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;

export const FormLabel = styled.label`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const FormInputMileageWrapper = styled.div`
  display: flex;
  max-width: 32rem;
`;

export const FormInputRight = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;
export const FormInputLeft = styled.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 100%;
  height: 4.8rem;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }

  &:focus {
    outline: none;
    box-shadow: ${(p) => p.theme.colors.boxFocus} 0px 7px 29px 0px;
  }

  @media (min-width: 1440px) {
    width: 16rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

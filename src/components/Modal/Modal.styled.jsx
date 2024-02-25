import styled from "styled-components";
import { primaryFont } from "../fonts";
import Modal from "react-modal";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 24px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border-radius: 14px;
  padding: 4rem;
  width: 54rem;
  height: 75.2rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
`;

export const ModalWrapper = styled.div``;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 1.4rem;
  border-top-left-radius: 1.4rem;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 1.4rem;
`;

export const ModalTitleDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalTitleText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: #121417;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalDescr = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const ModalDescrText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalConditionWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const ModalCondition = styled.div`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`;

export const ModalBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  padding: 2rem 5rem;
  border-radius: 1.4rem;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

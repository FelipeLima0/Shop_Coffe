import styled from "styled-components";
import { pixToRem } from "../../../utils/pixToRem";

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: ${pixToRem(72)};
  height: ${pixToRem(29)};
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  
`;

export const BaseButton = styled.button`
  color: ${(props) => props.theme["purple"]};
  border: none;
  width: ${pixToRem(114)};
  font-size: 25px;
  background: transparent;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
  }
`;

export const ButtonAdd = styled(BaseButton)``;

export const ButtonRemove = styled(BaseButton)``;

export const NumberInput = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
`;

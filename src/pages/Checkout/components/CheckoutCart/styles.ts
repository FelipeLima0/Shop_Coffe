import styled from "styled-components";
import { pixToRem } from "../../../../utils/pixToRem";

export const CardCheckContainer = styled.div`
  display: flex;
  margin-bottom: ${pixToRem(24)};
  padding-bottom: ${pixToRem(24)};
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  width: ${pixToRem(368)};
  flex-direction: column;

  /* padding: ; */
`;

export const ImageCoffe = styled.img`
  width: ${pixToRem(64)};
  margin-right: ${pixToRem(13)};
`;

export const SubContainerCardCheck = styled.div`

`;

export const SpanTitle = styled.span`
  display: flex;
  gap: ${pixToRem(73)};
  margin-bottom: ${pixToRem(8)};
  justify-content: space-between;
`;  

export const ExpressTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 130%;
  color: ${props => props.theme["base-subtitle"]};
`

export const ExpressValue = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme["base-text"]};
`

export const ButtonCheck = styled.div`
  display: flex;
  gap: ${pixToRem(8)};
  position: absolute;
`;

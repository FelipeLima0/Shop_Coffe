import styled from "styled-components";
import { pixToRem } from "../../../../utils/pixToRem";

export const CardContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  width: 16rem;
  height: ${pixToRem(310)};
  border-radius: 6px 36px 6px 36px;
`;
export const TopCardContainer = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: ${pixToRem(120)};
    margin-top: -1.2rem;
    margin-bottom: ${pixToRem(12)};
  }
`;

export const SubTag = styled.div`
  display: flex;
  
`

export const TagCoffe = styled.span`
  border-radius: 15px;
  border: 7px solid ${(props) => props.theme["yellow-light"]};
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  line-height: 130%;
  margin-bottom: ${pixToRem(16)};
  display: inline;
`;

export const NameCoffe = styled.span`
  font-family: "Baloo 2", cursive;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 8px;
`;

export const DescriptionCoffe = styled.span`
  width: ${pixToRem(216)};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme["base-label"]};
  margin-bottom: 33px;
`;

export const FooterCard = styled.div`
  width: ${pixToRem(208)};
  height: ${pixToRem(38)};
  margin: auto;
  display: flex;
`;
export const RealValue = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 130%;
  margin-right: 0.4rem;
  color: ${(props) => props.theme["base-text"]};
  margin-top: .7rem;
`;

export const ValueCard = styled.span`
  font-family: "Baloo 2", cursive;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
  margin-right: ${pixToRem(23)};
`;

export const CatalogCoffe = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 17rem);
  gap: 2rem;
  
`
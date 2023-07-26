import styled from "styled-components";
import { pixToRem } from "../../utils/pixToRem";

export const CheckoutContainer = styled.div`
  margin-top: ${pixToRem(40)};
  display: flex;
  gap: ${pixToRem(32)};
  /* border: 1px solid red; */
  /* grid-template-columns: 40rem 20rem; */
`;

export const BaseText = styled.span`
  font-family: "Baloo 2", cursive;
  font-size: 18px;
  line-height: 130%;
  font-weight: bold;
  position: relative;
  top: -1.7rem;
  color: ${props => props.theme["base-subtitle"]};
`;

export const LeftContainer = styled.div`
  /* border: 1px solid red; */

  width: ${pixToRem(640)};
  height: ${pixToRem(372)};
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const LeftSubContainer = styled.div`
  padding-left: 2.3rem;
  width: ${pixToRem(640)};
  height: ${pixToRem(370)};
`;

export const LeftFooterContainer = styled.div`
  padding-left: ${pixToRem(40)};
  padding-top: ${pixToRem(40)};
  background: ${(props) => props.theme["base-card"]};
  padding-bottom: ${pixToRem(40)};
  border-radius: 6px;
`;

export const TextPagment = styled.span``;

export const FirstText = styled.div`
  display: flex;
  gap: ${pixToRem(8)};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SecondText = styled.p`
  margin-left: 1.8rem;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 130%;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: ${pixToRem(32)};
`;

export const TypePagment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 13rem);
  justify-content: center;
  /* gap: 3rem; */

  span {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 160%;
    padding-left: ${pixToRem(16)};
    align-items: center;
    gap: ${pixToRem(12)};
    width: ${pixToRem(155)};
    height: ${pixToRem(51)};
    border: none;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};

    &:hover {
      border: 1px solid ${(props) => props.theme["purple-dark"]};
      background: ${(props) => props.theme["purple-ligth"]};
    }

    img {
      margin-top: -0.2rem;
    }
  }
`;

export const TextLeft = styled(BaseText)``;

export const FormCheckContainer = styled.div``;

export const AndressAttention = styled.span`
  display: flex;
  margin-bottom: ${pixToRem(32)};
  img {
    position: relative;
    top: -0.7rem;
    right: 0.4rem;
  }
`;

export const OneText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const TwoText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const InputsContainer = styled.form`
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
  gap: 0.2rem;
`;
export const BaseInputs = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  margin-bottom: 1rem;
  padding-left: ${pixToRem(12)};

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 130%;
  color: ${(props) => props.theme["base-text"]};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 130%;
  }
`;

export const InputCep = styled(BaseInputs)`
  grid-column-start: 1;
  grid-column-end: 4;
  width: ${pixToRem(200)};
  height: ${pixToRem(42)};
`;

export const InputRua = styled(BaseInputs)`
  grid-column-start: 1;
  grid-column-end: 4;
  width: ${pixToRem(560)};
  height: ${pixToRem(42)};
`;

export const InputNumero = styled(BaseInputs)`
  grid-column-start: 1;
  grid-column-end: 3;
  width: ${pixToRem(200)};
  height: ${pixToRem(42)};
  
`;

export const InputComplemento = styled(BaseInputs)`
  grid-column-start: 4;
  width: ${pixToRem(348)};
  height: ${pixToRem(42)};
  margin-left: 1.3rem;
`;

export const InputBairro = styled(BaseInputs)`
  width: ${pixToRem(200)};
  height: ${pixToRem(42)};
`;

export const InputCidade = styled(BaseInputs)`
  width: ${pixToRem(276)};
  height: ${pixToRem(42)};
  margin-left: 9.3rem;
`;

export const InputUF = styled(BaseInputs)`
  width: ${pixToRem(60)};
  height: ${pixToRem(42)};
  margin-left: 23.3rem;
`;

export const RightContainer = styled.div`
  /* border: 1px solid red; */
  border-radius: 6px 44px 6px 44px;
  width: ${pixToRem(448)};
  /* min-height: ${pixToRem(250)}; */
  /* height: ${pixToRem(498)}; */
  background: ${(props) => props.theme["base-card"]};
`;

export const RightSubContainer = styled.div`
  padding-left: ${pixToRem(40)};
  margin-top: 1rem;
`;

export const CheckoutValues = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pixToRem(368)};
  gap: ${pixToRem(12)};
`;

export const BaseValues = styled.span`
  display: flex;
  justify-content: space-between;

  tr {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 130%;
  }

  td {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 130%;
  }

  th {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 130%;
  }
`;

export const TotalItensValues = styled(BaseValues)``;

export const EntregaValue = styled(BaseValues)``;

export const TotalValue = styled(BaseValues)``;

export const ButtonConfirm = styled.button`
  margin-top: ${pixToRem(24)};
  width: ${pixToRem(368)};
  height: ${pixToRem(46)};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["yellow"]};
  border: none;
  border-radius: 6px;
`;

export const TextRight = styled(BaseText)`
  display: flex;
  justify-content: space-between;
  
`;

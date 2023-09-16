import Local from "../../assets/LocalSucess.svg";
import TimeSucess from "../../assets/TimeSucess.svg";
import CifraSucess from "../../assets/CifraSucess.svg";
import Ilustracao from "../../assets/Illustration.svg";
import {
  CifraInfo,
  ContainerInfo,
  LeftContainer,
  LocalInfo,
  RightContainer,
  SucessContainer,
  TimeInfo,
  TitleH1,
  TitleP,
  TitleSucess,
} from "./styles";
import { PropsSucess } from "../Checkout";
import { useContext, useEffect } from "react";
import { CoffesContext } from "../../context";



export function Sucess() {
  const { formValueState, buttonSel } = useContext(CoffesContext);

  let payments: string

  if (buttonSel === 0) {
    payments = "Cartão de crédito";
  } else if (buttonSel === 1) {
    payments = "Cartão de débito";
  } else if (buttonSel === 2) {
    payments = "Dinheiro";
  }
  
  
  

  

  return (
    <SucessContainer>
      <LeftContainer>
        <TitleSucess>
          <TitleH1>Uhu! Pedido confirmado</TitleH1>
          <TitleP>Agora é só aguardar que logo o café chegará até você</TitleP>
        </TitleSucess>
        <ContainerInfo>
          <LocalInfo>
            <img src={Local} alt="" />
            <p>
              Entrega em Rua <strong>{formValueState.rua}</strong>,
              <strong>{formValueState.numero}</strong> {formValueState.cidade} - {formValueState.bairro}
            </p>
          </LocalInfo>
          <TimeInfo>
            <img src={TimeSucess} alt="" />
            <p>
              <tr>Previsão de entrega</tr>
              <th>20 min - 30 min</th>
            </p>
          </TimeInfo>
          <CifraInfo>
            <img src={CifraSucess} alt="" />
            <p>
              <tr>Pagamento na entrega</tr>
              <th>{payments}</th>
            </p>
          </CifraInfo>
        </ContainerInfo>
      </LeftContainer>

      <RightContainer>
        <img src={Ilustracao} alt="" />
      </RightContainer>
    </SucessContainer>
  );
}

import Local from "../../assets/LocalSucess.svg";
import TimeSucess from "../../assets/TimeSucess.svg";
import CifraSucess from "../../assets/CifraSucess.svg";
import Ilustracao from "../../assets/Illustration.svg";
import { CifraInfo, ContainerInfo, LeftContainer, LocalInfo, RightContainer, SucessContainer, TimeInfo, TitleH1, TitleP, TitleSucess } from "./styles";

export function Sucess() {
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
              Entrega em Rua <strong>João Daniel Martinelli</strong>, <strong>102</strong> Farrapos - Porto Alegre,
              RS
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
              <th>Cartão de Crédito</th>
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
import {
  AndressAttention,
  ButtonConfirm,
  CheckoutContainer,
  CheckoutValues,
  EntregaValue,
  FirstText,
  FormCheckContainer,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNumero,
  InputRua,
  InputUF,
  InputsContainer,
  LeftContainer,
  LeftFooterContainer,
  LeftSubContainer,
  OneText,
  RightContainer,
  RightSubContainer,
  SecondText,
  TextLeft,
  TextPagment,
  TextRight,
  TotalItensValues,
  TotalValue,
  TwoText,
  TypePagment,
} from "./styles";
import Locate from "../../assets/Icon.svg";
import Cifra from "../../assets/Icon CIfra.svg";
import Money from "../../assets/Money.svg";
import Bank from "../../assets/bank.svg";
import Cartao from "../../assets/cartao.svg";
import { CheckoutCard } from "./components/CheckoutCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffesContext } from "../../context";

export function Checkout() {
  
  const {  total, totalCoffes } = useContext(CoffesContext)

  return (
    <CheckoutContainer>
      <LeftContainer>
        <TextLeft>Complete o pedido</TextLeft>
        <LeftSubContainer>
          <FormCheckContainer>
            <AndressAttention>
              <img src={Locate} alt="" />
              <tbody>
                <OneText>Endereco de entrega</OneText>
                <TwoText>
                  Informe o endereco onde deseja receber seu pedido
                </TwoText>
              </tbody>
            </AndressAttention>
            <InputsContainer action="">
              <InputCep type="number" placeholder="CEP" />
              <InputRua type="text" placeholder="Rua" />
              <InputNumero type="number" placeholder="Numero" />
              <InputComplemento type="text" placeholder="Complemento" />
              <InputBairro type="text" placeholder="Bairro" />
              <InputCidade type="text" placeholder="Cidade" />
              <InputUF type="text" placeholder="UF" />
            </InputsContainer>
          </FormCheckContainer>
        </LeftSubContainer>
        <LeftFooterContainer>
          <TextPagment>
            <FirstText>
              <img src={Cifra} alt="" />
              <p>Pagamento</p>
            </FirstText>
            <SecondText>
              O pagamento e feito na entrega. Escolha a forma que deseja pagar
            </SecondText>
          </TextPagment>
          <TypePagment>
            <span>
              <img src={Cartao} alt="" />
              <p>Cartão de crédito</p>
            </span>
            <span>
              <img src={Bank} alt="" />
              <p>cartão de débito</p>
            </span>
            <span>
              <img src={Money} alt="" />
              <p>dinheiro</p>
            </span>
          </TypePagment>
        </LeftFooterContainer>
      </LeftContainer>

      <RightContainer>
          <TextRight>Cafés selecionados</TextRight>
        <RightSubContainer>
          <CheckoutCard />
          <CheckoutValues>
            <TotalItensValues>
              <tr>Total de itens</tr>
              <td>R$ {totalCoffes}</td>
            </TotalItensValues>
            <EntregaValue>
              <tr>Entrega</tr>
              <td>R$ 3,50</td>
            </EntregaValue>
            <TotalValue>
              <th>Total</th>
              <th>R$ {total}</th>
            </TotalValue>
          </CheckoutValues>
          <NavLink to="/sucess">
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </NavLink>
        </RightSubContainer>
      </RightContainer>
    </CheckoutContainer>
  );
}

import {
  AndressAttention,
  ButtonConfirm,
  CheckoutContainer,
  CheckoutValues,
  EntregaValue,
  FirstText,
  FormCheckContainer,
  InputBairro,
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
import styles from "./styles.module.css"

import Locate from "../../assets/Icon.svg";
import Cifra from "../../assets/Icon CIfra.svg";
import { CheckoutCard } from "./components/CheckoutCart";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CoffesContext } from "../../context";
import { buttonsPayment } from "./components/ButtonPayment";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";
import { pixToRem } from "../../utils/pixToRem";

export function Checkout() {
  const createOrderFormSchema = z.object({
    cep: z.string()
      .min(8),
    rua: z.string()
      .min(1),
    numero: z.string()
      .nonempty(),
    complemento: z.string()
      ,
    bairro: z.string()
      .nonempty(),
    cidade: z.string()
      .nonempty(),
    uf: z.string()
      .nonempty(),
    pagament: z.string()  
  });

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(createOrderFormSchema),
  });

  const { total, totalCoffes } = useContext(CoffesContext);
  const [buttonSel, setButtonSel] = useState(null);

  const [output, setOutput] = useState("");

  

  console.log('aqui esta o valor do button', buttonSel)

  function formValidation(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  const handleButtonSel = (index: number) => {
    setButtonSel(index);
  };

  return (
    <CheckoutContainer onSubmit={handleSubmit(formValidation)}>
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
            <InputsContainer>
              <PatternFormat 
              className={styles.inputCep}
                required 
                placeholder="CEP" 
                {...register("cep")} 
                format="#####-###"
                mask={"_"}
                />
                
              <InputRua 
                type="text" 
                placeholder="Rua" 
                {...register("rua")} 
                />
              <InputNumero
                type="number"
                placeholder="Numero"
                {...register("numero")}
              />
              <InputComplemento
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
              />
              <InputBairro
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
              />
              <InputCidade
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
              <InputUF 
                type="text" 
                placeholder="UF" 
                {...register("uf")} 
                maxLength={2}
                />
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
            {buttonsPayment.map((button, index) => {
              const color = index === buttonSel ? "#dcd1f7" : null;
              // const colorBorder = index === buttonSel ? "#4B2995" : "none";

              return (
                <button 
                  type="button"
                  style={{
                    background: color,
                    // border: `3px solid ${colorBorder}`,
                  }}
                  key={index}
                  onClick={() => handleButtonSel(index)}
                  {...register('pagament')}
                >
                  <img src={button.image} alt="" />
                  <p>{button.title}</p>
                </button>
              );
            })}
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
              <th>{total}</th>
            </TotalValue>
          </CheckoutValues>
          <NavLink to="/sucess">
          <ButtonConfirm type="submit">CONFIRMAR PEDIDO</ButtonConfirm>
          </NavLink>
          <pre>{output}</pre>
        </RightSubContainer>
      </RightContainer>
    </CheckoutContainer>
  );
}

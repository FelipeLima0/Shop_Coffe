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
import styles from "./styles.module.css";

import Locate from "../../assets/Icon.svg";
import Cifra from "../../assets/Icon CIfra.svg";
import { CheckoutCard } from "./components/CheckoutCart";
import { useContext, useState } from "react";
import { CoffesContext } from "../../context";
import {  buttonsPayment } from "./components/ButtonPayment";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";


// interface FormState {
//   cep: string;
//   rua: string;
//   numero: string;
//   complemento: string;
//   bairro: string;
//   cidade: string;
//   uf: string;
// }

export interface PropsSucess {
  buttonSel: any;
}

const createOrderFormSchema = z.object({
  cep: z.string().nonempty(),
  rua: z.string().nonempty(),
  numero: z.string().nonempty(),
  complemento: z.string(),
  bairro: z.string().nonempty(),
  cidade: z.string().nonempty(),
  uf: z.string().nonempty(),
});

export type FormState = Zod.infer<typeof createOrderFormSchema>;

export const initialFormState: FormState = {
  cep: "",
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: "",
};

export function Checkout() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(createOrderFormSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });


  const [formData, setFormData] = useState<FormState>(initialFormState);


  const { total, totalCoffes, setFormValueState, setButtonSel, buttonSel } = useContext(CoffesContext);
  

 

  function formValidation(data: FormState) {
    const valuesAddress: FormState = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    };

    setFormValueState(valuesAddress)

    navigate("/sucess");

    reset();
  }


  const handleButtonSel = (index: number) => {
    setButtonSel(index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const isFormEmpty = Object.values(formData).some((value) => value === "" );

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
              <input
                className={styles.inputCep}
                required
                placeholder="CEP"
                {...register("cep")}
                minLength={8}
                maxLength={8}
                onChange={handleChange}
                value={formData.cep}
              />

              <InputRua
                type="text"
                placeholder="Rua"
                {...register("rua")}
                onChange={handleChange}
                value={formData.rua}
              />
              <InputNumero
                type="number"
                placeholder="Numero"
                {...register("numero")}
                maxLength={8}
                onChange={handleChange}
                value={formData.numero}
              />
              <InputComplemento
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
                onChange={handleChange}
                value={formData.complemento}
              />
              <InputBairro
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
                onChange={handleChange}
                value={formData.bairro}
              />
              <InputCidade
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
                onChange={handleChange}
                value={formData.cidade}
              />
              <InputUF
                type="text"
                placeholder="UF"
                {...register("uf")}
                maxLength={2}
                onChange={handleChange}
                value={formData.uf}
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

              return (
                
                <button
                  
                  type="button"
                  style={{
                    background: color,
                  }}
                  key={index}
                  onClick={() => handleButtonSel(index)}
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
          <ButtonConfirm 
          // disabled={isFormEmpty} 
          type="submit">
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </RightSubContainer>
      </RightContainer>
    </CheckoutContainer>
  );
}

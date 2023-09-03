import { InputNumber } from "../../../components/InputNumber";

import {
  ButtonCheck,
  CardCheckContainer,
  ExpressTitle,
  ExpressValue,
  ImageCoffe,
  SpanTitle,
  SubContainerCardCheck,
} from "./styles";
import { ButtonRemove } from "../ButtonRemove/Index";
import { useContext } from "react";
import { CoffesContext } from "../../../../context";

export function CheckoutCard() {
  const { listAll, add, removeQuantity, remove } = useContext(CoffesContext);

  function handleAdd(id: string) {
    add(id);
  }

  function handleRemove(id: string) {
    removeQuantity(id);
  }

  function handleRemoveTotal(id: string) {
    remove(id);
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <CardCheckContainer>
      {listAll.map((cafe) => (
        
          <>
          
            <ImageCoffe src={cafe.image} alt="" />
            <SubContainerCardCheck>
              <SpanTitle>
                <ExpressTitle>{cafe.title}</ExpressTitle>
                <ExpressValue>{formatter.format(cafe.valueCoffe)}</ExpressValue>
              </SpanTitle>
              <ButtonCheck>
                <InputNumber
                  add={() => handleAdd(cafe.id)}
                  removeQuantity={() => handleRemove(cafe.id)}
                  initialValue={cafe.quantity}
                  />
                <ButtonRemove remove={() => handleRemoveTotal(cafe.id)} />
              </ButtonCheck>
            </SubContainerCardCheck>
          
        </>
     
      ))}
    </CardCheckContainer>
  );
}

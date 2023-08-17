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
  const { listAll, add, removeQuantity } = useContext(CoffesContext);

  function handleAdd(id: string) {
    add(id);
  }

  function handleRemove(id: string) {
    removeQuantity(id);
  }

  return (
    <CardCheckContainer>
      {listAll.map((cafe) => (
        <>
          <ImageCoffe src={cafe.image} alt="" />
          <SubContainerCardCheck>
            <SpanTitle>
              <ExpressTitle>{cafe.title}</ExpressTitle>
              <ExpressValue>R$ {cafe.valueCoffe}</ExpressValue>
            </SpanTitle>
            <ButtonCheck>
              <InputNumber
                add={() => handleAdd(cafe.id)}
                remove={() => handleRemove(cafe.id)}
              />
              <ButtonRemove />
            </ButtonCheck>
          </SubContainerCardCheck>
        </>
      ))}
    </CardCheckContainer>
  );
}

import { InputNumber } from "../../../components/InputNumber";


import cofe from "../../../../assets/Type=Americano.svg";
import { ButtonCheck, CardCheckContainer, ExpressTitle, ExpressValue, ImageCoffe, SpanTitle, SubContainerCardCheck } from "./styles";
import { ButtonRemove } from "../ButtonRemove/Index";

export function CheckoutCard() {
  return (
    <CardCheckContainer>
      <ImageCoffe src={cofe} alt="" />
      <SubContainerCardCheck>
        <SpanTitle>
          <ExpressTitle>Expresso Tradicional</ExpressTitle>
          <ExpressValue>R$ 9,90</ExpressValue>
        </SpanTitle>
          <ButtonCheck>
            <InputNumber />
            <ButtonRemove />
          </ButtonCheck>
      </SubContainerCardCheck>
    </CardCheckContainer>
  );
}

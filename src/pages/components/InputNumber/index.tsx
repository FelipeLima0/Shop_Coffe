import { ButtonAdd, ButtonRemove, InputContainer, NumberInput } from "./styles";
interface Props {
  add(): void
  removeQuantity(): void
  initialValue: number
}

export function InputNumber({add, removeQuantity, initialValue}:Props) {
  
  return (
    <InputContainer>
      <ButtonRemove onClick={removeQuantity}>-</ButtonRemove>
      <NumberInput>{initialValue}</NumberInput>
      <ButtonAdd onClick={add}>+</ButtonAdd>
    </InputContainer>
  );
}

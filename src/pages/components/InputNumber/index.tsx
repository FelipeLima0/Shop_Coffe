import { ButtonAdd, ButtonRemove, InputContainer, NumberInput } from "./styles";
interface Props {
  add(): void
  remove(): void
}

export function InputNumber({add, remove }:Props) {
  
  return (
    <InputContainer>
      <ButtonRemove onClick={remove}>-</ButtonRemove>
      <NumberInput>{}</NumberInput>
      <ButtonAdd onClick={add}>+</ButtonAdd>
    </InputContainer>
  );
}

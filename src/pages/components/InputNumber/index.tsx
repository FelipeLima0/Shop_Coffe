import { useState } from "react";
import { ButtonAdd, ButtonRemove, InputContainer, NumberInput } from "./styles";

export function InputNumber() {
  const [coffes, setCoffes] = useState(0);

  const addCoffe = () => {
    setCoffes(coffes + 1);
  };

  const removeCoffe = () => {
    if (coffes > 0) {
      setCoffes(coffes - 1);
    }
  };

  return (
    <InputContainer>
      <ButtonRemove onClick={removeCoffe}>-</ButtonRemove>
      <NumberInput>{coffes}</NumberInput>
      <ButtonAdd onClick={addCoffe}>+</ButtonAdd>
    </InputContainer>
  );
}

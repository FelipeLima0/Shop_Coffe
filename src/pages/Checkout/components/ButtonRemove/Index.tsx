import Lixo from "../../../../assets/lixo.svg";
import { ButtonRemoveContainer } from "./styles";

interface Props {
  remove(): void;
}

export function ButtonRemove({ remove }: Props) {
  return (
    <ButtonRemoveContainer onClick={remove}>
      <span>
        <img src={Lixo} alt="" />
      </span>
      REMOVER
    </ButtonRemoveContainer>
  );
}

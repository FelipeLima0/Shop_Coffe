import Lixo from "../../../../assets/lixo.svg";
import { ButtonRemoveContainer } from "./styles";

export function ButtonRemove() {
  return (
    <ButtonRemoveContainer>
      <span>
        <img src={Lixo} alt="" />
      </span>
      REMOVER
    </ButtonRemoveContainer>
  );
}

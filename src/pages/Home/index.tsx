import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HomeImg from "../../assets/Imagem.svg";
import {
  CircleBlack,
  CirclePurple,
  CircleYellow,
  CircleYellowDark,
  HomeContainer,
  LeftHome,
  RightHome,
  SubContainer,
} from "./styles";

import { Cards } from "./components/Cards";

export function Home() {


  return (
    <HomeContainer>
      <SubContainer>
        <LeftHome>
          <h1>
            Encontre o cafe perfeito <br />
            para qualquer hora do dia
          </h1>
          <text>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </text>
          <section>
            <div>
              <p>
                <CircleYellowDark>
                  <ShoppingCart size={16} color="white" />
                </CircleYellowDark>
                Compra simples e segura
              </p>
              <p>
                <CircleYellow>
                  <Timer size={16} color="white" />
                </CircleYellow>
                Entrega rapida e restreada
              </p>
            </div>
            <div>
              <p>
                <CircleBlack>
                  <Package size={16} color="white" />
                </CircleBlack>
                O cafe chega fresquinho ate voce
              </p>
              <p>
                <CirclePurple>
                  <Coffee size={16} color="white" />
                </CirclePurple>
                Embalagem mantem o cafe intacto
              </p>
            </div>
          </section>
        </LeftHome>
        <RightHome>
          <img src={HomeImg} />
        </RightHome>
      </SubContainer>
      <h2>Nossos Cafes</h2>
        <Cards />
    </HomeContainer>
  );
}

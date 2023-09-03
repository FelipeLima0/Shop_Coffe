import { useContext } from "react";
import { CoffesContext } from "../../../../context";
import { CartShop } from "../../../components/Cart";
import { InputNumber } from "../../../components/InputNumber";
import {
  CardContainer,
  CatalogCoffe,
  DescriptionCoffe,
  FooterCard,
  NameCoffe,
  RealValue,
  SubTag,
  TagCoffe,
  TopCardContainer,
  ValueCard,
} from "./styles";
import { NavLink } from "react-router-dom";

export function Cards() {
  const { menu, add, removeQuantity } = useContext(CoffesContext);

  function handleAdd(id: string) {
    add(id);
  }

  function handleRemove(id: string) {
    removeQuantity(id);
  }
  console.log("aqui esta o meu", menu);
  return (
    <CatalogCoffe>
      {menu.map((coffe) => (
        <CardContainer>
          <TopCardContainer>
            <img src={coffe.image} alt="" />
            <SubTag>
              {coffe.tag.map((tag) => (
                <TagCoffe>{tag}</TagCoffe>
              ))}
            </SubTag>
            <NameCoffe>{coffe.title}</NameCoffe>
            <DescriptionCoffe>{coffe.info}</DescriptionCoffe>
          </TopCardContainer>
          <FooterCard>
            <RealValue>R$</RealValue>
            <ValueCard>
              {coffe.valueCoffe.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </ValueCard>
            <InputNumber
              add={() => handleAdd(coffe.id)}
              removeQuantity={() => handleRemove(coffe.id)}
              initialValue={coffe.quantity}
            />
            <NavLink to="/checkout">
          
                <CartShop/>

            </NavLink>
          </FooterCard>
        </CardContainer>
      ))}
    </CatalogCoffe>
  );
}

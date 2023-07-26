import { useContext } from "react";
import { CoffesContext } from "../../../../context/CoffesContext";
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
  const { cafes } = useContext(CoffesContext);

  return (
    <CatalogCoffe>
      {cafes.map((cafes) => (
        <CardContainer>
          <TopCardContainer>
            <img src={cafes.image} alt="" />
            <SubTag>
              {cafes.tag.map((tag) => (
                <TagCoffe>
                  {tag}
                </TagCoffe>
              ))}
            </SubTag>
            <NameCoffe>{cafes.title}</NameCoffe>
            <DescriptionCoffe>{cafes.info}</DescriptionCoffe>
          </TopCardContainer>
          <FooterCard>
            <RealValue>R$</RealValue>
            <ValueCard>{cafes.valueCoffe.toLocaleString('pt-br', {minimumFractionDigits: 2})}</ValueCard>
            <InputNumber />
            <NavLink to="/checkout">
              <CartShop />
            </NavLink>
          </FooterCard>
        </CardContainer>
      ))}
    </CatalogCoffe>
  );
}

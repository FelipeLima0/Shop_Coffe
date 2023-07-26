import CartMainShop from '../../../assets/Button.svg'
import { CartContainer } from './styles'

export function CartShop() {
    return (
        <CartContainer>
            <img src={CartMainShop} alt="" />
        </CartContainer>
    )
}
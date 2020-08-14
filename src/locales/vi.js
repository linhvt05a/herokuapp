import cart from './vi/cart';
import product from './vi/product'
import notification from "./vi/notification";

const vi = {
    ...cart,
    ...product,
    ...notification
}

export default vi;
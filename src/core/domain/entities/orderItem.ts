import { Product } from "./product"


export type OrderItem = {
    product: Product,
    quantity: number,
    observations: string
}
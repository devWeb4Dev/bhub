import { OrderItem } from "../../entities/orderItem"
import { OrderEventsInterface } from "./orderEventsInterface"

export class NewAssociation implements OrderEventsInterface {
    items: OrderItem[] = []

    filter(item: OrderItem){
        if (item.product.type === 'new-association') {
            this.items.push(item)
        }
    }

    async apply() {
        if (this.items.length) {
            console.log('activate new association.')
        }
    }
}
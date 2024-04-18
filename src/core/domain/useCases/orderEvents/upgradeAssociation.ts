import { OrderItem } from "../../entities/orderItem"
import { OrderEventsInterface } from "./orderEventsInterface"

export class UpgradeAssociation implements OrderEventsInterface {
    items: OrderItem[] = []

    filter(item: OrderItem): this {
        if (item.product.type === 'upgrade-association') {
            this.items.push(item)
        }
        return this
    }

    async apply() {
        if (this.items.length) {
            console.log('upgrade da association.')
        }
    }
}
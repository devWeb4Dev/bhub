import { OrderEventsInterface } from "./orderEventsInterface"
import { OrderItem } from "../../entities/orderItem"
import { GuideServicePort } from "../../../port/GuideServicePort"
import { CommissionServicePort } from "../../../port/CommissionServicePort"


export class PhysicalProduct implements OrderEventsInterface {
    items: OrderItem[] = []

    constructor(
        private guideService: GuideServicePort,
        private commissionService: CommissionServicePort
    ) { }

    filter(item: OrderItem) {
        if (item.product.isPhysical) {
            this.items.push(item)
        }
    }

    async apply() {
        if (this.items.length) {
            await this.commissionService.create()
            await this.guideService.create()
        }
    }
}
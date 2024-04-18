import { OrderEventsInterface } from "./orderEventsInterface"
import { OrderItem } from "../../entities/orderItem"
import { EmailServicePort } from "../../../port/EmailServicePort"
import { GuideServicePort } from "../../../port/GuideServicePort"
import { CommissionServicePort } from "../../../port/CommissionServicePort"

export class BookProduct implements OrderEventsInterface {
    items: OrderItem[] = []

    constructor(
        private emailService: EmailServicePort,
        private guideService: GuideServicePort,
        private commissionService: CommissionServicePort
    ) { }

    filter(item: OrderItem): this {
        if (item.product.type == 'book') {
            this.items.push(item)
        }
        return this
    }

    async apply() {
        if (this.items.length) {
            await this.commissionService.create()
            await this.guideService.create()
            await this.emailService.sendEmail('richard@sami.com', 'Pedido de livro', 'Seu pedido de livro foi realizado com sucesso.')
        }
    }
}
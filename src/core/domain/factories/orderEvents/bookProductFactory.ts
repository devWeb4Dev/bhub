import { CommissionService } from "../../../infra/ComissionService"
import { EmailService } from "../../../infra/EmailService"
import { GuideService } from "../../../infra/GuideService"
import { BookProduct } from "../../useCases/orderEvents/bookProduct"

export class BookProductFactory {
    static create() {
        const emailService = new EmailService()
        const guideService = new GuideService()
        const commissionService = new CommissionService()
        return new BookProduct(emailService, guideService, commissionService)
    }
}
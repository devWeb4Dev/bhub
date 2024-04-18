import { GuideService } from "../../../infra/GuideService";
import { PhysicalProduct } from "../../useCases/orderEvents/physicalProduct";

export class PhysicalProductFactory {
    static create() {
        const guideService = new GuideService()
        const commissionService = new GuideService()
        return new PhysicalProduct(guideService, commissionService)
    }
}
import { OrderEventsInterface } from "../../useCases/orderEvents/orderEventsInterface";
import { BookProductFactory } from "./bookProductFactory";
import { NewAssociationFactory } from "./newAssociationFactory";
import { PhysicalProductFactory } from "./physicalProductFactory";
import { UpgradeAssociationFactory } from "./upgradeAssociation";
import { VideoFactory } from "./VideFactory";

export const listFactoriesEvents: OrderEventsInterface[] = [
    PhysicalProductFactory.create(),
    NewAssociationFactory.create(),
    UpgradeAssociationFactory.create(),
    BookProductFactory.create(),
    VideoFactory.create(),
]

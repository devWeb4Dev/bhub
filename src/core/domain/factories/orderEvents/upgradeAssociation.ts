import { UpgradeAssociation } from "../../useCases/orderEvents/upgradeAssociation";

export class UpgradeAssociationFactory {
    static create() {
        return new UpgradeAssociation();
    }
}
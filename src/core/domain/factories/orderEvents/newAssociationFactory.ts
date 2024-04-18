import { NewAssociation } from "../../useCases/orderEvents/newAssociation";

export class NewAssociationFactory {
    static create() {
        return new NewAssociation();
    }
}
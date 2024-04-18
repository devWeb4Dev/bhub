import { OrderItem } from "../../entities/orderItem";

export interface OrderEventsInterface {
    items: OrderItem[];
    filter: (item: OrderItem) => void;
    apply: () => Promise<void>
}
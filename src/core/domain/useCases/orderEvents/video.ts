import { OrderItem } from "../../entities/orderItem";
import { OrderEventsInterface } from "./orderEventsInterface";

export class Video implements OrderEventsInterface {
    items: OrderItem[] = []

    filter(item: OrderItem) {
        if (item.product.type === 'video' && item.product.name == 'Aprendendo a Esquiar') {
            this.items.push(item)
        }
    }

    async apply() {
        if (this.items.length) {
            console.log('generate a packing slip for shipping.')
        }
    }
}


// =====================================================================================================

// --- Filtro => 1
// campo produto => operador aritimetico => valor
// product.type => "=" => "video"
// product.name => "=" => "Aprendendo a Esquiar"

// Acões
// filterId, action, configuration
// 1, email, { to: internal, mensagem: 'generate a packing slip for shipping.', template: 'asdasda' }
// 1, email, { to: client, mensagem: 'xxxxx', template: 'asdasda' }
// 1, geracao-guia, { tipo: 'shipping', destino: 'xxxxx' }
// 1, add-product, { productId: '2', quantidade: 1 }

// configuration
// type, label, params
// email, Email:, { to: enum[internal, client], mensagem: string, template: url }
// geracao-guia, Geracao de guia, { destino: string }
// add-product, Adicionar produto, { productId: number, quantidade: number }








import Fastify from 'fastify';
import { listFactoriesEvents } from './core/domain/factories/orderEvents';
const fastify = Fastify({ logger: true });

fastify.post('/payment-received', async (request, reply) => {
    try {
        const order = {
            id: 1,
            data: new Date(),
            orderItems: [
                {
                    product: {
                        id: 1,
                        name: 'Como fazer amigos e influenciar pessoas',
                        isPhysical: false,
                        type: 'book'
                    },
                    quantity: 2,
                    observations: 'Entregar para o João no segundo andar do predio'
                },
                {
                    product: {
                        id: 2,
                        name: 'Nova assinatura',
                        isPhysical: false,
                        type: 'new-association'
                    },
                    quantity: 1,
                    observations: ''
                }
            ]
        }

        for (const event of listFactoriesEvents) {
            for (const item of order.orderItems) {
                event.filter(item);
            }
            await event.apply();
        }

        reply.send('ok');
    } catch (err) {
        request.log.error(err);
        reply.status(500).send('Erro interno do servidor');
    }
});

const start = async () => {
    fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            fastify.log.error(err);
            process.exit(0);
        }
        fastify.log.info(`servidor rodando na porta ${address}`);
    })
};

start();

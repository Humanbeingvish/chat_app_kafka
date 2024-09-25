import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'chat-app',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'chat-group' });

const receiveChatMessages = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'chat', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received: ${message.value?.toString()}`);
        },
    });
};

receiveChatMessages();

import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId:'chat-app',
    brokers:['localhost:9092']
});

const producer = kafka.producer();

const sendMessage= async()=>{
    await producer.connect();
    await producer.send({
        topic:'chat',
        messages:[{value:'Hi got the first message'}]
    });

    producer.disconnect();
    console.log('Message Sent')

}

sendMessage();
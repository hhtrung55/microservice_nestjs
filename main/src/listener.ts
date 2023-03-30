import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {

    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://jswqvmrl:W52hi74vWLnxiqtckt1YQDoM1h-XFYDl@armadillo.rmq.cloudamqp.com/jswqvmrl'],
            queue: 'main_queue',
            queueOptions: {
                durable: false,
            },
        },
    });
    app.listen().then(() => console.log('microservice is listening'))
}

bootstrap().then()

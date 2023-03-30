import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";

export const PORT = 3001

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    await app.listen(3001);
}

bootstrap().then(() => {
    console.log('Main running at ', PORT);
}).catch(console.log)

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

const PORT = 3000;

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    await app.listen(PORT);
}

bootstrap().then(() => {
    console.log('admin running is port ', PORT);
}).catch((err => console.log('main project error: ', err)));

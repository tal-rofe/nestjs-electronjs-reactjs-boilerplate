import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import EnvConfiguration from './config/configuration';

async function bootstrap() {
	const appContext = await NestFactory.createApplicationContext(
		ConfigModule.forRoot({
			envFilePath: `../../../src/config/env/${process.env.NODE_ENV ?? 'development'}.env`,
			load: [EnvConfiguration],
			isGlobal: true,
		}),
	);
	const configService = appContext.get(ConfigService);
	const port = configService.get<number>('port')!;
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.TCP,
		options: { port, host: 'localhost' },
	});

	await app.listen();
	appContext.close();

	console.log('Microservice listening on port:', port);
}

bootstrap();

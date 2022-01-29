import path from 'path';
import url from 'url';

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { app as electronApp, BrowserWindow } from 'electron';

import { AppModule } from './app.module';
import EnvConfiguration from './config/configuration';

async function bootstrap() {
	const appContext = await NestFactory.createApplicationContext(
		ConfigModule.forRoot({
			envFilePath: `../../../../src/config/env/${process.env.NODE_ENV ?? 'development'}.env`,
			load: [EnvConfiguration],
			isGlobal: true,
		}),
	);
	const configService = appContext.get(ConfigService);
	const port = configService.get<number>('mainProcessPort')!;
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.TCP,
		options: { port },
	});

	await app.listen();
	appContext.close();

	console.log('Electron backend microservice listens on port: ', port);

	electronApp.whenReady().then(async () => {
		const mainWindow = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				contextIsolation: true,
			},
		});

		if (process.env.NODE_ENV === 'development') {
			await mainWindow.loadURL('http://localhost:4200');
		} else {
			await mainWindow.loadURL(
				url.format({
					pathname: path.join(__dirname, 'renderer/index.html'),
					protocol: 'file:',
					slashes: true,
				}),
			);
		}

		mainWindow.webContents.openDevTools();
	});
}

bootstrap();

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Transport, ClientProxyFactory } from '@nestjs/microservices';

@Module({
	imports: [ConfigModule],
	providers: [
		{
			provide: 'MAIN_PROCESS',
			useFactory: (configService: ConfigService) => {
				return ClientProxyFactory.create({
					transport: Transport.TCP,
					options: {
						port: configService.get<number>('mainProcessPort')!,
						host: 'localhost',
					},
				});
			},
			inject: [ConfigService],
		},
	],
})
export class AppModule {}

import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getTypeOrmConfig = async (
	configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
	type: 'postgres',
	host: 'localhost',
	port: configService.get('PORT'),
	database: configService.get('DATABASE'),
	username: configService.get('DB_USERNAME'),
	password: configService.get('PASSWORD'),
	autoLoadEntities: true,
	synchronize: true
})

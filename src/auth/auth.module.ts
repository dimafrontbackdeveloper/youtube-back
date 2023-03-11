import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getJwtConfig } from '../config/jwt.config'
import { UserEntity } from '../user/user.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy],
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		TypeOrmModule.forFeature([UserEntity])
	]
})
export class AuthModule {}

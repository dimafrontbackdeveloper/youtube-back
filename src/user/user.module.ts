import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubscriptionEntity } from './subscription.entity'
import { UserController } from './user.controller'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [TypeOrmModule.forFeature([UserEntity, SubscriptionEntity])]
})
export class UserModule {}

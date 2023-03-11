import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VideoController } from './video.controller'
import { VideoEntity } from './video.entity'
import { VideoService } from './video.service'

@Module({
	controllers: [VideoController],
	providers: [VideoService],
	imports: [TypeOrmModule.forFeature([VideoEntity])]
})
export class VideoModule {}

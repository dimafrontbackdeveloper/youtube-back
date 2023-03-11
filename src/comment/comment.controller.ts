import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../user/user.decorator'

import { CommentDto } from './comment.dto'
import { CommentService } from './comment.service'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createComment(@CurrentUser('id') id: string, @Body() dto: CommentDto) {
		return this.commentService.create(+id, dto)
	}
}

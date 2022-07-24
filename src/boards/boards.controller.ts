import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
	constructor(private boardsService: BoardsService) {}

	@Get('/')
	getAllBoard(): Board[] {
		return this.boardsService.getAllBoards();
	}

	@Post()
	createBoard(
		@Body() CreateBoardDto: CreateBoardDto
	): Board {
		return this.boardsService.createBoard(CreateBoardDto);
	}
}

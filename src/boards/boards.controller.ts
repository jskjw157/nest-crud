import { Controller, Get} from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
    
    
    @Get()
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }
    // The getAllBoards() method is a handler method that returns the result of the getAllBoards() method of the boardsService service.
}

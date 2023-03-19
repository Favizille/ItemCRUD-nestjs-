import { Controller, Get, Post, Put, Delete} from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateItemDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
    @Get()
    getAll():string{
        return "all items";
    }

    @Get(':id')
    getOneItem(@Param('id') id:number) : string{
        return `Item ${id}`;
    }

    @Post()
    createItem( @Body() createItemDto:CreateItemDto){
        return `Name: ${createItemDto.name}, Description: ${createItemDto.description}`;
    }

    @Put(':id')
    modifyItem(@Param('id') id:number, @Body() updateItemDto:CreateItemDto){
        return `Item ${id} -Name: ${updateItemDto.name}`;
    }

    @Delete(':id')
    deleteItem(@Param('id') id){
        return `item${id} deleted`;
    }
}

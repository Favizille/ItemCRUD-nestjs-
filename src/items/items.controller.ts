import { Controller, Get, Post, Put, Delete} from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateItemDto } from './dto/create-items.dto';
import { Item } from './interface/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor( private readonly itemsService:ItemsService){}
    @Get()
    getAll(): Item[]{
        return this.itemsService.findAll();
    }

    @Get(':id')
    getOneItem(@Param('id') id:string) : Item{
        return this.itemsService.findbyId(id);
    }

    @Post()
    createItem( @Body() createItemDto:CreateItemDto){
        return `Name: ${createItemDto.name}, Description: ${createItemDto.description}`;
    }

    @Put(':id')
    modifyItem(@Param('id') id:string, @Body() updateItemDto:CreateItemDto){
        return `Item ${id} -Name: ${updateItemDto.name}`;
    }

    @Delete(':id')
    deleteItem(@Param('id') id){
        return `item${id} deleted`;
    }
}

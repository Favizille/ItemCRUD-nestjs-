import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';

@Injectable()
export class ItemsService {
    private readonly item:Item [] = [
        {
            id : "24w567",
            name: "Etukudo",
            quantity: 5,
            description: 'like it'
        },
        {
            id : "24w67",
            name: "Edoho",
            quantity: 6,
            description: 'like it do it'
        }
    ]
}

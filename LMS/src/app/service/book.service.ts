import { Injectable } from '@angular/core';
import  {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBookById(id:number):Book{
    return this.getAll().find(book =>book.id==id)!;

  }
  getAll():Book[]{
    return [
      {
        id: 13435347456234234252,
        price:122,
        name:"Heal Your Way Forward",
        description:"This item is eligible for FREE Click and Collect without a minimum order subject to availability. Details\n" +
          "\n" +
          "The award-winning New York Times bestseller that inspired BTS's K-pop song 'Magic Shop'.\n" +
          "\n" +
          "The day that 12-year-old James Doty walked in to his local magic shop is the day that changed his life.\n" +
          "\n" +
          "Once the neglected son of an alcoholic father and a mother with chronic depression, he has gone on to become a leading neurosurgeon, based at Stanford University. He credits Ruth for this incredible turnaround: the remarkable woman he met at the Cactus Rabbit Magic Shop, who devoted the summer to transforming his mind and opening his heart.",
        imageUrl:".\assets\book1.jpg",
        contents:"The Co-Conspirator's Guide to an Antiracist Future",
        tags:"Children",
        authorName:"T-Hill",
        page:300,
        language:"English",
        count:3
      },
      {
        id: 145465445235346568705679,
        price:122,
        name:"Heal Your Way Forward",
        description:"This item is eligible for FREE Click and Collect without a minimum order subject to availability. Details\n" +
          "\n" +
          "The award-winning New York Times bestseller that inspired BTS's K-pop song 'Magic Shop'.\n" +
          "\n" +
          "The day that 12-year-old James Doty walked in to his local magic shop is the day that changed his life.\n" +
          "\n" +
          "Once the neglected son of an alcoholic father and a mother with chronic depression, he has gone on to become a leading neurosurgeon, based at Stanford University. He credits Ruth for this incredible turnaround:",
        imageUrl:"./assets/book1.jpg",
        contents:"The Co-Conspirator's Guide to an Antiracist Future",
        tags:"Children",
        authorName:"T-Hill",
        page:300,
        language:"English",
        count:3
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';



@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
 inputData: any = [];
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
   this.bookService.booklist$.subscribe((books: any)=> {
    this.inputData = books;
   })
  }

  sendToWishList(bookname: string){
    this.bookService.addWishList(bookname);
  }

}

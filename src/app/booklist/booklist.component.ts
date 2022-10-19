import { Component, OnInit } from '@angular/core';
import { BookService } from './books.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
 bookList = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList = this.bookService.getBookList().subscribe((data: any[]) => this.bookList = data);
  }

}

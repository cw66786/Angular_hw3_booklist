import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBookList("java").subscribe(console.log);
  }

}

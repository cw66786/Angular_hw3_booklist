import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, Subscription, switchMap } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchBox', {static: true}) input!: ElementRef;

  private eventSubscription!: Subscription;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
   this.eventSubscription = fromEvent(this.input.nativeElement, 'keyup')
   .pipe(
    debounceTime(500),
    filter((_)=>{
      return this.input.nativeElement.value.trim() !== '';
    }),
    switchMap((_)=>{
      return this.bookService.getBookList(
        this.input.nativeElement.value
      );
    })
   )
   .subscribe();
  }


  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

}



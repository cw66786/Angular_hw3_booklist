import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Observable} from 'rxjs';
import { filter,map,tap } from 'rxjs/operators';
import { Root } from './fullData.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  // private Books = [];
  // private BooksBehave$ = new BehaviorSubject<any[]>(this.Books);
  // booklist$ = this.BooksBehave$.asObservable();

  // private wishList = [];
  // private wishBehave$ = new BehaviorSubject<any[]>(this.Books);
  // wishes$ = this.BooksBehave$.asObservable();

  constructor(private readonly http: HttpClient) {

    getBookList(bookname: string): Observable<Root.items[]>{
      return this.http.get<Root.items[]>(this.baseUrl+bookname);
   
    //     map(({items}): any =>{
    //       if(items && items.length){
    //         return items.map((volumeInfo )=>{
    //           const book: any {
    //             bookname: volumeInfo.title,
    //             publisher: volumeInfo.publisher,
    //             pubDate: volumeInfo.publishedDate,
    //             description: volumeInfo.description
    //           };

    //           if(volumeInfo.imageLinks){
    //             book.pic = volumeInfo.imageLinks.thumbnail;
    //           };
    //           return book;
              
    //         });
    //       }
          
    //     }),
    //     tap((books: any)=>{
    //       this.Books = books;
    //       this.BooksBehave$.next(this.Books);
    //     })
        
    //   )
    // }

   }
}

 


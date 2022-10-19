import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Observable} from 'rxjs';
import { filter,map,tap } from 'rxjs/operators';
import { Book, Root } from './fullData.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private Books = [];
  private BooksBehave$ = new BehaviorSubject<any[]>(this.Books);
  booklist$ = this.BooksBehave$.asObservable();

  // private wishList = [];
  // private wishBehave$ = new BehaviorSubject<any[]>(this.Books);
  // wishes$ = this.BooksBehave$.asObservable();

  constructor(private  http: HttpClient) {}

    getBookList(bookName: String){
      return this.http.get<Root>(this.baseUrl + bookName).pipe(
        filter((res: Root)=>{
          return res.totalItems !== 0;
        }),
            map(({items}: Root): any =>{
          if(items && items.length){
            return items.map(({volumeInfo}: Book)=>{
              const book: any = {
                bookname:  volumeInfo.title ,
                publisher: volumeInfo.publisher,
                pubDate: volumeInfo.publishedDate,
                description: volumeInfo.description,
              };

              if(volumeInfo.imageLinks){
                book.pic = volumeInfo.imageLinks.smallThumbnail;
              };
              return book;
              
            });
          }
          
        }),
        tap((books: any)=>{
          this.Books = books;
          this.BooksBehave$.next(this.Books);
        })
        
      )
      
   
   
     }

   
}

 



 
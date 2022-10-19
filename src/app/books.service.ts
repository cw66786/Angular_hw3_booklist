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

  private books = [];
  private booksBehave$ = new BehaviorSubject<any[]>(this.books);
  booklist$ = this.booksBehave$.asObservable();

  private wishList: string[] = [];
  private wishBehave$ = new BehaviorSubject<any[]>(this.wishList);
  wishes$ = this.wishBehave$.asObservable();

  constructor(private  http: HttpClient) {}

  

    getBookList(bookName: String){
      return this.http.get<Root>(this.baseUrl + bookName).pipe(
        filter((res: Root)=>{
          return res.totalItems !== 0;
        }),
            map(({items}: Root): any =>{
          if(items && items.length){
            

          
            return items.map(({volumeInfo, searchInfo})=>{
              const book: any = {
                bookname:  volumeInfo.title ,
                publisher: volumeInfo.publisher,
                pubDate: volumeInfo.publishedDate,
                description: searchInfo !== undefined? searchInfo.textSnippet: "Description Unavailable",
                
              };

             
                 

              if(volumeInfo.imageLinks){
                book.pic = volumeInfo.imageLinks.smallThumbnail || '';
              };
              return book;
              
            });
          }
          
        }),
        tap((books: any)=>{
          this.books = books;
          this.booksBehave$.next(this.books);
        })
        
      )
      
   
   
     }

   addWishList(title: string){
      this.wishList.push(title);
      this.wishBehave$.next(this.wishList);
      
   }

   deleteWish(title: string){
    this.wishList = this.wishList.filter((el) =>{
      return el !== title;
    });
    this.wishBehave$.next(this.wishList);
   }

}

 



 
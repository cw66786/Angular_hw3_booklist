import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList: string[]= [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.wishes$.subscribe(data =>{
      this.wishList = data;
    })

    

   
  }

 removeWish(title: string){
  this.booksService.deleteWish(title);
 }

}



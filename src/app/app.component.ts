import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booklist';
  showBookList: boolean = true;
  
  changeDisplay(target: string){
    if(this.showBookList === true && target === 'showWish'){
      this.showBookList = false;
    }else if(this.showBookList === false && target === 'home'){
      this.showBookList = true;
    }
  }
    
    
}
 
  



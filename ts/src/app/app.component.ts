import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  

 showTopico: boolean = true;

  show: boolean = false;
  showMessage(): void{
    this.show = !this.show;
    this.showTopico = !this.showTopico ;
  }
  
  // showTopico: boolean = true;
  // showMessageTopico(): void{
  //   this.showTopico = !this.showTopico;
  // }
}

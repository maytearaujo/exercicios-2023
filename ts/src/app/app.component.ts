import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  

  show: boolean = false;
  showMessage(): void{
    this.show = !this.show;
  }

  showCriarTopico: boolean = true;
  showFormularioTopico: boolean = false;
  showEnviarTopico: boolean = false;
  showBtnCriarTopico: boolean = true;
  showMessageTopico(): void{
    this.showCriarTopico = !this.showCriarTopico;
    this.showFormularioTopico = true;
  }
  
  showMessageEnviarTopico(): void{
    this.showEnviarTopico = !this.showEnviarTopico;
    this.showFormularioTopico = !this.showFormularioTopico;

  }
  
  showMessageFormulario(): void{
    this.showFormularioTopico = !this.showFormularioTopico;
    this.showEnviarTopico = true;
    this.showBtnCriarTopico = !this.showBtnCriarTopico;
  }
  
}

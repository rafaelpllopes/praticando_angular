import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Picture';

  photos = [
    {
      url: "http://www.diarioonline.com.br/app/painel/modulo-noticia/img/imagensdb/original/destaque-436195-digimon.full_.1707809-1024x562.jpg",
      description: "Dimons Lideres"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQrL386wJv6dS1ZUiBu3CbtBYg6bB2ejHzdq7nzntve1tIQvqeQ",
      description: "Dimons Luta"
    },
    {
      url: "http://www.diarioonline.com.br/app/painel/modulo-noticia/img/imagensdb/original/destaque-436195-digimon.full_.1707809-1024x562.jpg",
      description: "Dimons Lideres"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQrL386wJv6dS1ZUiBu3CbtBYg6bB2ejHzdq7nzntve1tIQvqeQ",
      description: "Dimons Luta"
    }
  ];
}

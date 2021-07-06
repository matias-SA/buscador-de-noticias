import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noticias';
  listNoticias: any[] = [];
  loading = false;

  constructor(private noticiasSvc: NoticiasService) {}
  buscarNoticias(parametro: any) {
    this.loading = true;
    this.listNoticias = [];
    this.noticiasSvc.getNoticias(parametro).subscribe(
      (data) => {
        console.log(data);
        this.listNoticias = data.articles;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}

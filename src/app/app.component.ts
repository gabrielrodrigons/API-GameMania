import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, MenuComponent, RodapeComponent]
})
export class AppComponent { }

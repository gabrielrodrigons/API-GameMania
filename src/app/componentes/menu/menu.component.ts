import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [RouterModule, RodapeComponent]
})
export class MenuComponent { }

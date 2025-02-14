import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopToolbarComponent } from '@lib/component/top-toolbar/top-toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}

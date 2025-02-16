import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AppTopToolbarComponent } from './@config/component/app-top-toolbar/app-top-toolbar.component';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTopToolbarComponent, ButtonModule, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}

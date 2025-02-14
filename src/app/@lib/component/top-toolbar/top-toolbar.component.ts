import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
//#region PrimeNG
// import { ToolbarModule } from 'primeng/toolbar';
// import { ButtonModule } from 'primeng/button';
//#endregion PrimeNG

@Component({
  selector: 'com-top-toolbar',
  imports: [CommonModule],
  templateUrl: './top-toolbar.component.html',
  styleUrl: './top-toolbar.component.scss',
})
export class TopToolbarComponent {
  //#region Content Child
  @ContentChild(TemplateRef<any>) left!: TemplateRef<any>;
  //#endregion Content Child
}

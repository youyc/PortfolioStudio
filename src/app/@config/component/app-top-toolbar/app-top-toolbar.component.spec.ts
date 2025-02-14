import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopToolbarComponent } from './app-top-toolbar.component';

describe('AppTopToolbarComponent', () => {
  let component: AppTopToolbarComponent;
  let fixture: ComponentFixture<AppTopToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTopToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

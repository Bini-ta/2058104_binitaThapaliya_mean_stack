import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App.ComponentsComponent } from './app.components.component';

describe('App.ComponentsComponent', () => {
  let component: App.ComponentsComponent;
  let fixture: ComponentFixture<App.ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App.ComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App.ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

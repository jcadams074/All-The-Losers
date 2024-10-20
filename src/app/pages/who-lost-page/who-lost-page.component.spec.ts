import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoLostPageComponent } from './who-lost-page.component';

describe('WhoLostPageComponent', () => {
  let component: WhoLostPageComponent;
  let fixture: ComponentFixture<WhoLostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoLostPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoLostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

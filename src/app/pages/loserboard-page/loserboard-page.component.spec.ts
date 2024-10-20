import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserboardPageComponent } from './loserboard-page.component';

describe('LoserboardPageComponent', () => {
  let component: LoserboardPageComponent;
  let fixture: ComponentFixture<LoserboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoserboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoserboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

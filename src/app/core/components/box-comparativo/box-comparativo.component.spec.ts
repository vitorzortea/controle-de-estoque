import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComparativoComponent } from './box-comparativo.component';

describe('BoxComparativoComponent', () => {
  let component: BoxComparativoComponent;
  let fixture: ComponentFixture<BoxComparativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxComparativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxComparativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

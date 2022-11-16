import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieAlumniHeaderComponent } from './sigie-alumni-header.component';

describe('SigieAlumniHeaderComponent', () => {
  let component: SigieAlumniHeaderComponent;
  let fixture: ComponentFixture<SigieAlumniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigieAlumniHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigieAlumniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

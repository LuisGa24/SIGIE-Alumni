import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigieAlumniNavbarComponent } from './sigie-alumni-navbar.component';

describe('SigieAlumniNavbarComponent', () => {
  let component: SigieAlumniNavbarComponent;
  let fixture: ComponentFixture<SigieAlumniNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigieAlumniNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigieAlumniNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

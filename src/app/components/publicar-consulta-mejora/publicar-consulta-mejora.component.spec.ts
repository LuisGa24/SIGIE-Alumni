import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarConsultaMejoraComponent } from './publicar-consulta-mejora.component';

describe('PublicarConsultaMejoraComponent', () => {
  let component: PublicarConsultaMejoraComponent;
  let fixture: ComponentFixture<PublicarConsultaMejoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarConsultaMejoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicarConsultaMejoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoHeaderComponent } from './foro-header.component';

describe('ForoHeaderComponent', () => {
  let component: ForoHeaderComponent;
  let fixture: ComponentFixture<ForoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

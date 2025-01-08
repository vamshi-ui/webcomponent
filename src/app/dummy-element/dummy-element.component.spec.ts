import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyElementComponent } from './dummy-element.component';

describe('DummyElementComponent', () => {
  let component: DummyElementComponent;
  let fixture: ComponentFixture<DummyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

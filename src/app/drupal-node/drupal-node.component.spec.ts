import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalNodeComponent } from './drupal-node.component';

describe('DrupalNodeComponent', () => {
  let component: DrupalNodeComponent;
  let fixture: ComponentFixture<DrupalNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

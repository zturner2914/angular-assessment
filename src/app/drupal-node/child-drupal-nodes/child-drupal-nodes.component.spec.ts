import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDrupalNodesComponent } from './child-drupal-nodes.component';

describe('ChildDrupalNodesComponent', () => {
  let component: ChildDrupalNodesComponent;
  let fixture: ComponentFixture<ChildDrupalNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDrupalNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDrupalNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

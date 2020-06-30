import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveToJsonComponent } from './save-to-json.component';

describe('SaveToJsonComponent', () => {
  let component: SaveToJsonComponent;
  let fixture: ComponentFixture<SaveToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

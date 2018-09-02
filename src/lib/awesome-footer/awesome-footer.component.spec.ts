import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeFooterComponent } from './awesome-footer.component';

describe('AwesomeFooterComponent', () => {
  let component: AwesomeFooterComponent;
  let fixture: ComponentFixture<AwesomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

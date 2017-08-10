import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCreatorComponent } from './server-creator.component';

describe('ServerCreatorComponent', () => {
  let component: ServerCreatorComponent;
  let fixture: ComponentFixture<ServerCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

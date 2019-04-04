import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsJavaComponent } from './settings-java.component';

describe('SettingsJavaComponent', () => {
  let component: SettingsJavaComponent;
  let fixture: ComponentFixture<SettingsJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

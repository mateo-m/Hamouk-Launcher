import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLauncherComponent } from './settings-launcher.component';

describe('SettingsLauncherComponent', () => {
  let component: SettingsLauncherComponent;
  let fixture: ComponentFixture<SettingsLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

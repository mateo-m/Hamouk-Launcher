import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMinecraftComponent } from './settings-minecraft.component';

describe('SettingsMinecraftComponent', () => {
  let component: SettingsMinecraftComponent;
  let fixture: ComponentFixture<SettingsMinecraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMinecraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMinecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MojangApiService } from '../../../providers/mojang-api.service';

@Component({
  selector: 'app-settings-account',
  templateUrl: './settings-account.component.html',
  styleUrls: ['./settings-account.component.scss']
})
export class SettingsAccountComponent implements OnInit {
  public user$;
  skinUrlForm: FormControl;

  constructor(private mojangApiService: MojangApiService) {
    this.skinUrlForm = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
      Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    ]);
  }

  ngOnInit() {
    this.user$ = this.mojangApiService.getMe();
  }

  getUuid() {
    return localStorage.getItem('uuid');
  }

  getMySkinUrl() {
    return 'https://visage.surgeplay.com/full/608/' + this.getUuid();
  }

  changeMySkin(skinUrl) {
    this.mojangApiService.changeMySkin(skinUrl).subscribe();
  }

}

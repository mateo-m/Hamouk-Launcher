import * as os from 'os';

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MojangApiService } from '../../providers/mojang-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
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
    console.log('This device is running', os.type());

  }

  getUuid() {
    return localStorage.getItem('uuid');
  }

  getMySkinHeadUrl() {
    return 'https://visage.surgeplay.com/head/608/' + this.getUuid();
  }

  downloadOpenAl() {
    console.log('Downloaded OpenAL');
  }

  extractOpenAl() {
    console.log('Extracted OpenAL');
  }

  installOpenAl() {
    console.log('Installed OpenAL');
  }

  play() {
    this.downloadOpenAl();
    this.extractOpenAl();
    this.installOpenAl();
  }
}

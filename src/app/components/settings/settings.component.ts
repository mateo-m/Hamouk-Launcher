import { Component, OnInit } from '@angular/core';

import { MojangApiService } from '../../providers/mojang-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private mojangApiService: MojangApiService) { }

  ngOnInit() {
  }

  signout() {
    this.mojangApiService.signout().subscribe();
  }

}

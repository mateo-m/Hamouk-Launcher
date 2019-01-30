import { Component, OnInit } from '@angular/core';
import { MojangApiService } from '../../providers/mojang-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mojangApiService: MojangApiService) { }

  ngOnInit() {
  }

  signout() {
    this.mojangApiService.signout().subscribe();
  }
}

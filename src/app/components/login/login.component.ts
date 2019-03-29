import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MojangApiService } from '../../providers/mojang-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private mojangApiService: MojangApiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    const signinObj = {
      'agent': {
        'name': 'Minecraft',
        'version': 1
      },
      'username': this.loginForm.value.email,
      'password': this.loginForm.value.password
    };

    this.mojangApiService.signin(signinObj)
      .subscribe((data: any) => {
        console.log(data);
        if (data.accessToken && data.clientToken) {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('clientToken', data.clientToken);
          localStorage.setItem('uuid', data.selectedProfile.id);
          this.router.navigate(['/home']);
        }
      });


    /*this.mojangApiService.getIp()
      .subscribe((data) => {
        console.log(data);
      });*/
  }
}

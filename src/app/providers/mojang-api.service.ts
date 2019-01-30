import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MojangApiService {
  $;

  constructor(private http: HttpClient, private router: Router) { }

  getIp() {
    return this.http.get('https://api.ipify.org?format=json');
  }

  signin(signinObj) {
    return this.http.post('https://authserver.mojang.com/authenticate', signinObj);
  }
  signout() {
    const signoutObj = {
      'accessToken': localStorage.getItem('accessToken'),
      'clientToken': localStorage.getItem('clientToken')
    };
    return this.http.post('https://authserver.mojang.com/invalidate', signoutObj)
    .pipe(
      tap(() => {
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('clientToken');
      this.router.navigate(['/']);
    }));
  }
}

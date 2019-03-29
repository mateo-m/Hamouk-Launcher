import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MojangApiService {

  constructor(private http: HttpClient, private router: Router) { }

  /*getIp() {
    return this.http.get('https://api.ipify.org?format=json');
  }*/

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
          localStorage.removeItem('accessToken');
          localStorage.removeItem('clientToken');
          localStorage.removeItem('uuid');
          this.router.navigate(['/']);
        }));
  }

  valideAccessToken() {
    const validateAccessTokenObj = {
      'accessToken': localStorage.getItem('accessToken'),
      'clientToken': localStorage.getItem('clientToken')
    };
    return this.http.post('https://authserver.mojang.com/validate', validateAccessTokenObj);
  }

  refreshAccessToken() {
    const refreshAccessTokenObj = {
      'accessToken': localStorage.getItem('accessToken'),
      'clientToken': localStorage.getItem('clientToken')
    };
    return this.http.post('https://authserver.mojang.com/refresh', refreshAccessTokenObj);
  }

  getUser(uuid) {
    return this.http.get(`https://api.minetools.eu/uuid/${uuid}`);
  }

  getMe() {
    return this.getUser(localStorage.getItem('uuid'));
  }

  changeMySkin(skinUrl) {
    const uuid = localStorage.getItem('uuid');
    const accessToken = localStorage.getItem('accessToken');
    const url = `https://api.mojang.com/user/profile/${uuid}/skin`;
    const body = new HttpParams()
      .set('model', '')
      .set('url', skinUrl);
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`)
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<any[]>(url, body.toString(), { headers: headers });
  }
}

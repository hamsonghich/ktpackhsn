import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isAuthorized = false;
  constructor() { }
  public login(): any{
    this.isAuthorized = true;
  }

  public logout(): any{
    this.isAuthorized = false;
  }
}

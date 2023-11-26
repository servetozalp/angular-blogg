import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAdmin : boolean = false;
  isLogin : boolean = false;

  constructor() { }
}

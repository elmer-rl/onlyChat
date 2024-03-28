import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot):Observable<boolean|UrlTree>|Promise<boolean |UrlTree>|boolean|UrlTree {
      if( sessionStorage.getItem('acccessToken')){
        return true
      }
      this.router.navigateByUrl('login')
      return false
    }
}

import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService:AuthService,
    public router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("authguard")
    if (this.authService.isLoggedIn !== true) {
			//Si no hay usuario logueado no tendrá acceso
      window.alert("Debes estar logueado para ver esta sección");
      this.router.navigate(['/admin/signIn'])
    }
    return true;
  }
  
}
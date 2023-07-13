import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { authGuard } from './guards/auth.guard';
import { secureInnerPagesGuard } from './guards/secure-inner-pages.guard';
const routes: Routes = [
  { path: 'home', component: HomePageComponent, title: 'Home Page', canActivate: [authGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'auth', loadChildren: () => import('./Auth/auth/auth.module').then(m => m.AuthModule),
    canActivate: [secureInnerPagesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

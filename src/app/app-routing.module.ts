import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PageModule } from './page/page.module';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [
    PageModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

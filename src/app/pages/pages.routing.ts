import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { EditorsComponent } from './editors/editors.component';

const routes: Routes = [
    {path : '', component : PagesComponent, children : [
      { path : 'home', loadChildren : () => import('../pages/home/home.module').then( m => m.HomeModule)},
      { path : 'dashboard', loadChildren : () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardModule)},
      { path : 'editors' , loadChildren : () => import('../pages/editors/editors.module').then( m => m.EditorsModule) },
      { path : 'members' , loadChildren : () => import('../pages/members/members.module').then( m => m.MembersModule) },
      { path : 'posts' , loadChildren : () => import('../pages/posts/posts.module').then( m => m.PostsModule) },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
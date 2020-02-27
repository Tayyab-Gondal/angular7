import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
    }, {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }, {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({ 
    imports: [
        RouterModule.forRoot(routes)], 
        exports: [RouterModule]
    })
    export class AppRoutingModule { }
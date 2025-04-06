import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list',
        loadComponent: () => import('./pages/list/list.component').then(x => x.ListComponent)
    },
    {
        path: 'add-new-book',
        loadComponent: () => import('./pages/add-book/add-book.component').then(x => x.AddBookComponent)
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];

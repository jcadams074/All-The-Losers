import { Routes } from '@angular/router';
import { LoserboardPageComponent } from './pages/loserboard-page/loserboard-page.component'; 
import { WhoLostPageComponent } from './pages/who-lost-page/who-lost-page.component';

export const routes: Routes = [
    {path: 'loserboard', component: LoserboardPageComponent }, 
    {path: 'who-lost', component: WhoLostPageComponent}
];

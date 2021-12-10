import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/clocks', pathMatch: 'full' },
  { path: 'clocks', loadChildren: () => import('./clocks/clocks.module').then(m => m.ClocksModule) },
  { path: '**', redirectTo: '/clocks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

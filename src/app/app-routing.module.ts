import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    pathMatch: 'full',
  },

  {
    path: 'bets',
    loadChildren: () => import('./bet/bet.module').then((m) => m.BetModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'sequence',
    loadChildren: () =>
      import('./sequence/sequence.module').then((m) => m.SequenceModule),
  },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./transfer/transfer.module').then((m) => m.TransferModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

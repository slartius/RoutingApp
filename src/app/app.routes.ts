import { Routes } from '@angular/router';
import { FstComponent } from './fst.component';
import { ScdComponent } from './scd.component';
import { TrdComponent } from './trd.component';

export const routes: Routes = [
  {path: 'fst', component: FstComponent},
  {path: 'scd', component: ScdComponent},
  {path: '', component: TrdComponent},
];

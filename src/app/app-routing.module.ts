import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodComponent } from './food/food.component';
import { BanComponent } from './ban/ban.component';
import { LoginComponent } from './login/login.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DatMonComponent } from './dat-mon/dat-mon.component';

const routes: Routes = [
  {path:'food',component:FoodComponent},
  {path:'login',component:LoginComponent},
  {path:'order/:id/:ten',component:DatMonComponent},
  {path:'report',component:ThongKeComponent},
  {path:'table',component:BanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

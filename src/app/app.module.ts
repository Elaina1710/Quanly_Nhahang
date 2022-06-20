import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BanComponent } from './ban/ban.component';
import { LoginComponent } from './login/login.component';
import { DatMonComponent } from './dat-mon/dat-mon.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { FoodComponent } from './food/food.component';
import { AddeditBanComponent } from './ban/addedit-ban/addedit-ban.component';
import { AddeditFoodComponent } from './food/addedit-food/addedit-food.component';
import { XemHoadonComponent } from './ban/xem-hoadon/xem-hoadon.component';

@NgModule({
  declarations: [
    AppComponent,
    AddeditBanComponent,
    BanComponent,
    LoginComponent,
    DatMonComponent,
    ThongKeComponent,
    FoodComponent,
    AddeditFoodComponent,
    XemHoadonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

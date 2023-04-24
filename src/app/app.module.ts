import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassangerDashboardComponent } from './shared/component/passanger-dashboard/passanger-dashboard.component';
import { PassangerCardComponent } from './shared/component/passanger-card/passanger-card.component';
import { PassangerCountComponent } from './shared/component/passanger-count/passanger-count.component';
import { passangerService } from './shared/service/passanger.service';

@NgModule({
  declarations: [
    AppComponent,
    PassangerDashboardComponent,
    PassangerCardComponent,
    PassangerCountComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [passangerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

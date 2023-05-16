import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatChipsModule, 
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    HttpClientModule, 
    InMemoryWebApiModule.forRoot(FakeApiService, {delay: 3000}),
    FlexLayoutModule,
    LayoutModule
  ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent ],
  providers: [ BreakpointObserver ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

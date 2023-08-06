import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatChipsModule, MatCardModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}), FlexLayoutModule, MatIconModule, MatProgressSpinnerModule  ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

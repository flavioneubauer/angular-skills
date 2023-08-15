import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule, } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatChipsModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }), FlexLayoutModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatCardModule],
  declarations: [AppComponent, HelloComponent, DashboardComponent, CardComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

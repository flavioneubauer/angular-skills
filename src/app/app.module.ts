import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FakeApiService } from './services/fake-api.service';
import { LoadComponent } from './components/load/load.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatChipsModule, 
    MatCardModule, 
    HttpClientModule, 
    InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}),
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [ AppComponent, DashboardComponent, CardComponent, LoadComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ LoadComponent ],
  entryComponents: [LoadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

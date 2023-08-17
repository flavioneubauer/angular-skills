import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SkillCardService } from './core/service/skill-card.service';
import { SkillCardStore } from './core/store/skill-card-store';
import { SpinnerComponent } from './core/utils/components/spinner/spinner.component';
import { LoaderService } from './core/service/loader.service';
import { LoadingInterceptor } from './core/service/loading.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000, put204: false })
  ],
  declarations: [	
    AppComponent, 
    HelloComponent, 
    DashboardComponent, 
    CardComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
   ],
  bootstrap: [AppComponent],
  providers: [
  SkillCardService, 
  SkillCardStore, 
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
]
})
export class AppModule { }

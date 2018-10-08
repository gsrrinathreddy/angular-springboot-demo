import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import  {LoginComponent} from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { OurExpertiseComponent } from './components/our-expertise/our-expertise.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    CarouselComponent,
    JumbotronComponent,
    LoginComponent,
    SignupComponent,
    AboutUsComponent,
    ServicesComponent,
    OurExpertiseComponent,
    TestimonialsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'' , component: BodyComponent},
      {path:'login' , component: LoginComponent},
      {path:'signup' , component:SignupComponent},
      {path:'about-us' , component: AboutUsComponent},
      {path:'services' , component: ServicesComponent},
      {path:'our-expertise' , component:OurExpertiseComponent},
      {path:'testimonials' , component:TestimonialsComponent},
      {path:'dashboard' , component:DashboardComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

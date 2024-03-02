import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturespageComponent } from './featurespage/featurespage.component';
import { PricingpageComponent } from './pricingpage/pricingpage.component';
import { LocationpageComponent } from './locationpage/locationpage.component';
import { TestimonialpageComponent } from './testimonialpage/testimonialpage.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    HomepageComponent,
    FeaturespageComponent,
    PricingpageComponent,
    LocationpageComponent,
    TestimonialpageComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LaslesVPN';
}

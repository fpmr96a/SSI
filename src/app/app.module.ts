import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us.component';
import { ArchitectureComponent } from './architecture.component';
import { TechnologyComponent } from './technology.component';
import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ArchitectureComponent,
    TechnologyComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

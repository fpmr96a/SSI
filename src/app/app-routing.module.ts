import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { ArchitectureComponent } from './architecture.component';
import { TechnologyComponent } from './technology.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'aboutUs', pathMatch: 'full'},
  { path: '**', redirectTo: 'aboutUs', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

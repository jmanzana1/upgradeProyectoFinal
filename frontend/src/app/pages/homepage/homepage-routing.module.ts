import { TodasComponent } from './components/todas/todas.component';
import { ProximasComponent } from './components/proximas/proximas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EstrenosComponent } from './components/estrenos/estrenos.component';

const routes: Routes = [
  {
    path: '',  component: HomepageComponent,
    children: [
      {path:'proximas', component:ProximasComponent},
      {path: 'estrenos', component:EstrenosComponent},
      {path: 'todas', component:TodasComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }

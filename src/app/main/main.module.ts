import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: 'sidebar',
        component: SidebarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MainComponent, ContainerComponent, SidebarComponent],
})
export class MainModule {}

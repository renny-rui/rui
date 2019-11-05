import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
  {path:'login',
    component:LoginComponent
  },
  {path:'todo',
  component:TodoComponent
},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
exports:[RouterModule]
})
export class AppRoutingModule { }

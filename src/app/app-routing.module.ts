import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';

const routes: Routes = [
  {path:'',redirectTo:'listar',pathMatch:'full'},
  {path:'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

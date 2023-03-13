import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:string="";
  editarTarea: Tarea={
    id:'',
    tarea:'',
    finalizado:false
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.tareaService.getUnaTarea(this.id).subscribe(
      res=>
      {
        this.editarTarea=res;
      }
    )
  }

  constructor(
     private tareaService: TareaService,
     private activatedRoute: ActivatedRoute, 
     private router: Router
     )
  {
    
  }

  modificarTarea()
  {
    this.tareaService.editTarea(this.id,this.editarTarea).subscribe(
      res=>
      {
        this.router.navigate(['/listar']);
      }

    )
  }

}

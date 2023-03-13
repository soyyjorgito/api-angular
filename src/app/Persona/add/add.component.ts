import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea, TareaService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  tareaNueva: Tarea={
    id:'',
    tarea:'',
    finalizado:false
  }
  ngOnInit(): void {
   
  }
  constructor(private tareaService: TareaService,private router:Router)
  {
    
  }

  agregarTarea()
  {
    this.tareaService.saveTarea(this.tareaNueva).subscribe(

      res=>
      {
        console.log(res);
        this.router.navigate(['/listar']);
      }
    );
  }
}

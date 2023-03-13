import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

    lista:any=[];

    constructor(private tareaService: TareaService) { }
    ngOnInit(): void {
      this.listarTareas();
    }

    listarTareas()
    {
      this.tareaService.getTareas().subscribe(res=>{this.lista=res})
    }

    eliminar(id:string)
    {
      this.tareaService.deleteTarea(id).subscribe(
        res=>
        {
          this.ngOnInit();
        }
      )
    }
}

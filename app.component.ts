import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  task=" "
  taskList:{id:number,task:string}[]=[]
  addDetails(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task=" "
    console.log(this.taskList)
  }
  deleteItem(data:number){
    this.taskList= this.taskList.filter((items:any)=> items.id=!data);

  }
  
}

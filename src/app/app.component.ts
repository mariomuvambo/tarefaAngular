import { Component } from '@angular/core';
import { todo }  from './todo'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: todo[] = [];
  novoTodo: string;

  salvarTodo(){
    if(this.novoTodo){
      let tdo  = new todo();
      tdo.nome = this.novoTodo;
      tdo.isComplete= true;
      this.todos.push(tdo);
      this.novoTodo='';
    }else{
      alert('Precione em todo');
    }
  
  }

  feito(id:number){
    this.todos[id].isComplete = !this.todos[id].isComplete;
  }

  remover(id:number){
    this.todos = this.todos.filter((v,i)=> i == id); 
  }
}


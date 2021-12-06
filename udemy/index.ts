import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface Todo {
  id: number;
  title : string;
  completed : boolean;
}


axios.get(url).then(response=>{

  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const action = todo.completed;

  logTodo(id,title,action);

});

const logTodo = (id:number,title:string,action:boolean)=>{
  console.log(`
      The todo with id : ${id},
      The title is : ${title},
      The mission is : ${action}

  `)
}
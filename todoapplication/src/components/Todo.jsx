import { useState } from "react"
import TodoBox from "./TodoBox"
import "../css/style.css"

export default function Todo(){
    let [todoItem,settodoItem]=useState({name:``,status:false})
    let [todoItems,settodoItems]=useState([])
    
    
    function submit(e){
        e.preventDefault()
        settodoItems([...todoItems,todoItem])
        settodoItem({name:``,status:false})

    }
    return(
        <div className="" >
           
            <form action="todo" onSubmit={submit} className="form">
            <input type="text" onChange={(e)=>settodoItem({name:e.target.value,status:false})} value={todoItem.name} className="input"  placeholder="Enter Todos"/>
            <button type="submit" className="button">Add</button>
            </form>
            <div className="todoBox">
            {todoItems.map(function(item,index){
                
                
              return <TodoBox item={item.name} index={index} key={index} todoItems={todoItems} settodoItems={settodoItems}/>
            })}
            </div>
            
        </div>
    )
}
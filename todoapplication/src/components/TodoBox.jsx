import "../css/style.css"
export default function TodoBox({item,index,todoItems,settodoItems}){



    function deleteIt(){
        todoItems=todoItems.filter(function(retTodo,retInd){
            return retInd !== index

        })
        settodoItems(todoItems)
    }

    function checker(){
        todoItems.map(function(theItem,theIndex){
            console.log(theItem);
            
        })
        
    }
    return(
        <div className="todo">
            <p onClick={checker}>{item} </p>
            <span>
                <button className="delete" onClick={deleteIt}>X</button>
            </span>
        </div>
    )
}
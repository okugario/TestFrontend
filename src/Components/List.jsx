import React from "react"
import { useState,useRef } from "react"
 export default function List() {
     const InputRef = useRef()
     const[TaskList,SetNewTaskList] = useState([]);
      const Delete = (index)=>{
         let NewDelete = [...TaskList]
         NewDelete.splice(index,1)
         SetNewTaskList(NewDelete)
     }
     const AddTask = (Text)=>{
     
        
        let  NewTaskList = [...TaskList];
        NewTaskList.push(Text)
        SetNewTaskList(NewTaskList)

    }
     return(<><input ref={InputRef}/> <button onClick={()=>{
         AddTask(InputRef.current.value)
     }}>Добавить</button>
     {TaskList.map((Task,index)=>{
         return <div key={index}> {Task}<button onClick={()=>{Delete(index)}}>Удалить</button></div>
     })}
     
     
     </>)
    
    }
    

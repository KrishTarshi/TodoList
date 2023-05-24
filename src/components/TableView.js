import React from 'react';

function TableView({list,setList,seUpdate,update,setShow,setId}) {

   function editfun(e,name,age){
    const indexvalue = e.target.value;
    setId(indexvalue);
    console.log(name,age);
    seUpdate({name:name,age:age})
    setShow(false);
    console.log(update);
   }

   function deletefun(e){
    const indexvalue = e.target.value
    let newTasks = list.filter((task,index) => {return index != indexvalue})
    setList(newTasks);
   }

   function statusfun(e){
    console.log(e.target.value);
    const indexvalue = e.target.value
    const newData = list.map((obj,index) => {
        if (index == indexvalue) {
          return {...obj, status: "true"};
          
        }
        return obj;
      });
      setList(newData);
   }

    return ( 
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task Nsme</th>
                        <th scope="col">Age</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.map((items,index)=>{
                            return <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.age}</td>
                                <td>{(items.status == "false") ? `In progress ` : `completed`}</td>
                                <td >
                                    <button value={index} onClick={(e)=>{editfun(e,items.name,items.age)}}>Edit</button>
                                    <button value={index} onClick={(e)=>{statusfun(e)}}>Status</button>
                                    <button value={index} onClick={deletefun}>delete</button>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
                </table>

        </>
     );
}

export default React.memo(TableView);
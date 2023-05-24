import React, { useState } from 'react';
import AddList from '../components/AddList'
import TableView from '../components/TableView'

function Main() {

  const [list, setList] = useState([]);
  const [update,seUpdate] = useState({name:"",age:""});
  const [show,setShow] = useState(true);
  const [id, setId] = useState();

  console.log(show);

    return ( 
        <>
          <AddList 
            setList={setList} 
            list={list} 
            update={update} 
            seUpdate={seUpdate}  
            show={show} 
            id={id}
            setShow={setShow}
          />
          <TableView 
            setList={setList} 
            list={list}  
            update={update} 
            seUpdate={seUpdate} 
            show={show} 
            setShow={setShow}
            setId={setId}
            />
        </>
     );
}

export default Main;
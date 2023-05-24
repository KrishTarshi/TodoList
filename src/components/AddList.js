import React, { useEffect, useState  } from 'react';
import {InputGroup, Form, Button,} from 'react-bootstrap';


function AddList({setList,list,update,seUpdate,show,id,setShow}) {

    const [formData, setFormData] = useState({name:"",age:""})

      const addUser = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
            let age = e.target.age.value;
            console.log(name,age);
            setList([...list,{ name: formData.name, age:formData.age, status:"false"}]);
            setFormData({name:"",age:""})
      }  

      function updateUser(e){
        e.preventDefault();
        console.log("dsk");
        const newitem = list.map((obj, index)=>{
            if(index == id){
                return {...obj, name:update.name,age:update.age}
            }
            return obj;
        });
        setList(newitem);
        setShow(true);
        setFormData({name:"",age:""})
      }


      useEffect(()=>{
       console.log("working");
      },[update])

      
      
      console.log(update);

    return ( 
        <>

        {
            (show === true) ?
            <Form onSubmit={addUser} name="from" style={{width:500,margin:"50px auto",border:"1px solid #000",padding:15}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <InputGroup className="mb-4">
                        <Form.Control
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={e => setFormData({...formData,name:e.target.value})}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <InputGroup className="mb-4">
                        <Form.Control
                        placeholder="Enter Age"
                        aria-label="Enter Age"
                        aria-describedby="basic-addon1"
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={e => setFormData({...formData,age:e.target.value})}
                        />
                    </InputGroup>
                </Form.Group>
                
                <div className="text-center">
                    <Button variant="primary" type="submit" className="submitbtn" >
                    Submit
                    </Button>
                </div>
                
            </Form>
            :
            <Form onSubmit={updateUser} name="from" style={{width:500,margin:"50px auto",border:"1px solid #000",padding:15}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update Name</Form.Label>
                    <InputGroup className="mb-4">
                        <Form.Control
                            placeholder="Name"
                            type="text"
                            name="name"
                            // ref={InputName}
                            value={update.name}
                            onChange={e => seUpdate({...update,name:e.target.value})}
                        />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update Age</Form.Label>
                    <InputGroup className="mb-4">
                        <Form.Control
                            placeholder="Enter Age"
                            aria-label="Enter Age"
                            aria-describedby="basic-addon1"
                            type="text"
                            name="age"
                            value={update.age}
                            onChange={e => seUpdate({...update,age:e.target.value})}
                        />
                        </InputGroup>
                    </Form.Group>
                
                    <div className="text-center">
                    <Button variant="primary" type="submit" className="submitbtn" >
                        Update
                    </Button>
                    </div>
                    
                </Form>
        }

        </>
     );
}

export default AddList;
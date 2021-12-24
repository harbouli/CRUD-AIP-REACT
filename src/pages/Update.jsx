import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory,useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


const Update = (props) => {
    const [data, setData] = useState({})
    const id = useParams()


    const history = useHistory()
    const validation = Yup.object({
        firstname : Yup.string()
        .required('Required')
        .max(15, 'Please Enter Less Than 15 Character In Your First Name'),
        lastname : Yup.string()
        .required('Required')
        .max(20, 'Please Enter Less Than 20 Character In Your Last Name'),
        email : Yup.string()
        .required('Required')
        .email('Email Format is Incorrect'),
  })
  const url = `http://localhost/CRUD_API/api/update.php?id=${id.id}`
   
  useEffect( () => {
       axios.get(url).then((res)=>{
    
    setData(res.data.message)
    
  })
  }, [])


  
  return (
      
      <div>
          <div className="singup">
          <h1>Update New User</h1>

            
          {/* Start Form */}
          <Formik
    initialValues={{
      email: data.email,
      firstname:data.firstname,
      lastname: data.lastname,
    }}
    validationSchema = {validation}
    onSubmit={(values) => {
      axios.post(url,values)
      .then(
          
        history.push("/")
      )
      
    }}
  >
    {formik => (
      <div>
        <Form>
        <div className="span-2">
          <TextField label="Firstname" name="firstname" type="text" />
          </div>
        <div className="span-2"><TextField label="Lastname" name="lastname" type="text" value  /></div>
        <div className="span-2"><TextField label="Email" name="email" type="text"  /></div>
          <div className=" span-2">
          <div className="Tilt  ">
              <button className="btn " type="submit">Update  User</button>
              </div>
          </div>
          
        </Form>
      </div>
    )}
  </Formik>
      </div>
      </div>
  )
}

export default Update

import {React} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';

const FormikFrom=()=>
(
 <div className="container p-5 mt-5">
     <h3> form with formik fields</h3>
    <Formik 
         initialValues={{email:'',password:''}}
         validate={
             values=>{
                 const errors={}
                 if(!values.email||!values.password){
                     errors.email='Email is required'
                     errors.password='Psssword is required'
                 }
                 else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email='invalid email address'
                 }
                 return errors;
            }
                 
         }
         onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
         }}
    >
        {({ isSubmitting })=>(
         <Form>
             <Field className="form-control my-2" type="email" name="email"/>
             <ErrorMessage className="text-danger" name="email" component="small"/>
             <Field className="form-control my-2" type="password" name="password"/>
             <ErrorMessage className="text-danger" name="password" component="small"/>
             <button type="submit" className="btn btn-sm btn-primary my-2 d-block" >Submit</button>
         </Form>
        )}

    </Formik>
 </div>
)

export default FormikFrom;
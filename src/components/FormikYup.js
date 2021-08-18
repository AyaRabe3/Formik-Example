import {React} from 'react';
import { Form, Formik } from 'formik';
import * as Yup from'yup';

 const FormikYup=()=>(
   <div className="container p-5 mt-5">
       <h3>formik with yup</h3>
       <Formik
          initialValues={{ email: "" }}
          onSubmit={async values=>{
              await new Promise (resolve=> setTimeout(resolve,500))
              alert(JSON.stringify(values,null,2))

          }}
          validationSchema={Yup.object().shape({
             email:Yup.string().email().required('Email is required') 
          })}
       >
         {
         ({
             values,
             touched,
             errors,
             dirty,
             isSubmitting,
             handleChange,
             handleBlur,
             handleSubmit,
             handleReset
         })=>(     
           <form onSubmit={handleSubmit}>
               <input
                 id="email"
                 placeholder="Enter your email"
                 type="text"
                 className="form-control"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}

                 />
                 {errors.email && touched.email && (
                   <div className="text-danger">{errors.email}</div>
                 )}
               <button
                 type="button"
                 className="outline"
                 className="btn btn-sm btn-secondary ml-2 mt-2"
                 onClick={handleReset}
                 disabled={!dirty || isSubmitting}>
                 Reset
               </button>
               <button className="btn btn-sm btn-primary mx-2 mt-2" type="submit" disabled={isSubmitting}>
                 Submit
               </button>
                </form>
        
              )}
          
       </Formik>
   </div>
 )
 export default FormikYup;

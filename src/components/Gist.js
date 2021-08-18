import {React} from 'react';
import {Form, Formik} from 'formik';

const Basic=()=>(
    <div className="container bg-muted mt-5 rounded p-5">
      <h1>form</h1>
    <Formik
     initialValues={{email:'',password:''}}
     validate={
          values=>{
              const errors={};
              if(!values.email||!values.password)
              {
                 errors.email='Email is Required'
                 errors.password='Password is Required'
              }
              else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
              {
                errors.email='Invalid email address'
              }
              return errors;
          }
        }
        onSubmit={(values, { setSubmitting })=>{
            setTimeout(()=>{
              alert(JSON.stringify(values,null,2))  
              setSubmitting(false);
            },100)
        }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                })=>
                (  
                    <form onSubmit={handleSubmit}>
                      <input 
                       type="email"
                       name="email"
                       className="form-control my-3"
                       placeholder="Enter your Email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.email}
                      />
                      {errors.email&&touched.email&&( <small className="text-danger">{errors.email}</small>)}
                      <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="form-control my-3"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      />
                     {errors.password && touched.password && ( <div className="text-danger">{errors.password}</div>)}
                      <button type="submit" className=" btn btn-sm btn-primary" disabled={isSubmitting}>submit</button>
                    </form>
                )
            }

     </Formik>
    </div>
)
export default Basic;
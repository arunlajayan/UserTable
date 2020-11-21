import React from 'react';

import { Formik } from 'formik';
import { Form, Button } from 'antd'


 
 const Basic = (props) => (

   <div>
     <h1>Anywhere in your app!</h1>
     <Form>
     <Formik
       initialValues={{ email: '', phone: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
           errors.phone = 'invalid phone number'
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
             <p>Name:<input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           /></p>
             <p>Email:<input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
             </p>
           
          <p>Phone:<input
            type="number"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}

           />
          </p>
           <p>Messages:
           <textarea
           name="message"
           onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}

           />
           </p>
           
           
           <Button type="submit" disabled={isSubmitting}>
             Submit
           </Button>
         </form>
       )}
     </Formik>
     </Form>
   </div>
 );
 
 export default Basic;
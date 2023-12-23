import React, { useState } from 'react';

const Form = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: '',
 });

 const { name, email, message } = formData;

 const onChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const onSubmit = async (e) => {
   e.preventDefault();
   // call your API here to send the message
 };

 return (
    <>
    <div className="p-4 text-3xl content-center justify-center flex">Contact Us</div>
   <div className="h-90vh bg-gray-100 flex  justify-center bg-gray-100">
     <form className="bg-slate-300 shadow-md text-xl rounded px-16 pt-4 pb-2 mb-4" onSubmit={onSubmit}>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
           Name
         </label>
         <input
           className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="name"
           type="text"
           name="name"
           value={name}
           onChange={onChange}
           placeholder='Your Name'
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700  font-bold  text-sm mb-2" htmlFor="email">
           Email
         </label>
         <input
           className="shadow appearance-none border text-sm  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="email"
           type="email"
           name="email"
           value={email}
           placeholder='Your Email'
           onChange={onChange}
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
           Message
         </label>
         <textarea
           className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="message"
           name="message"
           value={message}
           placeholder='Your Message'
           onChange={onChange}
           required
         />
       </div>
       <div className="flex items-center justify-between">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit"
         >
           Send
         </button>
       </div>
     </form>
   </div>
   </>
 );
};

export default Form;
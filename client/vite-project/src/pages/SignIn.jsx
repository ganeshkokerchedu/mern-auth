import React,{useState} from 'react'
import {Link, useNavigate } from "react-router-dom"
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import {useDispatch, useSelector} from "react-redux";

function SignIn() {
      const [formData, setFormData] = useState({});
      const {loading ,error} = useSelector((state) => state.user);

     
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value})
      }
      console.log(formData); 
       const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
                  dispatch(signInStart());
                  const res = await fetch("/api/auth/signin", {
                        method: "POST",
                        headers: {
                              "Content-Type" : "application/json",
      
                        },
                        body: JSON.stringify(formData),
      
                  }
                  )
                  const data = await res.json();
                   dispatch(signInSuccess(data))
                  if (data.success === false){
                   dispatch(signInFailure(data.message));
                        return;
                  }
                  navigate("/");

            }
            catch (error) {
                  
                  dispatch(signInFailure());         }
           

       }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" name="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">{loading ? "Loading..." : "Sign In"}</button>
</form>
<div className ="mt-5 flex gap-2">
 <p>Don't Have an account</p>
 <Link to="/sign-up">
  <span className="text-blue-500">Sign Up</span>
 </Link>
</div>
<p className="text-red-700 mt-5">{error ? error || "Somthing went wrong!" : ""}</p>
    </div>
  )
}


export default SignIn;
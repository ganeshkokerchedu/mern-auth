import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import OAuth from '../components/OAuth';

function SignUp() {
      const [formData, setFormData] = useState({})
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();
      
      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value})
      }
      console.log(formData); 
       const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
                  setLoading(true)
                  const res = await fetch("/api/auth/signup", {
                        method: "POST",
                        headers: {
                              "Content-Type" : "application/json",
      
                        },
                        body: JSON.stringify(formData),
      
                  }
                  )
                  const data = await res.json();
                  setLoading(false)
                  if (data.success === false){
                        setError(true);
                        return;
                  }
                  navigate("/sign-in");
            

            }
            catch (error) {
                  setLoading(false)
                  setError(true)
            }
           

       }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" name="username" className="bg-slate-100 p-3 rounded-lg"  onChange={handleChange}/>
        <input type="email" placeholder="Email" name="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">{loading ? "Loading..." : "Sign Up"}</button>
        <OAuth />
</form>
<div className ="mt-5 flex gap-2">
 <p>Have an account</p>
 <Link to="/sign-in">
  <span className="text-blue-500">Sign in</span>
 </Link>
</div>
<p className="text-red-700 mt-5">{error && "Somthing went wrong"}</p>
    </div>
  )
}


export default SignUp
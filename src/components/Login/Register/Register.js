import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Logo from '../../../images/logo.png'


const Register = () => {
    const [loginUser] = useContext(UserContext);
    // const [registration, setRegistration] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {name, email, date, description, volunteerType} = data;
        const newRegistration = {
            name, email, date, description, volunteerType
        }
        
        fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify(newRegistration),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Inserted successfully')
                reset();
            }
        })
    };
    
    return (
        <div className="text-center">
            <div>
                <img className="w-50" src={Logo} alt=""/>
            </div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-dark text-start text-light">
                    <label htmlFor="name"> Name: </label>
                    <input className="form-control" {...register("name")} onKeyPress={()=> alert("You can not change the Name.")} value={loginUser.name} placeholder="Name" />
                    <br />
                    <label htmlFor="email"> Email: </label>
                    <input className="form-control" type="email" {...register("email")} value={loginUser.email} onKeyPress={()=> alert("You can not change the Email.")}  placeholder="Username or Email" />
                    <br />
                    <label htmlFor="date"> Date: </label>
                    <input className="form-control" type="date" {...register("date")}  />
                    {errors.date && <span className="text-danger">Date is required</span>}
                    <br />
                    <label htmlFor="description"> Description: </label>
                    <textarea className="form-control" {...register("description")} placeholder="Description" />
                    <br />
                    <label htmlFor="volunteerType"> Volunteer Type: </label>
                    <input className="form-control" {...register("volunteerType")} placeholder="Volunteer Type" />
                    {errors.volunteerType && <span className="text-danger">Volunteer type is required</span>}
                    <br />
                    <div className="text-center">
                        <input className="form-control btn btn-primary" type="submit" value="Registration" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Register;
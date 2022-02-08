import React, { useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logo.png'


const Register = () => {
    const {id} = useParams();
    const [getVolunteer, setGetVolunteer] = useState({})
    const [loginUser] = useContext(UserContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://thawing-bastion-81553.herokuapp.com/volunteerRegister/${id}`)
        .then(res => res.json())
        .then(data => setGetVolunteer(data))
    }, [id]);

    const onSubmit = data => {
        const {name, email, date, description, volunteerType} = data;
        const newRegistration = {
            name, email, date, description, volunteerType: volunteerType || getVolunteer.title
        }
        
        fetch('https://thawing-bastion-81553.herokuapp.com/volunteerRegister', {
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
        });
    };
    
    return (
        <div className="text-center">
            <div>
                <img className="w-50" src={Logo} alt=""/>
            </div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-dark text-start text-light">
                    <label htmlFor="name"> Name: <span className="text-danger">(You can not change this Name)</span></label>
                    <input className="form-control" {...register("name")} value={loginUser.name} />
                    <br />
                    <label htmlFor="email"> Email: <span className="text-danger">(You can not change this Email)</span></label>
                    <input className="form-control" type="email" {...register("email")} value={loginUser.email} />
                    <br />
                    <label htmlFor="date"> Date: </label>
                    <input className="form-control" type="date" {...register("date", { required: true})}  />
                    {errors.date && <span className="text-danger">Date is required</span>}
                    <br />
                    <label htmlFor="description"> Description: </label>
                    <textarea className="form-control" {...register("description")} placeholder="Description" />
                    <br />
                    <label htmlFor="volunteerType"> Volunteer Type: <span className="text-danger">(You can not change this volunteer type)</span> </label>
                    <input className="form-control" {...register("volunteerType")} value={getVolunteer.title}/>
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
import React from 'react';
import { useForm } from 'react-hook-form';



const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="text-center">
            <div>
                logo
            </div>
            <div className="">
                <h4>Login with</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-dark text-start text-light">
                    <label htmlFor="name"> Name: </label>
                    <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <br />
                    <input className="form-control" type="email" {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder="Username or Email" />
                    <br />
                    <input className="form-control" type="date" {...register("date")} placeholder="Date" />
                    <br />
                    <textarea className="form-control" {...register("description")} placeholder="Description" />
                    <br />
                    <input className="form-control" {...register("organizeBooks")} placeholder="Organize books at the library" />
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
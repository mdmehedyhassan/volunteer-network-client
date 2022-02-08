import React from 'react';
import { useForm } from "react-hook-form";

const Events = () => {
    document.title = 'Events';
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const {title, date, description, image} = data;
        const newRegistration = {
            title, date, description, image
        }
        fetch('https://thawing-bastion-81553.herokuapp.com/events', {
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
        <div className="">
            <h3>Add event</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="row">
                    <div className="col-md-6 mt-3">
                        <label htmlFor="title">Event Title</label>
                        <input type="text" placeholder="Enter title" {...register("title", { required: true })} className="form-control" />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="date">Enter Date</label>
                        <input type="date" {...register("date", { required: true })} className="form-control" />
                        {errors.date && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="Enter title" {...register("description")} className="form-control" />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="images">Banner</label>
                        <input type="file" accept="image/*" {...register("image")} className="form-control" />
                    </div>
                    <input className="mt-3 btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Events;
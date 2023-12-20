import React from 'react';

const Book = ({book}) => {

    const {imageLink, location , name , price , rating , features , details} = book;
    
    return (
        <div>
            <div className="card card-compact w-full h-[710px] bg-white text-black shadow-xl">
  <figure><img src={imageLink ? imageLink : "Image Not Found"} className='object-cover' alt="Hotel Images" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name ? name : "Not Found"}</h2>
    <p><span className='font-bold'>Details:</span> {details ? details : "Not Found"}</p>
    <p><small><span className='font-bold'>Location:</span> {location ? location : "Not Found"}</small></p>
    <h6 className='font-bold'>Features :</h6>
    {
        features?.map((value , index) => {
           return <li key={index} className='ml-3'>{value ? value : "Data Not Found"}</li>;        
        })
    }
    <p><small><span className='font-bold'>Price:</span> ${price ? price : "Not Found"}</small></p>
    <p><small><span className='font-bold'>Rating:</span> {rating ? rating : "Not Found"}</small></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-white">Book</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const Books = () => {
    const [data , setData] = useState([]);
    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loading />;
    };

    useEffect( () => {
        const loadedData = async () => {
            try {
                const res = await fetch('http://localhost:5000/hotel');
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        return loadedData;
    } , []);

    return (
        <section className='container mx-auto p-5 my-32'>
            <div className='text-center'>
                <h1 className='text-5xl tracking-wide leading-tight pb-5 capitalize text-white font-bold'>Choose The Perfect Hotel</h1>
                <p className='text-lg tracking-wide pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates, qui at cupiditate doloremque rerum. Consectetur explicabo laborum suscipit, sequi incidunt rerum possimus dignissimos corporis eaque, ad debitis! Culpa, incidunt? Aperiam, iure officiis at, accusamus ea tenetur aut velit mollitia vero eaque dolor! Soluta earum consectetur, quaerat laborum sapiente animi?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data?.map(book => <Book key={book.id} book={book} />)
                }
            </div>
        </section>
    );
};

export default Books;
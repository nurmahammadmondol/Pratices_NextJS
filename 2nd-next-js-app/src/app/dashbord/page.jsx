import React from 'react';
import { CustomCard } from './card/page';


const DashbordPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const userdata=await res.json()
    // console.log(userdata)


    return (
        <div>
            <h4>Dashbord page ready</h4>

         
            <div className='grid grid-cols-4 gap-5 my-10 w-11/12 mx-auto'>
                {
                    userdata.map(user=><CustomCard key={user.id} user={user}></CustomCard>)
                }
            </div>
          
        </div>
    );
};

export default DashbordPage;
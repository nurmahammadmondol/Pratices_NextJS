import React from 'react';


const DashbordPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const userdata=await res.json()
    console.log(userdata)


    return (
        <div>
            <h4>Dashbord page ready</h4>
        </div>
    );
};

export default DashbordPage;
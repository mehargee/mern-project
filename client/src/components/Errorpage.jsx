import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


const Errorpage = () => {
    return (
        <>
            <div id='not-found'>
                <div className="notfound">
                    <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>we are sorry,page not found!</h2>
                <p className='mb-5'>
                    The page are looking might be removed had its name changed or is temporary unavailabe.
                </p>
                <NavLink to="/">Back to Homepage</NavLink>
            </div>
            </div>
        </>
    )
}

export default Errorpage;

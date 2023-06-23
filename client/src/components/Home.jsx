import React, { useEffect, useState } from 'react'

const Home = () => {

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);



  const callHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      setUserName( data.name );
      setShow(true);
      console.log(data);

      // if (!res.status === 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callHomePage();
  }, []);


  return (
    <>
    <div className='home-page'>
      <div className='home-div'>
        <p className='pt-5'>WELCOME</p>
        <h1>{userName}</h1>
        <h2>{show ? 'Happy, to see you Back😊' : 'We Are the MERN Developer'}</h2>
      </div>
    </div>
    </>
  )
}

export default Home;

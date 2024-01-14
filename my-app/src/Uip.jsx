import React, { useState, useEffect } from 'react';
import Ip from './Ip';


function Uip() {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        setUserIP(ipAddress);
      }
      )
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error.message);
          setIsAuthorized(false);
      });
  }, []);




  return (
    <>  
     <Ip Uip={userIP} />
  
    
    </>
  );
}

export default Uip;

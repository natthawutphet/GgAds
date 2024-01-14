import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    // สร้าง function สำหรับการเรียก API เพื่อบันทึกข้อมูล
    const saveVisitorData = async () => {
      // ใช้ตัว API หรือบริการที่สามารถเปิดเผย IP ของผู้ใช้, ตัวอย่างเช่น: https://jsonip.com/
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const userIp = data.ip;
      const referrer = document.referrer || 'Direct';

      fetch('https://api.pgv9.co/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uip: userIp,
          name: referrer,
        }),
      });
    };

    saveVisitorData();
  }, []);

  return (
    <div className="App">
      ...
    </div>
  );
}

export default App;

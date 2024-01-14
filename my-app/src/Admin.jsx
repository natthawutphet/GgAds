import React, { useState, useEffect } from 'react';

function Admin() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch('https://api.pgv9.co/api')
      .then((response) => response.json())
      .then((data) => setVisitors(data));
  }, []);

  const handleDeleteAll = () => {
    fetch('https://api.pgv9.co/api', {
      method: 'DELETE',
    }).then(() => {
      setVisitors([]);
    });
  };

  return (
    <div>
      <button onClick={handleDeleteAll}>Delete All</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>IP Address</th>
            <th>Referrer</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.id}</td>
              <td>{visitor.ip}</td>
              <td>{visitor.referrer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

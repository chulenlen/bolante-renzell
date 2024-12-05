import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/seminars');
        const data = await response.json();
        setSeminars(data);
      } catch (error) {
        console.error('Error fetching seminars:', error);
      }
    };

    fetchSeminars();
  }, []);

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar and Navbar code remains the same */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Seminar List */}
        <div className="card bg-base-100 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title">Seminars</h2>
            <table className="table w-full mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Reservations</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {seminars.map(seminar => (
                  <tr key={seminar._id}>
                    <td>{seminar._id}</td>
                    <td>{seminar.title}</td>
                    <td>{new Date(seminar.date).toLocaleDateString()}</td>
                    <td>{seminar.slotsAvailable}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button className="btn btn-sm btn-error ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

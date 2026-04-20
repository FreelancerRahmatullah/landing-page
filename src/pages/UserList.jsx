import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw Error('There is a problem fetching data! Please wait.');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center `min-h-[400px]` space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <h2 className="text-xl font-medium text-gray-600">Data is 
            Loading... Please wait.</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-red-50 border-l-4 border-red-500 rounded shadow">
        <div className="flex items-center">
          <span className="text-red-500 text-2xl mr-3">⚠️</span>
          <h2 className="text-red-700 font-bold">{error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-indigo-600 p-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
             👥 User List <span className="text-sm font-normal opacity-80">(Retrieved from API)</span>
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-bottom border-gray-200">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">NAME</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">EMAIL</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-indigo-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-800 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold underline">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;

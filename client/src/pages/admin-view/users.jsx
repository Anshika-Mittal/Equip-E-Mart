import React from "react";

const Users = () => {
  const recentActivities = [
    { user: "John Doe", action: "Rented", product: "MacBook Pro", status: "Approved", color: "text-green-600" },
    { user: "Sarah K.", action: "Purchased", product: "Office Chair", status: "Pending", color: "text-yellow-500" },
    { user: "Alex J.", action: "Listed", product: "Gaming Laptop", status: "Rejected", color: "text-red-600" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-xl">
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
              <th className="p-3">Product</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {recentActivities.map((activity, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{activity.user}</td>
                <td className="p-3">{activity.action}</td>
                <td className="p-3">{activity.product}</td>
                <td className={`p-3 ${activity.color}`}>{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
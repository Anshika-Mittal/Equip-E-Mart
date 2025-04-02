import React from "react";

function AdminTransactions() {
  const transactionSections = [
    {
      title: "Payment Management",
      features: [
        "💰 View All Transactions",
        "🔍 Monitor Payment Status",
        "📈 Analyze Revenue Trends",
      ],
    },
    {
      title: "Refund Management",
      features: [
        "🔄 Process Refund Requests",
        "✅ Approve/Reject Refunds",
        "📊 Track Refund Statistics",
      ],
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 text-xl">
      {transactionSections.map((section, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{section.title}</h3>
          {section.features.map((feature, idx) => (
            <p key={idx} className="mt-2">{feature}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminTransactions;
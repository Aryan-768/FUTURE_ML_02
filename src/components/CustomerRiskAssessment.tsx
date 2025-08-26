import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import ChartContainer from './ChartContainer';

const sampleCustomers = [
  {
    id: 'CUST_001',
    name: 'John Smith',
    churnProbability: 0.89,
    monthlyCharges: 85.50,
    contractType: 'Month-to-month',
    tenure: 3,
    risk: 'high'
  },
  {
    id: 'CUST_002',
    name: 'Sarah Johnson',
    churnProbability: 0.34,
    monthlyCharges: 65.20,
    contractType: 'Two year',
    tenure: 24,
    risk: 'low'
  },
  {
    id: 'CUST_003',
    name: 'Michael Brown',
    churnProbability: 0.67,
    monthlyCharges: 95.80,
    contractType: 'One year',
    tenure: 8,
    risk: 'medium'
  },
];

const CustomerRiskAssessment: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(sampleCustomers[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'medium':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'low':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return null;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <ChartContainer title="Individual Customer Risk Assessment">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Search */}
        <div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search customer ID or name..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            {sampleCustomers.map((customer) => (
              <div
                key={customer.id}
                onClick={() => setSelectedCustomer(customer)}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedCustomer.id === customer.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-600">{customer.id}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getRiskIcon(customer.risk)}
                    <span className="text-sm font-medium">
                      {(customer.churnProbability * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Details */}
        <div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">{selectedCustomer.name}</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600">Customer ID</div>
                <div className="font-medium">{selectedCustomer.id}</div>
              </div>
              <div>
                <div className="text-gray-600">Contract Type</div>
                <div className="font-medium">{selectedCustomer.contractType}</div>
              </div>
              <div>
                <div className="text-gray-600">Monthly Charges</div>
                <div className="font-medium">${selectedCustomer.monthlyCharges}</div>
              </div>
              <div>
                <div className="text-gray-600">Tenure (months)</div>
                <div className="font-medium">{selectedCustomer.tenure}</div>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className={`p-4 border rounded-lg ${getRiskColor(selectedCustomer.risk)}`}>
            <div className="flex items-center space-x-2 mb-3">
              {getRiskIcon(selectedCustomer.risk)}
              <span className="font-semibold text-lg">
                {selectedCustomer.risk.charAt(0).toUpperCase() + selectedCustomer.risk.slice(1)} Risk Customer
              </span>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Churn Probability</span>
                <span className="font-bold">{(selectedCustomer.churnProbability * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    selectedCustomer.risk === 'high' ? 'bg-red-500' :
                    selectedCustomer.risk === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${selectedCustomer.churnProbability * 100}%` }}
                />
              </div>
            </div>

            <div className="text-sm">
              <div className="font-medium mb-1">Recommended Actions:</div>
              {selectedCustomer.risk === 'high' && (
                <ul className="list-disc list-inside space-y-1 text-red-700">
                  <li>Immediate outreach by retention team</li>
                  <li>Offer contract extension with discount</li>
                  <li>Schedule service review call</li>
                </ul>
              )}
              {selectedCustomer.risk === 'medium' && (
                <ul className="list-disc list-inside space-y-1 text-yellow-700">
                  <li>Send targeted retention campaign</li>
                  <li>Offer additional services or upgrades</li>
                  <li>Monitor usage patterns closely</li>
                </ul>
              )}
              {selectedCustomer.risk === 'low' && (
                <ul className="list-disc list-inside space-y-1 text-green-700">
                  <li>Continue current service level</li>
                  <li>Consider upselling opportunities</li>
                  <li>Maintain regular check-ins</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default CustomerRiskAssessment;
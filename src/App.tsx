import React from 'react';
import { BarChart3, Users, AlertTriangle, DollarSign, Target, Brain } from 'lucide-react';
import MetricCard from './components/MetricCard';
import FeatureImportance from './components/FeatureImportance';
import CustomerSegmentation from './components/CustomerSegmentation';
import ModelPerformance from './components/ModelPerformance';
import CustomerRiskAssessment from './components/CustomerRiskAssessment';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ChurnPredict Analytics</h1>
                <p className="text-sm text-gray-600">Customer Retention Intelligence Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Model Active
              </div>
              <div className="text-sm text-gray-600">
                Last Updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Customers"
              value={2000}
              change={2.5}
              format="number"
              icon={<Users className="w-5 h-5 text-blue-600" />}
            />
            <MetricCard
              title="Churn Rate"
              value={18.9}
              change={-3.2}
              format="percentage"
              icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
            />
            <MetricCard
              title="Revenue at Risk"
              value={145000}
              change={-1.8}
              format="currency"
              icon={<DollarSign className="w-5 h-5 text-yellow-600" />}
            />
            <MetricCard
              title="Model Accuracy"
              value={84.7}
              change={2.1}
              format="percentage"
              icon={<Target className="w-5 h-5 text-green-600" />}
            />
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <CustomerSegmentation />
          <FeatureImportance />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <ModelPerformance />
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Impact Forecast</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-blue-900">Potential Monthly Savings</span>
                  <span className="text-xl font-bold text-blue-900">$47,500</span>
                </div>
                <p className="text-sm text-blue-700">
                  By targeting high-risk customers with retention campaigns
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-green-900">Customer Lifetime Value Protected</span>
                  <span className="text-xl font-bold text-green-900">$890K</span>
                </div>
                <p className="text-sm text-green-700">
                  Estimated value of customers prevented from churning
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-yellow-900">ROI on Retention Campaigns</span>
                  <span className="text-xl font-bold text-yellow-900">340%</span>
                </div>
                <p className="text-sm text-yellow-700">
                  Expected return on targeted intervention investments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Risk Assessment */}
        <CustomerRiskAssessment />

        {/* Action Items */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Immediate Actions (High Priority)</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Contact 210 high-risk customers within 48 hours</li>
                <li>• Deploy retention specialists to top 50 accounts</li>
                <li>• Offer contract incentives to month-to-month customers</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Medium-Term Strategy</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Implement proactive outreach for medium-risk segment</li>
                <li>• Review pricing strategy for high-charge customers</li>
                <li>• Enhance customer support for technical issues</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Long-Term Initiatives</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Develop customer success programs</li>
                <li>• Invest in service quality improvements</li>
                <li>• Create loyalty rewards for long-term customers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
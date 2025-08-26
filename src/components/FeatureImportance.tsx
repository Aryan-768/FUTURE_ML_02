import React from 'react';
import ChartContainer from './ChartContainer';

const features = [
  { name: 'Contract Length', importance: 0.24, color: 'bg-blue-500' },
  { name: 'Monthly Charges', importance: 0.19, color: 'bg-red-500' },
  { name: 'Total Charges', importance: 0.16, color: 'bg-green-500' },
  { name: 'Payment Method', importance: 0.12, color: 'bg-yellow-500' },
  { name: 'Internet Service', importance: 0.10, color: 'bg-purple-500' },
  { name: 'Tech Support', importance: 0.08, color: 'bg-pink-500' },
  { name: 'Tenure', importance: 0.06, color: 'bg-indigo-500' },
  { name: 'Senior Citizen', importance: 0.05, color: 'bg-gray-500' },
];

const FeatureImportance: React.FC = () => {
  return (
    <ChartContainer title="Feature Importance Analysis">
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-32 text-sm font-medium text-gray-700 truncate">
              {feature.name}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
              <div
                className={`h-full ${feature.color} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${feature.importance * 100}%` }}
              />
            </div>
            <div className="w-12 text-sm font-semibold text-gray-900 text-right">
              {(feature.importance * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Insight:</strong> Contract length and monthly charges are the strongest predictors of churn.
          Focus retention efforts on month-to-month customers with high monthly charges.
        </p>
      </div>
    </ChartContainer>
  );
};

export default FeatureImportance;
import React from 'react';
import ChartContainer from './ChartContainer';

const segments = [
  { name: 'Low Risk', count: 1247, percentage: 62.4, color: 'bg-green-500', textColor: 'text-green-700' },
  { name: 'Medium Risk', count: 543, percentage: 27.2, color: 'bg-yellow-500', textColor: 'text-yellow-700' },
  { name: 'High Risk', count: 210, percentage: 10.4, color: 'bg-red-500', textColor: 'text-red-700' },
];

const CustomerSegmentation: React.FC = () => {
  return (
    <ChartContainer title="Customer Risk Segmentation">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {segments.map((segment, index) => (
          <div key={index} className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-3">
              <div className="w-full h-full rounded-full bg-gray-200">
                <div
                  className={`w-full h-full rounded-full ${segment.color} flex items-center justify-center`}
                  style={{ 
                    background: `conic-gradient(${segment.color.replace('bg-', 'var(--color-')} ${segment.percentage}%, #e5e7eb 0%)` 
                  }}
                >
                  <span className="text-white font-bold text-sm">{segment.percentage}%</span>
                </div>
              </div>
            </div>
            <h4 className={`font-semibold ${segment.textColor} mb-1`}>{segment.name}</h4>
            <p className="text-2xl font-bold text-gray-900">{segment.count.toLocaleString()}</p>
            <p className="text-sm text-gray-600">customers</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-green-50 rounded-lg">
          <div className="text-green-800 font-medium">Low Risk Actions</div>
          <div className="text-green-600">Maintain service quality</div>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg">
          <div className="text-yellow-800 font-medium">Medium Risk Actions</div>
          <div className="text-yellow-600">Targeted retention campaigns</div>
        </div>
        <div className="p-3 bg-red-50 rounded-lg">
          <div className="text-red-800 font-medium">High Risk Actions</div>
          <div className="text-red-600">Immediate intervention required</div>
        </div>
      </div>
    </ChartContainer>
  );
};

export default CustomerSegmentation;
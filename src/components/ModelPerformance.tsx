import React, { useState } from 'react';
import ChartContainer from './ChartContainer';

const ModelPerformance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'confusion' | 'roc'>('metrics');

  const metrics = [
    { name: 'Accuracy', value: 0.847, color: 'bg-blue-500' },
    { name: 'Precision', value: 0.823, color: 'bg-green-500' },
    { name: 'Recall', value: 0.791, color: 'bg-yellow-500' },
    { name: 'F1-Score', value: 0.807, color: 'bg-purple-500' },
    { name: 'AUC-ROC', value: 0.892, color: 'bg-red-500' },
  ];

  const confusionMatrix = [
    [1523, 98],
    [187, 192]
  ];

  return (
    <ChartContainer title="Model Performance Analysis">
      <div className="mb-4">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'metrics', label: 'Metrics' },
            { id: 'confusion', label: 'Confusion Matrix' },
            { id: 'roc', label: 'ROC Curve' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'metrics' && (
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-20 text-sm font-medium text-gray-700">
                {metric.name}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div
                  className={`h-full ${metric.color} rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${metric.value * 100}%` }}
                />
              </div>
              <div className="w-12 text-sm font-bold text-gray-900">
                {(metric.value * 100).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'confusion' && (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="text-sm font-medium text-gray-600 col-span-2 mb-2">
              Predicted
            </div>
            <div className="w-20 h-20 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
              <div>
                <div className="font-bold text-green-800">{confusionMatrix[0][0]}</div>
                <div className="text-xs text-green-600">TN</div>
              </div>
            </div>
            <div className="w-20 h-20 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
              <div>
                <div className="font-bold text-red-800">{confusionMatrix[0][1]}</div>
                <div className="text-xs text-red-600">FP</div>
              </div>
            </div>
            <div className="w-20 h-20 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
              <div>
                <div className="font-bold text-red-800">{confusionMatrix[1][0]}</div>
                <div className="text-xs text-red-600">FN</div>
              </div>
            </div>
            <div className="w-20 h-20 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
              <div>
                <div className="font-bold text-green-800">{confusionMatrix[1][1]}</div>
                <div className="text-xs text-green-600">TP</div>
              </div>
            </div>
            <div className="col-span-2 mt-2">
              <div className="text-sm text-gray-600">Actual</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'roc' && (
        <div className="flex justify-center">
          <div className="relative w-64 h-64 bg-gray-50 rounded-lg border">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="rocGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
              
              {/* Grid */}
              <g stroke="#e5e7eb" strokeWidth="1">
                {[40, 80, 120, 160].map(i => (
                  <g key={i}>
                    <line x1={i} y1="20" x2={i} y2="180" />
                    <line x1="20" y1={i} x2="180" y2={i} />
                  </g>
                ))}
              </g>
              
              {/* Axes */}
              <line x1="20" y1="180" x2="180" y2="180" stroke="#374151" strokeWidth="2"/>
              <line x1="20" y1="20" x2="20" y2="180" stroke="#374151" strokeWidth="2"/>
              
              {/* ROC Curve */}
              <path
                d="M 20 180 Q 40 160 60 120 T 100 80 T 140 50 T 180 20"
                stroke="url(#rocGradient)"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Diagonal line */}
              <line x1="20" y1="180" x2="180" y2="20" stroke="#9ca3af" strokeWidth="1" strokeDasharray="5,5"/>
              
              {/* Labels */}
              <text x="100" y="195" textAnchor="middle" className="text-xs fill-gray-600">False Positive Rate</text>
              <text x="10" y="100" textAnchor="middle" className="text-xs fill-gray-600" transform="rotate(-90, 10, 100)">True Positive Rate</text>
              <text x="100" y="15" textAnchor="middle" className="text-xs fill-blue-600 font-semibold">AUC = 0.892</text>
            </svg>
          </div>
        </div>
      )}
    </ChartContainer>
  );
};

export default ModelPerformance;
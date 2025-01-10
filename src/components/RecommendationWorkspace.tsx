import React from 'react';
import { Workspace } from './Workspace';
import { Database, Settings, BarChart } from 'lucide-react';

export function RecommendationWorkspace() {
  return (
    <Workspace type="recommendation" title="Recommendation System">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data Input
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">Upload user interaction data or sample dataset</p>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Algorithm Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Algorithm Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Collaborative Filtering</option>
                  <option>Content-Based</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Filtering Rules</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  placeholder="Define filtering rules..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ranking Preference</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Popularity</option>
                  <option>Relevance</option>
                  <option>Recent Activity</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <BarChart className="w-5 h-5" />
            Performance Metrics
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Precision</h4>
              <p className="text-2xl font-bold text-gray-800">0%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Recall</h4>
              <p className="text-2xl font-bold text-gray-800">0%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-600 mb-2">F1 Score</h4>
              <p className="text-2xl font-bold text-gray-800">0%</p>
            </div>
          </div>
        </div>
      </div>
    </Workspace>
  );
}
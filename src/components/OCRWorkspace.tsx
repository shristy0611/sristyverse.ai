import React from 'react';
import { Workspace } from './Workspace';
import { Upload, Settings, FileText } from 'lucide-react';

export function OCRWorkspace() {
  return (
    <Workspace type="ocr" title="OCR System">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">Drag and drop images or documents here</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Upload Files
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Settings className="w-5 h-5" />
              OCR Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Accuracy Threshold</label>
                <input type="range" className="w-full" min="0" max="100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Output Format</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Plain Text</option>
                  <option>JSON</option>
                  <option>XML</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Results
            </h3>
            <div className="bg-gray-50 p-4 rounded-md h-64 overflow-auto">
              <p className="text-gray-500 italic">Extracted text will appear here...</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Confidence: N/A</span>
              <span>Processing Time: N/A</span>
            </div>
          </div>
        </div>
      </div>
    </Workspace>
  );
}
import React from 'react';
import { Workspace } from './Workspace';
import { MessageCircle, Settings2, Brain } from 'lucide-react';

export function ChatbotWorkspace() {
  return (
    <Workspace type="chatbot" title="Chatbot Creator">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Personality & Behavior
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Personality Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Technical</option>
                  <option>Casual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Knowledge Base</label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Settings2 className="w-5 h-5" />
              Configuration
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Response Time (ms)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Conversation Flow</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={4}
                  placeholder="Define conversation flow rules..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Test Environment
          </h3>
          <div className="bg-gray-50 p-4 rounded-md h-96 flex flex-col">
            <div className="flex-1 overflow-auto space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello! How can I help you today?</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Workspace>
  );
}
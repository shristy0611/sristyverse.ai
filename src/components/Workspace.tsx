import React from 'react';
import { WorkspaceType } from '../types';
import { Maximize2, MinusSquare, Square } from 'lucide-react';

interface WorkspaceProps {
  type: WorkspaceType;
  title: string;
  children: React.ReactNode;
}

export function Workspace({ title, children }: WorkspaceProps) {
  return (
    <div className="glassmorphism rounded-xl overflow-hidden text-gray-100">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-800 rounded">
            <MinusSquare className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-800 rounded">
            <Square className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-800 rounded">
            <Maximize2 className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
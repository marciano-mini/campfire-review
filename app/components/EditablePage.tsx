'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface EditablePageProps {
  title: string;
  storageKey: string;
  defaultContent: string;
}

export default function EditablePage({ title, storageKey, defaultContent }: EditablePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const [isSaved, setIsSaved] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setContent(saved);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, content);
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleCancel = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setContent(saved);
    } else {
      setContent(defaultContent);
    }
    setIsEditing(false);
  };

  const handleReset = () => {
    if (confirm('Reset to original content? This will delete your changes.')) {
      localStorage.removeItem(storageKey);
      setContent(defaultContent);
      setIsEditing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link 
            href="/" 
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2"
          >
            ← Back
          </Link>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              ✏️ Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                💾 Save
              </button>
            </div>
          )}
        </div>

        {/* Save Confirmation */}
        {isSaved && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-pulse">
            ✓ Saved to device
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Content Area */}
        {!isEditing ? (
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 whitespace-pre-wrap"
              style={{ fontFamily: 'inherit' }}
            >
              {content}
            </div>
          </div>
        ) : (
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[70vh] p-6 bg-white/10 backdrop-blur-lg rounded-xl border-2 border-orange-500/50 text-white font-mono text-sm focus:outline-none focus:border-orange-500 resize-y"
              placeholder="Edit your content here..."
              autoFocus
            />
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={handleReset}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                🔄 Reset to Original
              </button>
              <span className="text-sm text-gray-400">
                {content.length} characters
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

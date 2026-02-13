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

  // Format content for better e-reader display
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Headers
        if (line.startsWith('### ')) {
          return <h3 key={i} className="text-2xl font-bold mt-8 mb-4 text-orange-300">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-3xl font-bold mt-10 mb-6 text-orange-400">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('# ')) {
          return <h1 key={i} className="text-4xl font-bold mt-12 mb-8 text-orange-500">{line.replace('# ', '')}</h1>;
        }
        
        // Horizontal rules
        if (line.trim() === '---') {
          return <hr key={i} className="my-8 border-white/20" />;
        }
        
        // Bullet points
        if (line.startsWith('- ')) {
          return <li key={i} className="ml-6 mb-2 leading-relaxed">{line.replace('- ', '')}</li>;
        }
        
        // Bold text (convert **text** to bold)
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={i} className="mb-4 leading-relaxed">
              {parts.map((part, j) => 
                j % 2 === 1 ? <strong key={j} className="text-orange-300 font-semibold">{part}</strong> : part
              )}
            </p>
          );
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={i} className="h-4" />;
        }
        
        // Regular paragraphs
        return <p key={i} className="mb-4 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link 
            href="/" 
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 text-lg"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Content Area */}
        {!isEditing ? (
          <div className="text-lg leading-relaxed">
            <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              {formatContent(content)}
            </div>
          </div>
        ) : (
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[70vh] p-6 bg-white/10 backdrop-blur-lg rounded-xl border-2 border-orange-500/50 text-white text-base leading-relaxed focus:outline-none focus:border-orange-500 resize-y"
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

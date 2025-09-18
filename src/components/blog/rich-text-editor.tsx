
'use client';

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link'
];

export function RichTextEditor({ value, onChange, className }: RichTextEditorProps) {
  return (
    <div className={cn("bg-background", className)}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="[&_.ql-container]:min-h-[400px] [&_.ql-container]:rounded-b-md [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border-input [&_.ql-container]:border-input"
      />
    </div>
  );
}

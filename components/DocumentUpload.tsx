'use client'

import { useState } from 'react'
import { Upload, File, X } from 'lucide-react'

interface DocumentUploadProps {
  label: string
  required?: boolean
  accept?: string
  onChange?: (file: File | null) => void
}

export default function DocumentUpload({ label, required = false, accept = "image/*,.pdf", onChange }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile)
    onChange?.(selectedFile)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileChange(droppedFile)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    handleFileChange(selectedFile)
  }

  return (
    <div className="mb-4">
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragOver ? 'border-primary-400 bg-primary-50' : 'border-gray-300'
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div className="flex items-center">
              <File className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">{file.name}</span>
            </div>
            <button
              type="button"
              onClick={() => handleFileChange(null)}
              className="text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div>
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 mb-2">Drop file here or click to upload</p>
            <input
              type="file"
              accept={accept}
              onChange={handleInputChange}
              className="hidden"
              id={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
            />
            <label
              htmlFor={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
              className="btn-primary cursor-pointer"
            >
              Choose File
            </label>
            <p className="text-xs text-gray-500 mt-2">Max size: 5MB. Formats: JPG, PNG, PDF</p>
          </div>
        )}
      </div>
    </div>
  )
}
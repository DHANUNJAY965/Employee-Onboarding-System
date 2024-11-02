import React, { useState, useEffect } from 'react';
import { Share2 } from 'lucide-react';

const OffBoard = ({ data, setData }) => {
  
  const [formState, setFormState] = useState({
    selectedDate: data?.selectedDate || '',
    exitInterview: data?.exitInterview || false,
    enCashLeave: data?.enCashLeave || false,
    conductor: data?.conductor || '',
    fileUrl: data?.fileUrl || ''
  });

 
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  
  useEffect(() => {
    setData(formState);
  }, [formState]);

  const handleFieldChange = (field, value) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/api/upload/document', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        handleFieldChange('fileUrl', data.url);
        setFileName(file.name); 
      } else {
        throw new Error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-48">
        <label>Date</label>
        <input
          type="date"
          value={formState.selectedDate}
          onChange={(e) => handleFieldChange('selectedDate', e.target.value)}
          className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
          style={{
            '::-webkit-calendar-picker-indicator': {
              opacity: 0,
              position: 'absolute',
              right: 0,
              top: 0,
              width: '100%',
              height: '100%',
              cursor: 'pointer'
            }
          }}
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formState.exitInterview}
            onChange={(e) => handleFieldChange('exitInterview', e.target.checked)}
            className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
          />
          <span>Exit Interview</span>
        </label>

        {formState.exitInterview && (
          <>
            <div className="w-48">
              <input
                type="text"
                placeholder="Conducted by"
                value={formState.conductor}
                onChange={(e) => handleFieldChange('conductor', e.target.value)}
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 font-poppins text-[12px] font-normal text-[rgba(51,51,51,0.8)] appearance-none focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer">
                <Share2 size={20} />
                <span>{formState.fileUrl ? 'Change Document' : 'Upload Doc'}</span>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                />
              </label>
              {uploading && <span className="text-sm text-gray-600">Uploading...</span>}
              {fileName && !uploading && (
                <span className="text-sm text-gray-600">{fileName}</span>
              )}
            </div>
          </>
        )}

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formState.enCashLeave}
            onChange={(e) => handleFieldChange('enCashLeave', e.target.checked)}
            className="w-4 h-4 border-[#1A72A7] shadow-[0_0_4px_#1A72A7] rounded-md accent-[#1A72A7]"
          />
          <span>En-cash Leave</span>
        </label>
      </div>
    </div>
  );
};

export default OffBoard;
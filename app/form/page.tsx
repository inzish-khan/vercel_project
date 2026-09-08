'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  mothersName: string;
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mothersName: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mothersName.trim()) {
      newErrors.mothersName = "Mother's Name is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted({
      name: formData.name,
      mothersName: formData.mothersName,
    });
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Form</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              padding: '8px',
              fontSize: '16px',
              width: '300px',
              border: errors.name ? '2px solid red' : '1px solid gray',
            }}
          />
          {errors.name && (
            <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errors.name}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="mothersName" style={{ display: 'block', marginBottom: '5px' }}>
            Mother&apos;s Name
          </label>
          <input
            type="text"
            id="mothersName"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleInputChange}
            style={{
              padding: '8px',
              fontSize: '16px',
              width: '300px',
              border: errors.mothersName ? '2px solid red' : '1px solid gray',
            }}
          />
          {errors.mothersName && (
            <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errors.mothersName}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            marginTop: '20px',
          }}
        >
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Mother&apos;s Name:</strong> {submitted.mothersName}
          </p>
        </div>
      )}
    </div>
  );
}

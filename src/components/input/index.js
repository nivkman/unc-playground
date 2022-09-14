import React from 'react'

export default function Input({ type, labelText, name, placeholder, setValue, value }) {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {labelText}
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={name}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder={placeholder}
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}

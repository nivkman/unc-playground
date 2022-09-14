import React from 'react'

export default function Button({text, func}) {
  return (
    <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={func}
      >
        {text}
      </button>
  )
}

export default function TextArea({ name, labelText, placeholder, setValue, value }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {labelText}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={value}
          placeholder={placeholder}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

function MyDropdown({
  name,
  label,
  dropDownData,
  onChange,
  required,
  value,
  error,
  disabled
}) {
  const selectionDownHandler = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="relative w-full text-onSurface">
        <select
          name={name}
          id={name}
          disabled={disabled}
          value={value}
          className={` h-10  border-primary border-[1px] disabled:bg-gray-50 disabled:opacity-90 disabled:border-gray-300 disabled:text-onSurface peer w-full rounded bg-surface transition-colors focus:border-primary ${
            error ? 'ring-1 ring-error' : ''
          }`}
          onChange={selectionDownHandler}
        >
          <option key={-1} value="Select">
            {label}
          </option>
          {dropDownData?.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className="text-xs text-error">{error}</div>
        <label
          htmlFor={name}
          className={`absolute left-0 top-2 mx-1 cursor-text bg-surface  
          px-3 transition-all duration-200 peer-focus:-top-2 peer-focus:bg-surface peer-focus:text-xs peer-focus:text-primary
          ${value ? '-top-[8px] text-xs text-primary' : ''}`}
        >
          {label}
          <span className="font-medium text-error">{required ? ' *' : ''}</span>
        </label>
      </div>
    </>
  );
}

export default MyDropdown;

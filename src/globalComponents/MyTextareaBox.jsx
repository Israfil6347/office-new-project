import { useState } from 'react';

function MyTextareaBox({
  label,
  name,
  rows,
  cols,
  value,
  required,
  error,
  onChangeHandler,
  disabled
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="">
        <div className="relative  w-full text-onSurface">
          <textarea
            name={name}
            onBlur={handleFocus}
            rows={rows}
            cols={cols}
            disabled={disabled}
            value={value}
            focused={focused.toString()}
            className={` disabled:bg-gray-50 disabled:opacity-90 disabled:border-gray-300 disabled:text-onSurface peer w-full rounded bg-surface transition-colors focus:border-primary ${
              error ? 'ring-error' : 'ring-success'
            } `}
            onInput={onChangeHandler}
          ></textarea>

          <label
            htmlFor={name}
            className={`absolute left-0  mx-3 cursor-text  bg-surface px-1  transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary text  ${
              value?.length > 0 ? ' -top-2 text-xs text-primary' : 'top-2'
            }`}
          >
            {label}
            <span className="font-medium text-error">
              {required ? ' *' : ''}
            </span>
          </label>

          <div className="text-xs text-error">{error}</div>
        </div>
      </div>
    </>
  );
}

export default MyTextareaBox;

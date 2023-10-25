import { useState } from 'react';

function MyInputBox({
 id,
  label,
  name,
  value,
  inputType,
  required,
  error,
  disabled,
  onChangeHandler,
  placeHolder
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className=" relative w-full text-onSurface">
        <input
          placeholder={placeHolder}
          name={name}
          id={id}
          onBlur={handleFocus}
          focused={focused.toString()}
          type={inputType}
          disabled={disabled}
          value={value}
          className={` disabled:bg-gray-50 h-10  disabled:opacity-90  disabled:border-gray-300 disabled:text-onSurface peer w-full rounded bg-surface transition-colors focus:border-primary ${
            error ? 'ring-1 ring-error' : ''
          }`}
          onChange={onChangeHandler}
        />

        <label
          htmlFor={id}
          className={`absolute left-0  mx-3 cursor-text bg-surface px-1 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary text  ${
            value?.length > 0 ? ' -top-2 text-xs text-primary' : 'top-2'
          }`}
        >
          {label}
          <span className="font-medium text-error">{required ? ' *' : ''}</span>
        </label>

        <div className="text-xs text-error">{error}</div>
      </div>
    </>
  );
}

export default MyInputBox;
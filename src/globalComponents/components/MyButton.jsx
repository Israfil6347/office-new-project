function MyButton({
  type,
  label,
  styleClass = '',
  onClick,
  disabled,
  children
}) {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`flex justify-center rounded border py-2 mr-5 font-semibold disabled:bg-gray-500 uppercase text-onPrimary hover:scale-105 bg-primaryVariant ${styleClass}`}
        onClick={onClick}
      >
        {children}
        {label}
      </button>
    </>
  );
}

export default MyButton;

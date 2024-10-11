const Input = ({
  className = '',
  sizeClass = 'h-11 px-4 py-3',
  fontClass = 'text-sm font-normal',
  rounded = 'rounded-full',
  type = 'text',
  ...args
}) => {
  return (
    <input
      type={type}
      className={`focus:border-primary-300 focus:ring-primary-200/50 block w-full border-[#0074D9] bg-white focus:ring ${rounded} ${fontClass} ${sizeClass} ${className}`}
      {...args}
    />
  );
};

export default Input;

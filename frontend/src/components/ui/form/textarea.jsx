

const Textarea = ({ title, label, register, type, placeholder, ...props }) => {
  return (
    <div className="group mb-8">
      <label
        htmlFor={label}
        className="mb-2 block font-medium text-gray-700 group-focus-within:text-yellow-500"
      >
        {title}
      </label>
      <textarea
        {...register(label)}
        className="border-2 border-gray-400 rounded-lg bg-transparent p-4 w-full group-focus-within:outline-yellow-500"
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea
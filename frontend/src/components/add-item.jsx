const AddItem = () => {
  return (
    <div className="bg-[#80485b] w-full p-3 rounded-3xl gap-9 flex items-center justify-between ">
      <div className="w-32 h-32 -top-8 relative">
        <img className="absolute" src="/source.svg" />
      </div>
      <div className="">
        <p className="text-white text-lg font-semibold">
          Didn't find what you nedd?
        </p>
        <button className="bg-white py-2 px-4 font-semibold text-gray-800 rounded-xl mt-3">
          Add item
        </button>
      </div>
    </div>
  );
};

export default AddItem;

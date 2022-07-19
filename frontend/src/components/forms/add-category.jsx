import { useForm } from "react-hook-form";
import Input from "../ui/form/input";

const AddCategoryForm = () => {
  const { register } = useForm();
  return (
    <>
      <p className="font-semibold text-xl mb-5">Add a category</p>
      <form>
        <Input
          register={register}
          title="Name category"
          placeholder="Enter a name for the category"
          label="name"
        />
        <div className="text-end">
          <button
            className="bg-yellow-500 text-gray-50 font-semibold py-2 px-4 rounded-xl hover:bg-yellow-600"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCategoryForm;

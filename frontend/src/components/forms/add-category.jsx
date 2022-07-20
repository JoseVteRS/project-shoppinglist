import { useForm } from "react-hook-form";
import { categoryCreate } from "../../lib/api/categories/category-create.api";
import Input from "../ui/form/input";

const AddCategoryForm = ({setShowModal}) => {
  const { register, handleSubmit } = useForm();
const onSubmit = async (data) => {
  await categoryCreate(data);
  setShowModal(false);
};
  return (
    <>
      <p className="font-semibold text-xl mb-5">Add a category</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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

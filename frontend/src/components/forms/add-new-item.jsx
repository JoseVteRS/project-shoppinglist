import { useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";
import Input from "../ui/form/input";
import Textarea from "../ui/form/textarea";
import { productCreateApi } from "../../lib/api/products/product-create.api";

const AddNewItem = () => {
  const { showUiPart } = useContext(UIContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    productCreateApi(data, () => {
      toast.success(`Producto \"${data.name}\" correctamente`);
      showUiPart(UI_PART.ITEM_LIST);
    });
  };

  return (
    <div className="w-full sticky top-0 p-5">
      <h2 className="mb-10 text-2xl font-semibold">Add new item</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            title="Name"
            placeholder="Enter a name"
            label="name"
          />
          <Textarea
            register={register}
            title="Note (optional)"
            placeholder="Enter a note"
            label="note"
          />

          <div className="group mb-8">
            <label
              htmlFor="gategory"
              className="mb-2 block font-medium text-gray-700 group-focus-within:text-yellow-500"
            >
              Category
            </label>
            <select
              {...register("category")}
              className="border-2 border-gray-400 rounded-lg bg-transparent p-4 w-full mb-5 focus:outline-yellow-500"
            >
              <option
                className="hover:bg-gray-200 p-2"
                value="a0756e23-d97c-4473-8105-2091321ceab5"
              >
                Carnes
              </option>
            </select>
          </div>

          <div className="flex gap-5 items-center justify-center my-8">
            <button type="button" className="font-medium text-gray-800">
              cancel
            </button>
            {/* TODO: PRovisional poner la funcion en onSuccess */}
            <button
              type="submit"
              className="bg-yellow-500 p-4 rounded-lg font-medium text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewItem;

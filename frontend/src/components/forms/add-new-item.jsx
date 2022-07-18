import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";
import Input from "../ui/form/input";
import Textarea from "../ui/form/textarea";
import Modal from "../ui/modal";
import { productCreateApi } from "../../lib/api/products/product-create.api";
import SelectCategories from "./categories-select";
import AddCategoryForm from "./add-category";


const AddNewItem = () => {
  const { showUiPart } = useContext(UIContext);
  const [showModal, setShowModal] = useState(false);
  const [showCategoryAddForm, setShowCategoryAddForm] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    productCreateApi(data, () => {
      toast.success(`Producto \"${data.name}\" creado correctamente`);
      showUiPart(UI_PART.ITEM_LIST);
    });
  };

  const handleOnCloseModal = () => {
    setShowModal(false);
    showUiPart(UI_PART.ITEM_LIST);

  }

  return (
    <>
      <Modal show={showModal} onClose={handleOnCloseModal}>
        <p className="font-medium text-xl w-4/5">
          Are you sure that you want to cancel this list?
        </p>
        <div className="flex items-center justify-end mt-8 gap-5">
          <button
            onClick={handleOnCloseModal}
            className=" rounded p-2 text-gray-800 font-semibold"
          >
            cancel
          </button>
          <button
            onClick={() => console.log("YES")}
            className="bg-red-400 rounded p-2 w-20 text-white"
          >
            Yes
          </button>
        </div>
      </Modal>
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
                className="mb-2 flex items-center gap-3 font-medium text-gray-700 group-focus-within:text-yellow-500"
              >
                Category <button className="bg-gray-300 rounded p-2" onClick={() => setShowCategoryAddForm(true)} >Add category</button>
              </label>
              <SelectCategories register={register} label="category" />
            </div>

            <div className="flex gap-5 items-center justify-center my-8">
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className=" focus:outline-yellow-600 p-4 rounded-lg font-medium text-gray-800 hover:underline"
              >
                cancel
              </button>
              <button
                type="submit"
                className="bg-yellow-500 hover:shadow-lg focus:outline-yellow-500 focus:outline-offset-4 p-4 rounded-lg font-medium text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        {
          showCategoryAddForm && (<div>
            <AddCategoryForm />
          </div>)
        }

      </div>


    </>
  );
};

export default AddNewItem;

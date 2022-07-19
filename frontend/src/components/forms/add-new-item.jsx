import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";
import Input from "../ui/form/input";
import Textarea from "../ui/form/textarea";
import { productCreateApi } from "../../lib/api/products/product-create.api";
import SelectCategories from "./categories-select";
import AddCategoryForm from "./add-category";
import { ProductContext } from "../../lib/context/product-context";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Modal from "../ui/modal";
import CustomSelect from "./custom-select";
import Select from "../ui/form/select";
import { getCategories } from "../../lib/api/categories/get-categories";

const AddNewItem = () => {
  const { showUiPart } = useContext(UIContext);
  const { addProductToIndexListOnCreate } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [showCategoryAddForm, setShowCategoryAddForm] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await getCategories();
      
      setCategory(categories);
    };
    fetchCategories();
  }, []);


  

  const onSubmit = async (data) => {
    setIsLoading(true);

    await productCreateApi(data, () => {
      setIsLoading(false);
      toast.success(`Producto \"${data.name}\" creado correctamente`);
      showUiPart(UI_PART.ITEM_LIST);
      // addProductToIndexListOnCreate(data);
    });
  };

  return (
    <>
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
                Category
                <button type="button" onClick={() => setShowModal(true)}>
                  <PlusCircleIcon className="h-8 p-1 hover:stroke-gray-800" />
                </button>
              </label>
              {!category ? (
                <p>Loading categories option</p>
              ) : (
                <Select
                  options={mappedSelectOptionsCategory(category.data)}
                  name="category"
                  register={register}
                />
              )}
            </div>

            <div className="flex gap-5 items-center justify-center my-8">
              <button
                type="button"
                className=" focus:outline-yellow-600 p-4 rounded-lg font-medium text-gray-800 hover:underline"
              >
                cancel
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className="bg-yellow-500 hover:shadow-lg focus:outline-yellow-500 focus:outline-offset-4 p-4 rounded-lg font-medium text-white"
              >
                {isLoading ? "Saving new product" : "Save"}
              </button>
            </div>
          </form>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <AddCategoryForm />
        </Modal>
      </div>
    </>
  );
};

const mappedSelectOptionsCategory = (categories) => {
  let options = [];
  
  categories.map((category) => {
    return options.push({
      label: category.name,
      value: category._id,
    });
  });

  return options;
};

export default AddNewItem;

import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";
import Input from "../ui/form/input";
import Textarea from "../ui/form/textarea";
import { productCreateApi } from "../../lib/api/products/product-create.api";
import AddCategoryForm from "./add-category";
import { ProductContext } from "../../lib/context/product-context";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Modal from "../ui/modal";

import { getCategories } from "../../lib/api/categories/get-categories";
import CustomSelect from "../ui/form/select";

const state = {
  name: "",
  note: "",
  category: "",
};

const AddNewItem = () => {
  const { showUiPart } = useContext(UIContext);
  const [showModal, setShowModal] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [fieldsDirtied, setFieldsDirtied] = useState({});

  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: state,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await getCategories();
      setCategory(categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setFieldsDirtied(formState.dirtyFields);
  }, [formState.dirtyFields]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    await productCreateApi(data, () => {
      setIsLoading(false);
      toast.success(`Producto \"${data.name}\" creado correctamente`);
      showUiPart(UI_PART.ITEM_LIST);
    });
  };

  const onCancel = () => {

    if (Object.keys(formState.dirtyFields).length !== 0) {
      setShowModalConfirm(true);
    } else {
      showUiPart(UI_PART.ITEM_LIST);
    }
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
                <>
                  <CustomSelect
                    name={"category"}
                    label={"Category"}
                    control={control}
                    values={mappedSelectOptionsCategory(category.data)}
                  />
                </>
              )}
            </div>

            <div className="flex gap-5 items-center justify-center my-8">
              <button
                onClick={onCancel}
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

        <Modal
          show={showModalConfirm}
          onClose={() => setShowModalConfirm(false)}
        >
          <p className="text-xl">
            Changes may not be saved. Are you sure you want exit
          </p>
          <div className=" flex items-center justify-end">
            <button
              className="bg-yellow-500 py-2 px-4 text-gray-100 rounded-lg"
              onClick={() => showUiPart(UI_PART.ITEM_LIST)}
            >
              Yes
            </button>
          </div>
        </Modal>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <AddCategoryForm setShowModal={() => setShowModal(false)} />
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

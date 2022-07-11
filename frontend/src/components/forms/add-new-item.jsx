import React, { useContext } from "react";
import { UIContext } from "../../lib/context/ui-context";
import Input from "../ui/form/input";
import Textarea from "../ui/form/textarea";

const AddNewItem = () => {

  const {toggleAddItemForm} = useContext(UIContext)

  return (
    <div className="w-full sticky top-0 p-5">
      <h2 className="mb-10 text-2xl font-semibold">Add new item</h2>

      <div>
        <form>
          <Input title="Name" placeholder="Enter a name" label="name" />
          <Textarea
            title="Note (optional)"
            placeholder="Enter a note"
            label="note"
          />
          <Input
            title="Image (optional)"
            placeholder="Enter a url"
            label="name"
          />

          <div className="group mb-8">
            <label
              htmlFor="gategory"
              className="mb-2 block font-medium text-gray-700 group-focus-within:text-yellow-500"
            >
              Category
            </label>
            <select className="border-2 border-gray-400 rounded-lg bg-transparent p-4 w-full mb-5 focus:outline-yellow-500">
              <option className="hover:bg-gray-200 p-2">
                Fruit and vegetable
              </option>
              <option className="hover:bg-gray-200 p-2">Meat and Fish</option>
              <option className="hover:bg-gray-200 p-2">
                Fruit and vegetable
              </option>
            </select>
          </div>

          <div className="flex gap-5 items-center justify-center my-8">
            <button type="button" className="font-medium text-gray-800">
              cancel
            </button>
            {/* TODO: PRovisional poner la funcion en onSuccess */}
            <button
              onClick={toggleAddItemForm}
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

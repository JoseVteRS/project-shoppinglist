import Image from "next/image"


const ListNoHasItem = () => {
  return (
    <div className="flex flex-col items-center justify-between h-3/6">
      <p className="font-bold text-xl mt-16">No items</p>
      <div>
        <Image src="/undraw-cart.svg" width={250} height={250} alt="Image no products in list" />
      </div>
    </div>
  );
}

export default ListNoHasItem
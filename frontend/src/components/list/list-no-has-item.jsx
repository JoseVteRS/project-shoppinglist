

import React from 'react'

const ListNoHasItem = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <p className="font-bold text-xl">No items</p>
      <div>
        <img src="/undraw-cart.svg" />
      </div>
    </div>
  );
}

export default ListNoHasItem
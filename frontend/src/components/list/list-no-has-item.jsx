

import React from 'react'

const ListNoHasItem = () => {
  return (
    <div className="flex flex-col items-center justify-between h-3/6">
      <p className="font-bold text-xl mt-16">No items</p>
      <div>
        <img src="/undraw-cart.svg" />
      </div>
    </div>
  );
}

export default ListNoHasItem
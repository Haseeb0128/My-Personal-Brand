import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <div>
        <h6 className="font-semibold">Metal Wall Art #1</h6>
        <p className="text-sm text-gray-500">1 × $120</p>
      </div>
      <p className="font-semibold">$120</p>
    </div>
  );
};

export default CartItem;

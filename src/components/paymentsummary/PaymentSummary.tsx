import React from 'react'


interface Params{
  totalQuantity: number;
  subtotal: number;
  discount: number;
  total: number;
}

function PaymentSummary({totalQuantity, subtotal, discount, total}: Params) {
  return (
  <table className="border-collapse w-1/2 bg-grayButton rounded-lg">
    <tr>
      <td className="py-2 px-4 border border-gray-100">Number of items</td>
      <td className="py-2 px-4 border border-gray-100 text-right">{totalQuantity}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 border border-gray-100">Subtotal</td>
      <td className="py-2 px-4 border border-gray-100 text-right">{subtotal && 'P' + subtotal}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 border border-gray-100">Discount</td>
      <td className="py-2 px-4 border border-gray-100 text-right">{discount && 'P' + discount}</td>
    </tr>
    <tr>
      <td className="py-2 px-4 border border-gray-100 font-medium">Total</td>
      <td className="py-2 px-4 border border-gray-100 text-right font-bold text-lg">{total && 'P' + total}</td>
    </tr>
</table>

  )
}

export default PaymentSummary
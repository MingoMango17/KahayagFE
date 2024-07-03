import React from 'react'

interface Params {
  orderType: string;
  totalQuantity: number;
  modeOfPayment: string;
  total: number;
}

function OrderSummary({ orderType, totalQuantity, modeOfPayment, total }: Params) {
  return (
    <table className="border-collapse w-1/2 rounded-lg border-2 border-gray-500">
      <tbody>
        <tr>
          <td className="py-2 px-4">Order Type:</td>
          <td className="py-2 px-4 text-right">{orderType}</td>
        </tr>
        <tr>
          <td className="py-2 px-4">Total Items:</td>
          <td className="py-2 px-4 text-right">{totalQuantity}</td>
        </tr>
        <tr>
          <td className="py-2 px-4">Mode of Payment:</td>
          <td className="py-2 px-4 text-right">{modeOfPayment}</td>
        </tr>
        <tr>
          <td className="py-2 px-4">Total Cost:</td>
          <td className="py-2 px-4 text-right">{'P' + total}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderSummary

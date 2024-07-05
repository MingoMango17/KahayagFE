import React from "react";

interface Params {
  totalQuantity: number;
  total: number;
}

function PaymentSummary({ totalQuantity, total }: Params) {
  return (
    <table className="border-collapse w-1/2 bg-grayButton rounded-lg">
      <tbody>
        <tr>
          <td className="py-2 px-4 border border-gray-100">Number of items</td>
          <td className="py-2 px-4 border border-gray-100 text-right">
            {totalQuantity}
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gray-100 font-medium">
            Total
          </td>
          <td className="py-2 px-4 border border-gray-100 text-right font-bold text-lg">
            {total && "P" + total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PaymentSummary;

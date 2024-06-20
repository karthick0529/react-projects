import { UseAppState } from "../Context/AppContext";

export default function PurchaseTotal() {
  const { subtotal, totalProducts } = UseAppState();

  return (
    <div className="flex flex-col md:w-3/4 w-full h-fit gap-4 p-4">
      <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Subtotal ({totalProducts} Items)</p>
          <p className="text-end font-bold">${subtotal.toFixed(2)}</p>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Freight</p>
          <div>
            <p className="text-end font-bold">FREE</p>
            <p className="text-gray-600 text-sm font-normal">
              Arrives on Jul 16
            </p>
          </div>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Total</p>
          <div>
            <p className="text-end font-bold">${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
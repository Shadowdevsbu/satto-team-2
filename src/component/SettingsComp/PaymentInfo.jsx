import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
const PaymentInfo = () => {
  const currencies = [
    { value: "NGN", label: "NGN - Nigerian Naira" },
    { value: "USD", label: "USD - US Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
  ];

  const [preferredCurrency, setPreferredCurrency] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("preferredCurrency"));
      return stored || "NGN";
    } catch {
      return "NGN";
    }
  });

  const [paymentMethods, setPaymentMethods] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("paymentMethods"));
      return (
        stored || [
          {
            id: 1,
            last4: "1234",
            expires: "4 / 26",
            icon: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
          },
        ]
      );
    } catch {
      return [
        {
          id: 1,
          last4: "1234",
          expires: "4 / 26",
          icon: "https://cdn-icons-png.flaticon.com/512/196/196578.png",
        },
      ];
    }
  });

  // Persist to localStorage when values change
  useEffect(() => {
    localStorage.setItem(
      "preferredCurrency",
      JSON.stringify(preferredCurrency)
    );
    localStorage.setItem("paymentMethods", JSON.stringify(paymentMethods));
  }, [preferredCurrency, paymentMethods]);

  const handleDelete = (id) => {
    setPaymentMethods((methods) => methods.filter((m) => m.id !== id));
  };

  const handleAddMethod = () => {
    //  Add a dummy method (replace with real logic/modal)
    setPaymentMethods((methods) => [
      ...methods,
      {
        id: Date.now(),
        type: "Mastercard",
        last4: "5678",
        expires: "4 / 26",
        icon: "https://cdn-icons-png.flaticon.com/512/196/196561.png",
      },
      {
        id: Date.now() + 1,
        type: "PayPal",
        last4: "9012",
        expires: "4 / 26",

        icon: "https://cdn-icons-png.flaticon.com/512/196/196572.png",
      },
    ]);
  };

  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <div className="mb-8">
          <label
            className="text-sm font-medium text-gray-500 mb-2 flex block"
            htmlFor="preferredCurrency"
          >
            Preferred Currency
          </label>
          <select
            id="preferredCurrency"
            value={preferredCurrency}
            onChange={(e) => {
              setPreferredCurrency(e.target.value);
            }}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base cursor-pointer"
          >
            {currencies.map((Currency) => (
              <option key={Currency.value} value={Currency.value}>
                {Currency.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-lg font-bold mb-2">Payment Method</h3>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            onClick={handleAddMethod}
            type="button"
          >
            + Add Method
          </button>
        </div>

        {paymentMethods.length === 0 ? (
          <div className="text-gray-500 text-center py-4">
            No payment methods added.
          </div>
        ) : (
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={method.icon}
                    alt={`${method.type || "Card"} Icon`}
                    className="w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {method.type || "Card"} •••• •••• ••• {method.last4}
                    </span>
                    <span className="text-xs text-gray-500">
                      Expires: {method.expires}
                    </span>
                  </div>
                </div>
                <button
                  className="ml-auto text-red-600 hover:text-red-800 transition"
                  onClick={() => handleDelete(method.id)}
                  type="button"
                  aria-label="Delete payment method"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default PaymentInfo;

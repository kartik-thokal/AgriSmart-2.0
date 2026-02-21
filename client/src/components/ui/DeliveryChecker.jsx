import { useState } from "react";

function DeliveryChecker() {
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  function checkDelivery() {
    if (pincode.length === 6) {
      setDeliveryMessage(
        "Delivery available. Arrives in 3-5 working days."
      );
    } else {
      setDeliveryMessage("Please enter a valid 6-digit pincode.");
    }
  }

  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-3 text-base text-gray-800 dark:text-gray-200">
        Delivery Options
      </h3>

      <div className="flex gap-3">
        <input
          type="text"
          maxLength={6}
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter Pincode"
          className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        <button
          onClick={checkDelivery}
          className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-5 rounded-lg text-sm font-medium transition"
        >
          Check
        </button>
      </div>

      {deliveryMessage && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {deliveryMessage}
        </p>
      )}
    </div>
  );
}

export default DeliveryChecker;
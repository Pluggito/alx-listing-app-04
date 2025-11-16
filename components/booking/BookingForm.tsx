const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input title="first" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Last Name</label>
          <input title="last" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input title="email" type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Phone Number</label>
          <input title="phone" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input title="card" type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input title="expiration" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>CVV</label>
          <input title="cvv" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input title="street" type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input title="city" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>State</label>
          <input title="state" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input title="zip" type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label>Country</label>
          <input title="country" type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
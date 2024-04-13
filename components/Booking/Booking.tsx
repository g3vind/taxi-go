import AutoCompleteAddress from "./AutoCompleteAddress"

const Booking = () => {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-4 border-black-500 p-5 rounded-md">
        <AutoCompleteAddress />
      </div>
    </div>
  )
}
export default Booking

import React from "react"

const AutoCompleteAddress = () => {
  return (
    <div className="mt-5">
      <div>
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          placeholder="Where From?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-500"
        />
      </div>

      <div className="mt-5">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          placeholder="Where To?"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-500"
        />
      </div>
    </div>
  )
}

export default AutoCompleteAddress

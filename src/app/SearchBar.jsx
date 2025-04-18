import { FiSearch } from "react-icons/fi";

export default function SearchBar () {
  return (
    <div className='flex gap-2 w-full'>
      <input
        className='flex justify-center items-center p-4 border border-white/[.145] border-solid rounded-full w-full font-medium text-sm'
        type='text'
        value={"Kuala Lumpur, Malaysia"}
        readOnly
      />
      <button className="bg-white hover:bg-[#f0f0f0] px-5 rounded-full text-black transition-colors hover:cursor-pointer"><FiSearch /></button>
    </div>
  )
}

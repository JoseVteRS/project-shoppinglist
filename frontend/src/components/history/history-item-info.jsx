

import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/outline';


const HistoryItemInfo = () => {
  return (
    <div className="bg-white p-5 mb-8 rounded-xl shadow-md shadow-gray-400/10">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg w-full">Gracery List</h3>
        <div className="flex items-center justify-end gap-5 w-full">
          <p className='flex gap-1 items-center text-gray-400 text-sm'> <CalendarIcon className='w-6' /> Mon 27.8.2022</p>
          <div className="border border-sky-500 text-sky-500 py-1 px-4 rounded-full font-medium text-sm">
            completed
          </div>
          <ChevronRightIcon className="stroke-yellow-500 w-8" />
        </div>
      </div>
    </div>
  );
}

export default HistoryItemInfo
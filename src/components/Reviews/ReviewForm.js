import React from 'react'

export const ReviewForm = () => {
  return (
    <div className='grid justify-items-center'>
    <div>ReviewCard</div>
    <form class="w-1/2 max-w-sm" >
      <div class="flex items-center border-b border-teal-500 py-2 mb-4">
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Leave Remarks" aria-label="Full name" />
      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Send
      </button>
      <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Cancel
      </button>
      </div>
    </form>
</div>
  )
}


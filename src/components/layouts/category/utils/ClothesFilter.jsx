import { catNextIcon } from '@/utils/Svgs'
import React from 'react'

const ClothesFilter = ({clothes}) => {
  return (
    <div className="flex flex-col w-ful sm:gap-y-5 gap-y-4 sm:mt-6 mt-4 sm:pb-6 pb-4 border-b border-b-black border-opacity-10">
        {clothes.map((cloth, index) => (
          <div
            key={index}
            className="flex flex-row justify-between w-full items-center cursor-pointer"
          >
            <p className="opacity-60">{cloth}</p>

            {catNextIcon}
          </div>
        ))}
      </div>
  )
}

export default ClothesFilter

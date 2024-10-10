import React from 'react'
import { SizeType } from '../App'

interface SizeSelectorProps {
  size: SizeType
  setSize: (size: SizeType) => void
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ size, setSize }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
      <div className="flex space-x-4">
        {['6x4', '4x6', '5x5'].map((s) => (
          <button
            key={s}
            className={`px-4 py-2 rounded-lg ${
              size === s
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setSize(s as SizeType)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
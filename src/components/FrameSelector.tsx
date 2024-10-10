import React from 'react'
import { FrameType } from '../App'

interface FrameSelectorProps {
  frame: FrameType
  setFrame: (frame: FrameType) => void
}

const FrameSelector: React.FC<FrameSelectorProps> = ({ frame, setFrame }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Choose Frame</h2>
      <div className="flex space-x-4">
        {['wood', 'silver', 'black'].map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-lg ${
              frame === f
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setFrame(f as FrameType)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FrameSelector
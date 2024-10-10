import React from 'react'
import { FrameType, SizeType } from '../App'

interface PreviewProps {
  image: string | null
  frame: FrameType
  size: SizeType
}

const Preview: React.FC<PreviewProps> = ({ image, frame, size }) => {
  const frameColors = {
    wood: 'bg-amber-700',
    silver: 'bg-gray-300',
    black: 'bg-black',
  }

  const sizeClasses = {
    '6x4': 'w-96 h-64',
    '4x6': 'w-64 h-96',
    '5x5': 'w-80 h-80',
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Preview</h2>
      <div
        className={`${frameColors[frame]} p-4 rounded-lg ${sizeClasses[size]}`}
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No image uploaded
          </div>
        )}
      </div>
    </div>
  )
}

export default Preview
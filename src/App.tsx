import React, { useState } from 'react'
import { Upload, Frame, Image as ImageIcon } from 'lucide-react'
import FrameSelector from './components/FrameSelector'
import SizeSelector from './components/SizeSelector'
import ImageUpload from './components/ImageUpload'
import Preview from './components/Preview'

export type FrameType = 'wood' | 'silver' | 'black'
export type SizeType = '6x4' | '4x6' | '5x5'

function App() {
  const [image, setImage] = useState<string | null>(null)
  const [frame, setFrame] = useState<FrameType>('wood')
  const [size, setSize] = useState<SizeType>('6x4')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Create Your Custom Frame</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ImageUpload image={image} setImage={setImage} />
            <FrameSelector frame={frame} setFrame={setFrame} />
            <SizeSelector size={size} setSize={setSize} />
          </div>
          <Preview image={image} frame={frame} size={size} />
        </div>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={!image}
        >
          Order Now
        </button>
      </div>
    </div>
  )
}

export default App
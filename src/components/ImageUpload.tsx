import React from 'react'
import { Upload } from 'lucide-react'

interface ImageUploadProps {
  image: string | null
  setImage: (image: string | null) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Upload Your Photo</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        {image ? (
          <img src={image} alt="Uploaded" className="max-w-full h-auto mb-4" />
        ) : (
          <Upload className="mx-auto mb-2" size={48} />
        )}
        <label className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          {image ? 'Change Photo' : 'Upload Photo'}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  )
}

export default ImageUpload
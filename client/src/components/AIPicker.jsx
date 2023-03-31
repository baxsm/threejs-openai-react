import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImage, handleSubmit}) => {
  return (
    <div className="aipicker-container">
      <textarea 
        className='aipicker-textarea'
        placeholder='Ask AI...'
        value={prompt}
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {
          generatingImage ? (
            <CustomButton
              type="outline"
              title="Asking AI..."
              customStyles="text-xs"
            />
          ) : (
            <>
              <CustomButton 
                type="outline"
                title="AI Logo"
                handleClick={() => handleSubmit('logo')}
                customStyles="text-xs py-1.5"
              />
              <CustomButton 
                type="filled"
                title="AI Full"
                handleClick={() => handleSubmit('full')}
                customStyles="text-xs py-1.5"
              />
            </>
          )
        }
      </div>
    </div>
  )
}

export default AIPicker

import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#CFC0BD',
          '#0F0F0F',
          '#F49D37',
          '#B388EB',
          '#262626',
          '#4C061D',
          '#9CFC97',
          '#6F9CEB',
          '#72DDF7',
          '#F6BDD1',
          '#F22B29',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker

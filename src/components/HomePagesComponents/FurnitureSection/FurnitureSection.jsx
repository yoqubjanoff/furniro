import React from 'react'
import { FurnitureStyle } from './style'

const FurnitureSection = () => {
  return (
    <FurnitureStyle>
        <FurnitureStyle.Container>
            <FurnitureStyle.TextBox >
                <FurnitureStyle.Desc>Share your setup with</FurnitureStyle.Desc>
                <FurnitureStyle.Title>#FuniroFurniture</FurnitureStyle.Title>
            </FurnitureStyle.TextBox>
        </FurnitureStyle.Container>
    </FurnitureStyle>
  )
}

export default FurnitureSection
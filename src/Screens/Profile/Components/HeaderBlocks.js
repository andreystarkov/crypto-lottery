import React from 'react'
import { Block, BlockTitle, BlockValue, BlockCurrency, Img, BlockRow, BlockCol, BlockColImage } from './HeaderBlocksStyles'
import { Images } from 'Themes'

export const ValueBlock = ({ title, currency, value, icon }) => (
  <Block>
    <BlockTitle>{title}</BlockTitle>
    <BlockRow>
      <BlockCol>
        <BlockValue>{value}</BlockValue>
        <BlockCurrency>{currency}</BlockCurrency>
      </BlockCol>
      <BlockColImage>
        <Img src={Images.icons[icon]} />
      </BlockColImage>
    </BlockRow>
  </Block>
)

export default ValueBlock

import React from 'react'
import styled from 'styled-components'

import { Colors, Images } from 'Themes'
import { transactionUrl } from 'Utils/Eth'

import { media } from 'Utils/Media'

export const linkStyle = { color: '#fff', textDecoration: 'underline' }

export const TabsContainer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  background-color: ${Colors.menuBlue};
  border-radius: 4px;
`

export const ScreenTitle = styled.div`
  display: block;
  color: ${Colors.white};
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1.8rem;
`

export const FlatBox = styled.h1`
  border-radius: 4px;
  background-color: ${Colors.menuBlue};
  padding-top: ${props => props.paddingTop || 'auto'};
  padding-bottom: ${props => props.paddingBottom || 'auto'};
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}
  ${props => props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `}
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
`

export const Content = styled.div`
  padding: 1.5rem 1.2rem;
  ${props => props.paddingBottom && `
    padding-bottom: ${props.paddingBottom}
  `};
`

export const BlueLink = styled.a`
  text-decoration: none;
  color: ${Colors.lightBlue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${props => props.width || '8rem'};
  display: ${props => props.display || 'block'};
`

export const BlueText = styled.span`
  text-decoration: none;
  color: ${Colors.lightBlue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${props => props.width || '8rem'};
  display: ${props => props.display || 'block'};
`

export const TxBlueLink = styled(BlueLink)`
  display: inline-block;
`

export const TxLink = ({ hash, ...etc }) => (
  <BlueLink
    href={transactionUrl(hash)}
    display='inline-block'
    target='_blank'
    {...etc}>
    {hash}
  </BlueLink>
)

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}
  ${props => props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `}
`

export const FlexHalf = styled.div`
  display: flex;
  width: 50%;
  align-self: stretch;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}
  ${props => props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `}
`

export const ScreenBackground = styled.div`
    background-image: url(${Images.mainIllustration});
    background-position: top -11rem center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
`

export const ScreenWrapper = styled.div`
  position: relative;
  background-color: ${props => props.backgroundColor || Colors.darkestBlue};
  ${props => props.illustration && `
    background-image: url(${Images.mainIllustration});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  `}
  min-height: 100vh;
  width: 100%;
`

export const BackgroundIllustration = styled.div`
  background-image: url(${props => props.name ? Images.illustrations[props.name] : Images.illustrations.main});
  background-position: top -14em center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  animation-duration: 1s;
  animation-delay: 0.2s;
  height: 55rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`

export const Underline = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  width: 1179px;
  margin: 0 auto;
`

export const SectionHeaderCenter = styled.div`
  position: relative;
  z-index: 1;
`

export const SectionHeaderCenterContent = styled.div`
  padding-left: 17rem;
  padding-right: 17rem;



  padding-top: 10rem;
  padding-bottom: 4rem;

  ${media.lessThan('sm')`
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  `}

    ${media.lessThan('xs')`
    padding-top: 7rem;
    padding-bottom: 2.5rem;
    padding-left: 2.75rem;
    padding-right: 2.75rem;
  `}
`

export const HeaderText1 = styled.h1`
  color: #fff;
  font-weight: 500;
  text-align: center;
  font-size: 2.8rem;
  margin: 0;
  margin-bottom: 1rem;
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}

  ${media.lessThan('sm')`
    font-size: 2.5rem;
    line-height: 3.125rem;
  `}

  ${media.lessThan('xs')`
    font-size: 1.875rem;
    line-height: 2.5rem;
  `}
`

export const AfterHeader = styled.h1`
  color: #fff;
  font-weight: 500;
  text-align: center;
  font-size: 1.4rem;
  margin:0;
  ${props => props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `}

  ${media.lessThan('xs')`
    font-size:1.1rem;
  `}
`

export const RoundBox = styled.h1`
  border-radius: 8rem;
  background-color: ${Colors.menuBlue};
  padding: 1.3rem 1px;
  padding-left: 2.8rem;
`

export const SvgIcon = styled.div`
  display: inline-block;
  ${props => props.width ? `
    width: ${props.width};
  ` : ''}
  ${props => props.height ? `
    height: ${props.height};
  ` : ''}
`

export const SectionWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop || '4rem'};
  z-index: 1;

  ${media.lessThan('xs')`
    margin-top: ${props => props.marginTop || '1.5rem'};
  `}
`

export const SectionHeader = styled.h3`
  color: #fff;
  font-weight: 400;
  ${props => props.fontSize ? `
    font-size: ${props.fontSize};
  ` : `
    font-size: 1.35rem;
  `}
  text-align: left;
  align-self: left;
`

export const SectionDivider = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  height: 1px;
  width: 100%;
  background-color: ${Colors.white};
  opacity: 0.5;
`

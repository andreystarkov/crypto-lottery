import styled, { keyframes } from 'styled-components'
import { Colors, Images, Gradients } from 'Themes'
import GradientButton from '../GradientButton'

import { media } from 'Utils/Media'

const rotate180 = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-180deg);
  }
`

export const CloseButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: url(${Images.modal.close}) center center no-repeat;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  z-index: 6;
  transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.1);
  }
`

export const BackButton = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 4rem;
  background: url(${Images.icons.angleLeft}) left 0.61rem center no-repeat;
  position: absolute;
  left: 1.3rem;
  top: 1.3rem;
  cursor: pointer;
  z-index: 6;
  background-color: rgba(255, 255, 255, 0.04);
  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const Title = styled.span`
  text-align: center;
  display: block;
  color: ${Colors.white};
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  ${media.lessThan('sm')`
    font-size: 1.3rem;
  `};
`

export const SecondTitle = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  line-height: 1.5rem;
  color: ${Colors.white};
  text-transform: uppercase;
  text-align: center;
`

export const ModalContainer = styled.div`
  width: ${props => props.width || '30rem'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '1rem 4rem 3rem 4rem'};
  background-color: ${Colors.menuBlue};
  transition: all 0.35s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  border-radius: 6px;
  position: relative;
  box-shadow: 0 3rem 14rem rgba(0, 0, 0, 0.15);
  ${media.lessThan('sm')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 1rem 2rem 2rem 2rem;
  `};
`

export const SubTitle = styled.span`
  text-align: center;
  display: block;
  color: ${Colors.purpleGrey};
  font-size: 0.9rem;
  line-height: 1.31rem;
  font-weight: 600;
  word-wrap: break-word;
`

export const Icon = styled.div`
  margin: 0rem auto;
  margin-top: 1rem;
  width: 3rem;
  height: 3rem;
  background: url(${props => props.name && Images.modal[props.name]}) center
    center no-repeat;
`

export const Textarea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.08);
  padding: 1.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.color || Colors.purpleGrey};
  border-radius: 6px;
  border: none;
  width: 100%;
  outline: none;
  resize: ${props => props.resize || 'none'};
  min-height: 6rem;
`

export const ModalButton = styled(GradientButton)`
  border-radius: 6px;
  width: 100%;
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 1rem;
  animation-delay: ${props => props.delay || '0s'} !important;
  text-align: center;
  color: ${Colors.white};
  margin-top: 1.5rem;
`

export const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 2.625rem;
  margin-bottom: 1rem;
  background-image: url(${props => props.name && Images.icons[props.name]});
  background-size: auto 100%;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    width: calc(50% - 2.7rem);
    background-color: ${Colors.grey1};
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 2px;
    width: calc(50% - 2.7rem);
    background-color: ${Colors.grey1};
    transform: translateY(-50%);
  }
`

export const TicketsResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.625rem 0;

  & > ${SubTitle} {
    max-width: 17.5rem;
    margin: 0 auto;
  }
`

export const Preloader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  margin: 1.5rem auto 0;
  background-image: ${Gradients.blue};
  border-radius: 50%;
  opacity: 0.7;

  .refresh-icon {
    width: 1rem;
    height: 1rem;
    fill: ${Colors.white};
    animation: ${rotate180} 1s infinite ease-in-out;
  }
`

export const TransactionTxText = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  color: ${Colors.white};
  text-transform: uppercase;
`

export const TransactionTimer = styled.span`
  display: inline-block;
  font-size: 1.6rem;
  color: ${Colors.white};
  text-transform: uppercase;
`

export const EpicWinBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WinWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WinContent = styled.div`
  margin: 0 auto;
  margin-top: 9rem;
  width: 20rem;
`

export const WinHead = styled.span`
  display: block;
  margin: 1rem auto;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${Colors.white};
  text-align: center;
  margin-bottom: 0.4rem;
`

export const WinText = styled.span`
  color: ${Colors.orange};
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
  margin: 0rem auto;
  text-align: center;
`

export const WinValue = styled.span`
  color: ${Colors.orange};
  font-size: 2rem;
  font-weight: 600;
  display: block;
  margin: 1rem auto;
  text-align: center;
`

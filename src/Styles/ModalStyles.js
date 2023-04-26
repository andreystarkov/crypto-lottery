
// import React from 'react'
import styled from 'styled-components'
import { Colors, Images } from 'Themes'
import GradientButton from '../GradientButton'

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
  background-color: rgba(255,255,255,0.04);
  transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover {
    background-color: rgba(255,255,255,0.1);
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
`

export const ModalContainer = styled.div`
  width: ${props => props.width || '30rem'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '1rem 4rem 3rem 4rem'};
  background-color: ${Colors.menuBlue};
  transition: all 0.35s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  border-radius: 6px;
  position: relative;
  box-shadow: 0 3rem 14rem rgba(0,0,0,0.15);
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
  background: url(${props => props.name && Images.modal[props.name]}) center center no-repeat;
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

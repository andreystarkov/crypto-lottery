import React from 'react'
import styled from 'styled-components'

import { Colors, Images } from 'Themes'

export const InputRound = styled.input`
  outline: none;
  display: block;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 1rem 1.2rem;
  font-size: 0.9rem;
  width: 100%;
  color: ${Colors.purpleGrey};
  border: none;
  border-radius: 2rem;
  transition: background-color 0.5s cubic-bezier(0.675, 0.82, 0.565, 1), color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.purpleGrey};
  }
`

export const Checkbox = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  cursor: pointer;
  background-position: center center;
  background-size: 60% 60%;
  background-color: rgba(255,255,255,0.15);
  transition: background-image 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86), background-color 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
  ${props => props.checked && `
    background-image: url(${Images.check});
    background-color: ${Colors.lightBlue};
  `}
  &:hover {
    background-image: url(${Images.check});
    background-color: rgba(255,255,255,0.25);
  }
`

export const RoundInput = (props) => <InputRound type='text' {...props} />

export const BasicInput = styled.input`
  display: block;
  width: 100%;
  color: ${Colors.white};
  border: none;
  box-shadow: none;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
  transition: background-color 0.5s cubic-bezier(0.675, 0.82, 0.565, 1),
    color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.16);
  }
`

export const MaterialWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.125rem;

  &:first-child {
    margin-top: 0;
  }
`
export const MaterialLabel = styled.label`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${Colors.purpleGrey};
  transition: transform 0.2s ease-in;
  cursor: text;
`

export const MaterialInput = styled.input`
  display: block;
  width: 100%;
  padding: 1.25rem 1.25rem 0.25rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${Colors.white};
  background-color: rgba(255, 255, 255, 0.08);
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  transition: background-color 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  &:focus,
  &:valid {
    background-color: rgba(255, 255, 255, 0.15);
    & + ${MaterialLabel} {
      transform: scale(0.85) translate(-0.62rem, -1.7rem);
    }
  }

  ${props =>
    props.top
      ? `
    border-radius: 0.375rem 0.375rem 0 0;
  `
      : ''};
  ${props =>
    props.bottom
      ? `
    border-radius: 0 0 0.375rem 0.375rem;
  `
      : ''};

  ${props =>
    props.disabled
      ? `
    pointer-events: none;
    opacity: 0.7;
    cursor: default;
  `
      : ''};
`

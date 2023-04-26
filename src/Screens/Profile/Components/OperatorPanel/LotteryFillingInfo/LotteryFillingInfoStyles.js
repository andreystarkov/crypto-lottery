import styled from 'styled-components'

import { Row, Col } from 'react-styled-flexboxgrid'

import { BasicInput } from 'Styles/Inputs'

import { Footer } from 'Styles/OperatorPanelStyles'

import { Colors } from 'Themes'

import { media } from 'Utils/Media'

export const FormWrapper = styled.ul`
  display: block;
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
  ${media.lessThan('sm')`
    max-width: 18.75rem;
    margin: 1.75rem auto 0;
  `};
`

export const FormRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }

  ${media.lessThan('sm')`
    flex-direction: column;
    justify-content: flex-start;
  `};
`

export const FormTitle = styled.div`
  display: flex;
  align-items: center;
`

export const FormInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 55%;
  margin-left: 1rem;
  padding: 0 1.5625rem;
  box-sizing: border-box;

  ${media.lessThan('sm')`
    width: 100%;
    margin-left: 0;
    margin-top: 0.3125rem;
  `};
`

export const FormInput = styled(BasicInput)`
  padding: 0.25rem 0.625rem;
  font-size: 1rem;
  line-height: 2rem;
  text-align: right;
`

export const ButtonWrapper = styled(Row)`
  width: 30.25rem;

  ${media.lessThan('xs')`
    flex-wrap: wrap;
    justify-content: center;
  `};

  & > .__react_component_tooltip.type-dark {
    max-width: 15rem;
  }
`

export const ButtonCol = styled(Col)`
  margin-bottom: 1rem;

  ${media.lessThan('xs')`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    min-width: 10.9375rem;
  `};
`

export const MinusButton = styled.a`
  position: absolute;
  left: 0;
  top: 50%;
  width: 1rem;
  height: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  ${props =>
    props.disabled
      ? `
    pointer-events: none;
    opacity: 0.5;
  `
      : ''};

  & .minus-icon {
    display: block;
    width: 100%;
    height: 100%;
    fill: ${Colors.purpleGrey};
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    & .minus-icon {
      fill: ${Colors.lightBlue};
    }
  }

  &:active {
    & .minus-icon {
      fill: ${Colors.blue};
    }
  }
`

export const PlusButton = styled.a`
  position: absolute;
  right: 0;
  top: 50%;
  width: 1rem;
  height: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  ${props =>
    props.disabled
      ? `
    pointer-events: none;
    opacity: 0.5;
  `
      : ''};

  & .plus-icon {
    display: block;
    width: 100%;
    height: 100%;
    fill: ${Colors.purpleGrey};
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    & .plus-icon {
      fill: ${Colors.lightBlue};
    }
  }

  &:active {
    & .plus-icon {
      fill: ${Colors.blue};
    }
  }
`

export const SingleInput = styled(FormInput)`
  width: calc(
    (100% / ${props => props.width}) -
      (0.3125rem / (${props => props.width} - 1))
  );
  margin: 0 0.3125rem 0 0;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  text-align: center;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const FooterWrapper = styled(Footer)`
  padding: 2rem 0 1rem;

  ${media.lessThan('sm')`
    padding: 1.75rem 0 0.75rem;
  `}
`

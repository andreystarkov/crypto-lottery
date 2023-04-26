import React from 'react'
import styled from 'styled-components'
import { media } from 'Utils/Media'
import { Row } from 'react-styled-flexboxgrid'
import { Colors, Images } from 'Themes'

export const DrawDescText = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${Colors.purpleGrey};
  text-align: left;
`

export const Head3 = styled.h2`
  display: block;
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: ${Colors.white};
  text-align: left;

  ${media.lessThan('xs')`
    font-size: 1.625rem;
    font-weight: 400;
  `}
`

export const MobileRow = styled(Row)`
  justify-content: space-between;
  align-items: flex-end;
  ${media.lessThan('xs')`
    flex-wrap: nowrap;
  `}
`

export const TabletRow = styled(MobileRow)`
  ${media.greaterThan('md')`
    display: none;
  `}

  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.05);

  .btn-clear-all {
    padding: 0.65rem 0;

    &:hover {
      border: none;
    }
  }

  .btn-fill-all {
    border: 0.125rem solid #313152;
  }

  align-items: center;

  ${media.lessThan('xs')`
    justify-content: space-between;
    margin-bottom: 0;
  `}
`

export const QuestionText = styled.span`
  @media (max-width: 320.98px) {
    display:none;
  }
`

export const EraseIcon = (props) => <img src={Images.icons.eraseSmall} {...props} />
export const RandomIcon = (props) => <img src={Images.icons.diceSmall} {...props} />
export const QuestionIcon = (props) => <img src={Images.icons.question} {...props} />

import styled, { css } from 'styled-components'
import { media } from 'Utils/Media'

export const HideWrapper = styled.div`
  ${media.lessThan('lg')`
    overflow:hidden;
    position: relative;
    width: ${props => props.width || '100%'};

    &::after {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 7.75rem;
      height: 100%;
      background-image: linear-gradient(to right, rgba(26, 26, 61, 0) 0%, #1a1a3d 100%);
    }
  `}

  ${media.between('xs', 'sm')`
    &::after {
      display: none;
    }
  `}
`

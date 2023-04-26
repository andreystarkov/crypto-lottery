import styled from 'styled-components'

import { media } from 'Utils/Media'

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan('sm')`
    justify-content: center;
  `};
`

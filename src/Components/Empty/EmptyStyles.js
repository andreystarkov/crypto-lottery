import styled from 'styled-components'

import { P, H3 } from 'Styles/Typography'
import { Colors } from 'Themes'

export const PlaceholderContainer = styled.div`
  display: flex;
  padding: 5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled(H3)`
  font-weight: 400;
  text-align: center;
  display: block;
  color: ${Colors.white};
  margin-bottom: 1.5rem;
`

export const Text = styled(P)`
  font-weight: 400;
  text-align: center;
  color: ${Colors.text1};
  margin-bottom: 1.4rem;
  text-align: center;
`

import styled from 'styled-components'
import { Colors } from 'Themes'

export const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: ${Colors.menuBlue}
`

export const ProgressLine = styled.div`
  width: ${props => props.width || '100%'};
  height: 4px;
  border-radius: 4px;
  background-image: linear-gradient(135deg, #0091f8 0%, #6942ef 100%);
`

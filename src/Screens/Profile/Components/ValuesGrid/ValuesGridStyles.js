import styled from 'styled-components'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { Colors } from 'Themes'
import { media } from 'Utils/Media'

export const ProfileTabs = styled(Grid)`
  margin-top: 1.5rem;
  padding-top: 1rem;
  background-color: ${Colors.menuBlue};
  border-radius: 4px;
`

export const CustomSlider = styled.div`
  .slick-list {
    margin-right: -0.75rem;
    margin-left: -0.75rem;

    ${media.lessThan(`xs`)`
      margin-right: -1rem;
      margin-left: -1rem;
    `}
  }

  .slick-dots {
    list-style: none;
    padding: 0;
    > li {
      display: inline-block;
      margin-right: 0.625rem;

      button {
        text-indent: -9999px;
        width: 1.25rem;
        border: none;
        border-bottom: 2px solid ${Colors.grey1};
        outline: none;
        line-height: 2px;
      }

      &.slick-active {
        button {
          border-color: ${Colors.lightBlue};
        }
      }

    }
  }
`

export const SliderItem = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`

export const ValuesRow = styled(Row)`
  margin: -0.75rem;
`

export const ValuesCol = styled(Col)`
  padding: 0.75rem;
`

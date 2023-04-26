import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-styled-flexboxgrid'

const ColumnWrap = ({ children, ...etc }) => (
  <Col {...etc}>{children}</Col>
)

export const Column = styled(ColumnWrap)`
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
  `

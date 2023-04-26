import React, { Component } from 'react'

import { Table, Tbody, Tr, Thead } from 'Styles/TableStyles'
import {
  TableCell,
  TableHead,
  Balls,
  GrandPrize,
  Yellow,
  Blue
} from 'Styles/RulesStyles'

import { Colors } from 'Themes'
import l from 'Intl'

const convert = size => {
  let measure = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  const DIVIDER = 1000
  var exp = Math.floor(Math.log(size) / Math.log(DIVIDER))
  return (size / Math.pow(DIVIDER, exp)).toFixed(0) + '' + measure[exp]
}

export default class RulesTable extends Component {
  getValuesRow = id => {
    const { tickets } = this.props
    const { dataPrize, dataPowerPlay } = tickets
    const getValues = (e, i) =>
      i === 0
        ? dataPrize[id]
        : id === 50
          ? dataPrize[id] * 2
          : dataPrize[id] * dataPowerPlay[i]
    const values = [...new Array(6)].map(getValues)
    return dataPrize[id] ? values : false
  }
  getPrizes = () => {
    const { tickets } = this.props
    const { dataPrize } = tickets
    return Object.keys(dataPrize).map((key, index) => this.getValuesRow(key))
  }
  renderRow = id => {
    const values = this.getValuesRow(id)
    return values && values.map(this.renderCell)
  }
  renderCell = (value, index) => {
    return (
      <TableCell key={`cell-${index}`}>
        {convert(parseInt(value))} BET
      </TableCell>
    )
  }
  render () {
    return (
      <Table>
        <Tbody>
          <Thead full background={Colors.menuBlue}>
            <TableHead width='22rem'>{l.t('profile.draw')}</TableHead>
            <TableHead>{l.t('profile.prize')}</TableHead>
            <TableHead>2x</TableHead>
            <TableHead>3x</TableHead>
            <TableHead>4x</TableHead>
            <TableHead>5x</TableHead>
            <TableHead>10x</TableHead>
          </Thead>
          <Tr background={Colors.menuBlue}>
            <TableCell colSpan='1'>
              <Balls>
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Yellow />
              </Balls>
            </TableCell>
            <TableCell colSpan='6' style={{ textAlign: 'center' }}>
              <GrandPrize>{l.t('rules.txt13')}</GrandPrize>
            </TableCell>
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Yellow no />
              </Balls>
            </TableCell>
            {this.renderRow(50)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Yellow />
              </Balls>
            </TableCell>
            {this.renderRow(41)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue />
                <Blue />
                <Blue />
                <Blue />
                <Yellow no />
              </Balls>
            </TableCell>
            {this.renderRow(40)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue no />
                <Blue />
                <Blue />
                <Blue />
                <Yellow />
              </Balls>
            </TableCell>
            {this.renderRow(31)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue no />
                <Blue />
                <Blue />
                <Blue />
                <Yellow no />
              </Balls>
            </TableCell>
            {this.renderRow(30)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue no />
                <Blue no />
                <Blue />
                <Blue />
                <Yellow />
              </Balls>
            </TableCell>
            {this.renderRow(21)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue no />
                <Blue no />
                <Blue no />
                <Blue />
                <Yellow />
              </Balls>
            </TableCell>
            {this.renderRow(11)}
          </Tr>
          <Tr background={Colors.menuBlue}>
            <TableCell>
              <Balls>
                <Blue no />
                <Blue no />
                <Blue no />
                <Blue no />
                <Blue no />
                <Yellow />
              </Balls>
            </TableCell>
            {this.renderRow(1)}
          </Tr>
        </Tbody>
      </Table>
    )
  }
}

import React, { Component } from 'react'
import { Tab, TabsContainer, TabContent, TabCount } from './TabsStyles'

export default class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: props.initialIndex || 0
    }
  }
  selectTab = index => {
    const { onTabChange } = this.props
    if (onTabChange) onTabChange(index)
    this.setState({ selected: index })
  }
  renderTab = ({ name, count }, index) => {
    const { selected } = this.state
    return (
      <Tab
        key={index}
        onClick={() => this.selectTab(index)}
        active={index === selected}>
        {name}
        {count && <TabCount>{count}</TabCount>}
      </Tab>
    )
  }
  renderSelected = () => {
    const { tabs } = this.props
    const { selected } = this.state
    const selectedTab = tabs[selected].content
    return selectedTab
  }
  render () {
    const { tabs } = this.props

    return (
      <div>
        <TabsContainer>{tabs.map(this.renderTab)}</TabsContainer>
        <TabContent>{this.renderSelected()}</TabContent>
      </div>
    )
  }
}

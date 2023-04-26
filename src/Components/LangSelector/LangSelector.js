import React, { Component } from 'react'
import l from 'Intl'
import {
  LanguageSelectorWrapper,
  CurrentLanguage,
  LanguageSelectorContent,
  LanguageListWrapper,
  LanguageItem
} from './LangSelectorStyles'

class LanguageList extends Component {
  renderItem = (item, key) => {
    const { change } = this.props
    return (
      <LanguageItem
        onClick={e => {
          change(item)
        }}
        key={key}>
        {item}
      </LanguageItem>
    )
  }

  noCurrent = item => {
    return item !== this.props.selected
  }

  render () {
    const { languages, show } = this.props
    return (
      <LanguageListWrapper show={show}>
        {languages.filter(this.noCurrent).map(this.renderItem)}
      </LanguageListWrapper>
    )
  }
}

export default class LangSelector extends Component {
  constructor (props) {
    super(props)

    this.state = { selected: l.language, show: false }
  }

  toggleList = e => {
    this.setState({ show: !this.state.show })
  }

  onChange = lang => {
    this.setState({ selected: lang, show: false })

    l.changeLanguage(lang, err => {
      if (err) return console.error('something went wrong loading', err)
    })
  }

  render () {
    return (
      <LanguageSelectorWrapper>
        <LanguageSelectorContent>
          <CurrentLanguage onClick={this.toggleList} {...this.state} />
          <LanguageList
            change={this.onChange}
            languages={['en', 'ru']}
            {...this.state}
          />
        </LanguageSelectorContent>
      </LanguageSelectorWrapper>
    )
  }
}

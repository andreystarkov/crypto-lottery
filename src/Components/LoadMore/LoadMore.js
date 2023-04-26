import React, { Component } from 'react'
import { Progress } from 'Components'

import { percentage } from 'Utils'

import { LoadMoreContainer, TotalText, ProgressContainer, ButtonContainer, MoreButton } from './LoadMoreStyles'
import l from 'Intl'

export default class LoadMore extends Component {
  onMore = () => {
    const { onMore, limit, total, name, field } = this.props
    if (onMore) onMore({ limit, total, name, field })
  }
  render () {
    const { limit, loading, total, name } = this.props
    const isLoaded = limit >= total
    const percents = isLoaded ? 100 : percentage(limit, total)
    return (
      total > 0 && <LoadMoreContainer>
        <TotalText>{l.t('profile.viewed')} {isLoaded ? 'all' : limit} {l.t('profile.of')} {!isLoaded && total} {name}</TotalText>
        <ProgressContainer>
          <Progress percents={percents} />
        </ProgressContainer>
        {!isLoaded && <ButtonContainer>
          <MoreButton
            disabled={loading}
            loading={loading}
            onClick={this.onMore}>
            {loading ? l.t('profile.loading') : l.t('profile.loadmore')}
          </MoreButton>
        </ButtonContainer>}
      </LoadMoreContainer>
    )
  }
}

import { Game, Main, Profile, Terms, Privacy, About, Rules, Results, Transactions, RecentDraws } from 'Screens'
import l from 'Intl'
const routes = [
  {
    path: '/',
    name: l.t('main.routes.home'),
    exact: true,
    component: Main
  },
  {
    path: '/tickets',
    name: l.t('main.routes.getTickets'),
    component: Game
  },
  {
    path: '/results',
    name: l.t('main.routes.results'),
    component: Results
  },
  {
    path: '/transactions',
    name: l.t('main.routes.transactions'),
    component: Transactions
  },
  {
    path: '/about',
    name: l.t('main.routes.aboutUs'),
    component: About,
    footer: true
  },
  {
    path: '/terms',
    name: l.t('main.routes.termsOfUse'),
    component: Terms,
    footer: true
  },
  {
    path: '/privacy',
    name: l.t('main.routes.privacyPolicy'),
    component: Privacy,
    footer: true
  },
  {
    path: '/rules',
    name: l.t('main.routes.gameRules'),
    component: Rules,
    hidden: false,
    footer: true
  },
  {
    path: '/profile',
    name: l.t('main.routes.profile'),
    component: Profile,
    private: true
    // hidden: true
  },
  {
    path: '/recentdraws',
    name: l.t('main.routes.recentDraws'),
    component: RecentDraws,
    private: true,
    hidden: true
  }
]

export default routes

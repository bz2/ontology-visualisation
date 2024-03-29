import { useRef } from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Button } from 'primereact/button'
import { OverlayPanel } from 'primereact/overlaypanel'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/logo.png'
import logout from '../utils/auth/logout'
import actions from '../store/actions'
import {
  ROUTE_SEARCH, ROUTE_LOGIN, ROUTE_PROFILE, ROUTE_LISTING, ROUTE_INDEX
} from '../constants/routes'
import { OPERATION_TYPE_UPDATE } from '../constants/store'
import { SIDEBAR_VIEW_ENTRY_SEARCH } from '../constants/views'
import { APP_NAME } from '../constants/app'

const HeaderComponent = ({
  activeLoaders,
  updateStoreValue,
  user
}) => {
  const overlay = useRef(null)
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <header>
      <div className="header-left">
        {
          activeLoaders > 0 && (
            <div className="loader-box">
              <ProgressSpinner
                className="spinner"
                strokeWidth="4"
              />
            </div>
          )
        }
        <Link
          href={ROUTE_INDEX}
        >
          <a>
            <div className="logo">
              <img
                src={logo}
                alt={APP_NAME}
              />
            </div>
          </a>
        </Link>
      </div>

      <div className="header-right">
        <Button
          aria-label="overlay-menu-button"
          type="button"
          icon="pi pi-align-justify"
          id="overlay-menu-button"
          onClick={(e) => overlay.current.toggle(e)}
        />

        <OverlayPanel ref={overlay}>
          <Button
            aria-label={t('home')}
            icon="pi pi-home"
            iconPos="right"
            label={t('home')}
            id="overlay-menu-home"
            className="p-button-secondary"
            onClick={() => router.push(ROUTE_LISTING)}
          />
          {
            router.asPath === ROUTE_PROFILE ? (
              <Button
                aria-label={t('search')}
                icon="pi pi-search"
                iconPos="right"
                label={t('search')}
                id="overlay-menu-search"
                className="p-button-secondary"
                onClick={() => {
                  updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_ENTRY_SEARCH)
                  router.push(ROUTE_SEARCH)
                }}
              />
            ) : (
              <Button
                aria-label={t('profile')}
                icon="pi pi-user"
                iconPos="right"
                id="overlay-menu-profile"
                label={t('profile')}
                className="p-button-secondary"
                onClick={() => router.push(ROUTE_PROFILE)}
              />
            )
          }
          {
            user.isGuest ? (
              <Button
                aria-label={t('signIn')}
                icon="pi pi-sign-in"
                iconPos="right"
                id="overlay-menu-login"
                className="p-button-secondary"
                label={t('signIn')}
                onClick={() => router.push(ROUTE_LOGIN)}
              />
            ) : (
              <Button
                aria-label={t('signOut')}
                icon="pi pi-sign-out"
                iconPos="right"
                id="overlay-menu-logout"
                className="p-button-secondary"
                label={t('signOut')}
                onClick={() => logout({
                  router,
                  updateStoreValue
                })}
              />
            )
          }

        </OverlayPanel>
      </div>
    </header>
  )
}

HeaderComponent.propTypes = {
  activeLoaders: PropTypes.number.isRequired,
  updateStoreValue: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
}

const mapToProps = ({
  activeLoaders,
  user
}) => ({
  activeLoaders,
  user
})

export default connect(
  mapToProps,
  actions
)(HeaderComponent)

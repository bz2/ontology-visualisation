import React from 'react'
import { connect } from 'redux-zero/react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  SiAtom,
} from 'react-icons/si'
import actions from '../store/actions'

const FooterComponent = ({
  setStoreState,
  isSettingsOpen,
  availableEdges,
}) => {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="footer-left">
        <span>
          {`${t('edges')}: ${availableEdges.length}`}
        </span>
      </div>

      <div className="footer-right">
        <button
          type="button"
          title={t(isSettingsOpen ? 'hidePhysicsSettings' : 'showPhysicsSettings')}
          className={isSettingsOpen ? 'footer-right-button-selected' : ''}
          onClick={() => setStoreState('isSettingsOpen', !isSettingsOpen)}
        >
          <SiAtom />
        </button>
      </div>
    </footer>
  )
}

FooterComponent.propTypes = {
  isSettingsOpen: PropTypes.bool.isRequired,
  setStoreState: PropTypes.func.isRequired,
  availableEdges: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

const mapToProps = ({
  isSettingsOpen,
  availableEdges,
}) => ({
  isSettingsOpen,
  availableEdges,
})

export default connect(
  mapToProps,
  actions
)(FooterComponent)

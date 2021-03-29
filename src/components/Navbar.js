import React from 'react'
import { connect } from 'redux-zero/react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  BsFillCircleFill,
  BsSearch,
  BsArrowUpRight
} from 'react-icons/bs'
import { useRouter } from 'next/router'
import actions from '../store/actions'
import { ROUTE_SEARCH } from '../constants/routes'

const Navbar = ({
  availableNodesCount,
  availableEdgesCount,
  entrySearchResults
}) => {
  const { t } = useTranslation()

  const router = useRouter()

  const { view } = router.query

  return (
    <nav>
      <div className="nav-left">
        {
          view === ROUTE_SEARCH ? (
            <span>
              <BsSearch className="nodes-icon node m-r-5" />
              {`${t('searchResults')}: ${entrySearchResults.length}`}
            </span>
          ) : (
            <span>
              <BsFillCircleFill className="nodes-icon node m-r-5" />
              {`${t('nodes')}: ${availableNodesCount}`}
              <span className="m-l-5 m-r-5">|</span>
              <BsArrowUpRight className="nodes-icon edge" />
              {`${t('edges')}: ${availableEdgesCount}`}
            </span>
          )
        }
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  availableNodesCount: PropTypes.number.isRequired,
  availableEdgesCount: PropTypes.number.isRequired,
  entrySearchResults: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

const mapToProps = ({
  availableNodesCount,
  availableEdgesCount,
  entrySearchResults
}) => ({
  availableNodesCount,
  availableEdgesCount,
  entrySearchResults
})

export default connect(
  mapToProps,
  actions
)(Navbar)

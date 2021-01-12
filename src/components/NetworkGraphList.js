import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  BsChevronRight,
} from 'react-icons/bs'
import {
  ImCross
} from 'react-icons/im'
import actions from '../store/actions'

const NetworkGraphList = ({
  setStoreState,
  removeFromObject,
  currentGraph,
  graphData
}) => {
  const { t } = useTranslation()

  const graphViewsKeys = Object.keys(graphData)

  return (
    <div className="network-graph-list">
      {
        graphViewsKeys.map((graphViewsKey) => {
          const { label, noDelete } = graphData[graphViewsKey]

          return (
            <div
              className={`network-graph-list-row ${currentGraph === graphViewsKey ? 'network-graph-list-row-selected' : ''}`}
              key={`selected-node-row-${graphViewsKey}`}
            >
              <div className="network-graph-list-row-delete">
                {
                  !noDelete && (
                  <button
                    type="button"
                    title={t('removeSelectedNode')}
                    onClick={() => {
                      setStoreState('currentGraph', 'graph-0')
                      removeFromObject('graphData', graphViewsKey)
                    }}
                  >
                    <ImCross />
                  </button>
                  )
                }
              </div>

              <div className="network-graph-list-row-main">
                <button
                  type="button"
                  title={t('viewNode')}
                  disabled={currentGraph === graphViewsKey}
                  onClick={() => setStoreState('currentGraph', graphViewsKey)}
                >
                  <span>
                    {label}
                  </span>
                  <BsChevronRight />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

NetworkGraphList.propTypes = {
  setStoreState: PropTypes.func.isRequired,
  graphData: PropTypes.shape().isRequired,
  removeFromObject: PropTypes.func.isRequired,
  currentGraph: PropTypes.string.isRequired,
}

const mapToProps = ({
  graphData,
  currentGraph
}) => ({
  graphData,
  currentGraph
})

export default connect(
  mapToProps,
  actions
)(NetworkGraphList)

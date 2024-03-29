/* eslint max-len:0 */
import { useEffect, useRef } from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import actions from '../store/actions'
import setNodesIdsToDisplay from '../utils/graphVisualisation/setNodesIdsToDisplay'
import GraphContextMenu from './GraphContextMenu'
import setNetwork from '../utils/graphVisualisation/setNetwork'
import setNetworkMethods from '../utils/graphVisualisation/setNetworkMethods'
import getPhysicsOptions from '../utils/graphVisualisation/getPhysicsOptions'
import addNodesToGraph from '../utils/graphVisualisation/addNodesToGraph'
import {
  NETWORK_VIEW_DATATABLE, NETWORK_VIEW_GRAPH, SIDEBAR_VIEW_ENTRY_SEARCH, SIDEBAR_VIEW_GRAPHS
} from '../constants/views'

const GraphVisualisation = ({
  currentGraph,
  showContextMenu,
  isBoundingBoxSelectable,
  boundingBoxGeometry,
  availableNodes,
  availableEdges,
  network,
  nodesIdsToDisplay,
  physicsHierarchicalView,
  physicsRepulsion,
  isPhysicsOn,
  globalEdgeStyling,
  updateStoreValue,
  sidebarView,
  networkVisualisation
}) => {
  const { t } = useTranslation()
  const isInitialMountNetwork = useRef(true)

  const visJsRef = useRef(null)

  // set new Network
  useEffect(() => {
    if (isInitialMountNetwork.current) {
      setNetwork({
        updateStoreValue,
        visJsRef,
        availableNodes,
        availableEdges,
      })

      setNodesIdsToDisplay({
        updateStoreValue,
        t
      })
    } else {
      isInitialMountNetwork.current = false
    }
  }, [
    visJsRef,
  ])

  // update available nodes/edges according to view
  useEffect(() => addNodesToGraph({
    updateStoreValue
  }),
  [
    nodesIdsToDisplay,
  ])

  useEffect(() => setNodesIdsToDisplay({
    updateStoreValue,
    t
  }),
  [
    currentGraph
  ])

  // set graph options
  useEffect(() => {
    if (network) {
      network.setOptions(getPhysicsOptions())
    }
  }, [
    isPhysicsOn,
    physicsHierarchicalView,
    physicsRepulsion,
    globalEdgeStyling.stylingEdgeLength
  ])

  // // set graph options
  useEffect(() => {
    setNetworkMethods({
      updateStoreValue,
      network,
    })
  }, [
    network,
    nodesIdsToDisplay
  ])

  const {
    boundingBoxPosX,
    boundingBoxPosY,
    boundingBoxWidth,
    boundingBoxHeight
  } = boundingBoxGeometry

  return (
    <div className={`graph-container${sidebarView !== SIDEBAR_VIEW_ENTRY_SEARCH && (networkVisualisation === NETWORK_VIEW_GRAPH || (networkVisualisation === NETWORK_VIEW_DATATABLE && sidebarView === SIDEBAR_VIEW_GRAPHS)) ? ' elevate-view' : ''}`}>
      <div
        id="network-graph"
        ref={visJsRef}
        style={{
          height: '100%',
          width: '100%'
        }}
      />

      {
        isBoundingBoxSelectable
        && (
          <div
            style={{
              top: boundingBoxPosY,
              left: boundingBoxPosX,
              width: boundingBoxWidth,
              height: boundingBoxHeight
            }}
            className="bounding-box-wrapper"
          />
        )
      }

      {
        showContextMenu
        && (
          <GraphContextMenu />
        )
      }
    </div>
  )
}

GraphVisualisation.propTypes = {
  currentGraph: PropTypes.string.isRequired,
  showContextMenu: PropTypes.bool.isRequired,
  isBoundingBoxSelectable: PropTypes.bool.isRequired,
  boundingBoxGeometry: PropTypes.shape().isRequired,
  availableNodes: PropTypes.shape().isRequired,
  availableEdges: PropTypes.shape().isRequired,
  isPhysicsOn: PropTypes.bool.isRequired,
  network: PropTypes.shape(),
  nodesIdsToDisplay: PropTypes.arrayOf(PropTypes.string).isRequired,
  physicsHierarchicalView: PropTypes.bool.isRequired,
  physicsRepulsion: PropTypes.bool.isRequired,
  globalEdgeStyling: PropTypes.shape().isRequired,
  updateStoreValue: PropTypes.func.isRequired,
  sidebarView: PropTypes.string.isRequired,
  networkVisualisation: PropTypes.string.isRequired,
}

GraphVisualisation.defaultProps = {
  network: undefined,
}

const mapToProps = ({
  currentGraph,
  showContextMenu,
  isBoundingBoxSelectable,
  boundingBoxGeometry,
  availableNodes,
  availableEdges,
  network,
  nodesIdsToDisplay,
  physicsHierarchicalView,
  physicsRepulsion,
  isPhysicsOn,
  globalEdgeStyling,
  sidebarView,
  networkVisualisation
}) => ({
  currentGraph,
  showContextMenu,
  isBoundingBoxSelectable,
  boundingBoxGeometry,
  availableNodes,
  availableEdges,
  network,
  nodesIdsToDisplay,
  physicsHierarchicalView,
  physicsRepulsion,
  isPhysicsOn,
  globalEdgeStyling,
  sidebarView,
  networkVisualisation
})

export default connect(
  mapToProps,
  actions
)(GraphVisualisation)

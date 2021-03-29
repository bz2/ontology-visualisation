import React from 'react'
import { connect } from 'redux-zero/react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {
  FiLayers,
  FiSettings
} from 'react-icons/fi'
import {
  BiNetworkChart,
  BiSelection,
  BiText
} from 'react-icons/bi'
import {
  BsSearch,
  BsArrowUpRight,
  BsFilter,
  BsPencilSquare,
  BsCodeSlash
} from 'react-icons/bs'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai'
import {
  IoGitNetwork,
  IoBuildSharp,
} from 'react-icons/io5'
import {
  IoMdOptions
} from 'react-icons/io'
import {
  FaRegHandPointer,
  FaRegCircle,
  FaFileExport,
  FaPaintBrush,
  FaStickyNote,
  FaFileAlt
} from 'react-icons/fa'
import { Button } from 'primereact/button'
import { useRouter } from 'next/router'
import actions from '../store/actions'
import {
  SIDEBAR_VIEW_ENTRY_SEARCH,
  SIDEBAR_VIEW_GRAPHS,
  SIDEBAR_VIEW_GRAPH_OPTIONS,
  SIDEBAR_VIEW_FREE_TEXT_SEARCH,
  SIDEBAR_VIEW_NEIGHBOURHOOD,
  SIDEBAR_VIEW_SHORTEST_PATH,
  SIDEBAR_VIEW_NODES_SELECTION,
  SIDEBAR_VIEW_EDGES_SELECTION,
  SIDEBAR_VIEW_SETTINGS,
  SIDEBAR_VIEW_EXPORT,
  SIDEBAR_VIEW_BOUNDING_BOX,
  SIDEBAR_VIEW_NODES_FILTER,
  SIDEBAR_VIEW_EDGES_FILTER,
  SIDEBAR_VIEW_CUSTOM_QUERY,
  SIDEBAR_VIEW_EDIT_ONTOLOGY,
  SIDEBAR_VIEW_STYLING,
  SIDEBAR_VIEW_STRUCTURED_SEARCH,
  SIDEBAR_VIEW_NOTES,
  SIDEBAR_VIEW_SYNONYMS,
  IS_SEARCH_VISIBLE,
  IS_GRAPHS_VISIBLE,
  IS_GRAPH_OPTIONS_VISIBLE,
  IS_FREE_TEXT_SEARCH_VISIBLE,
  IS_STRUCTURED_SEARCH_VISIBLE,
  IS_NODE_SELECTION_VISIBLE,
  IS_EDGE_SELECTION_VISIBLE,
  IS_NODES_FILTER_VISIBLE,
  IS_EDGES_FILTER_VISIBLE,
  IS_BOUNDING_BOX_VISIBLE,
  IS_NEIGHBOURHOOD_VISIBLE,
  IS_SHORTEST_PATH_VISIBLE,
  IS_CUSTOM_QUERY_VISIBLE,
  IS_PHYSICS_SETTINGS_VISIBLE,
  IS_STYLING_VISIBLE,
  IS_NOTES_VISIBLE,
  IS_SYNONIMS_VISIBLE,
  IS_EXPORT_VISIBLE,
  IS_EDIT_ONTOLOGY_VISIBLE
} from '../constants/views'
import NetworkGraphList from './NetworkGraphList'
import FreeTextSearch from './FreeTextSearch'
import NodeNeighbourhood from './NodeNeighbourhood'
import NodesSelection from './NodesSelection'
import EdgesSelection from './EdgesSelection'
import NetworkSettings from './NetworkSettings'
import ExportSettings from './ExportSettings'
import ShortestPath from './ShortestPath'
import BoundingBoxSelection from './BoundingBoxSelection'
import NodesFilter from './NodesFilter'
import EdgesFilter from './EdgesFilter'
import CustomQuery from './CustomQuery'
import EditOntology from './EditOntology'
import NetworkStyling from './NetworkStyling'
import StructuredSearch from './StructuredSearch'
import NotesList from './NotesList'
import EntrySearch from './EntrySearch'
import SynonymsList from './SynonymsList'
import NetworkGraphOptions from './NetworkGraphOptions'
import { OPERATION_TYPE_UPDATE } from '../constants/store'
import { toDashedCase } from '../constants/functions'
import {
  ROUTE_BOUNDING_BOX,
  ROUTE_EDGES_FILTER,
  ROUTE_EDGES_SELECTION,
  ROUTE_FREE_TEXT_SEARCH,
  ROUTE_NETWORK_GRAPHS,
  ROUTE_NETWORK_GRAPH_OPTIONS,
  ROUTE_NODES_FILTER,
  ROUTE_NODES_SELECTION,
  ROUTE_NODE_NEIGHBOURHOOD,
  ROUTE_SEARCH,
  ROUTE_SHORTEST_PATH,
  ROUTE_STRUCTURED_SEARCH,
  ROUTE_CUSTOM_QUERY,
  ROUTE_SETTINGS,
  ROUTE_STYLING,
  ROUTE_NOTES,
  ROUTE_SYNONYMS,
  ROUTE_EXPORT,
  ROUTE_EDIT_ONTOLOGY
} from '../constants/routes'

const Sidebar = ({
  isSidebarOpen,
  updateStoreValue,
  currentGraph,
  graphData,
}) => {
  const { t } = useTranslation()

  const router = useRouter()

  const { view } = router.query

  const sidebarButtons = {
    [toDashedCase(SIDEBAR_VIEW_ENTRY_SEARCH)]: {
      route: ROUTE_SEARCH,
      icon: <BsSearch />,
      isVisible: IS_SEARCH_VISIBLE,
      component: <EntrySearch />
    },
    [toDashedCase(SIDEBAR_VIEW_GRAPHS)]: {
      route: ROUTE_NETWORK_GRAPHS,
      icon: <FiLayers />,
      isVisible: IS_GRAPHS_VISIBLE,
      component: <NetworkGraphList />
    },
    [toDashedCase(SIDEBAR_VIEW_GRAPH_OPTIONS)]: {
      route: ROUTE_NETWORK_GRAPH_OPTIONS,
      icon: <IoMdOptions />,
      isVisible: IS_GRAPH_OPTIONS_VISIBLE,
      component: <NetworkGraphOptions />
    },
    [toDashedCase(SIDEBAR_VIEW_FREE_TEXT_SEARCH)]: {
      route: ROUTE_FREE_TEXT_SEARCH,
      icon: (
        <>
          <BsSearch />
          <BiText />
        </>
      ),
      isVisible: IS_FREE_TEXT_SEARCH_VISIBLE,
      component: <FreeTextSearch />
    },
    [toDashedCase(SIDEBAR_VIEW_STRUCTURED_SEARCH)]: {
      route: ROUTE_STRUCTURED_SEARCH,
      icon: (
        <>
          <BsSearch />
          <IoBuildSharp />
        </>
      ),
      isVisible: IS_STRUCTURED_SEARCH_VISIBLE,
      component: <StructuredSearch />
    },
    [toDashedCase(SIDEBAR_VIEW_NODES_SELECTION)]: {
      route: ROUTE_NODES_SELECTION,
      icon: (
        <>
          <FaRegCircle />
          <FaRegHandPointer />
        </>
      ),
      isVisible: IS_NODE_SELECTION_VISIBLE,
      component: <NodesSelection />
    },
    [toDashedCase(SIDEBAR_VIEW_EDGES_SELECTION)]: {
      route: ROUTE_EDGES_SELECTION,
      icon: (
        <>
          <BsArrowUpRight />
          <FaRegHandPointer />
        </>
      ),
      isVisible: IS_EDGE_SELECTION_VISIBLE,
      component: <EdgesSelection />
    },
    [toDashedCase(SIDEBAR_VIEW_NODES_FILTER)]: {
      route: ROUTE_NODES_FILTER,
      icon: (
        <>
          <FaRegCircle />
          <BsFilter />
        </>
      ),
      isVisible: IS_NODES_FILTER_VISIBLE,
      component: <NodesFilter />
    },
    [toDashedCase(SIDEBAR_VIEW_EDGES_FILTER)]: {
      route: ROUTE_EDGES_FILTER,
      icon: (
        <>
          <BsArrowUpRight />
          <BsFilter />
        </>
      ),
      isVisible: IS_EDGES_FILTER_VISIBLE,
      component: <EdgesFilter />
    },
    [toDashedCase(SIDEBAR_VIEW_BOUNDING_BOX)]: {
      route: ROUTE_BOUNDING_BOX,
      icon: <BiSelection />,
      isVisible: IS_BOUNDING_BOX_VISIBLE,
      component: <BoundingBoxSelection />
    },
    [toDashedCase(SIDEBAR_VIEW_NEIGHBOURHOOD)]: {
      route: ROUTE_NODE_NEIGHBOURHOOD,
      icon: <BiNetworkChart />,
      isVisible: IS_NEIGHBOURHOOD_VISIBLE,
      component: <NodeNeighbourhood />
    },
    [toDashedCase(SIDEBAR_VIEW_SHORTEST_PATH)]: {
      route: ROUTE_SHORTEST_PATH,
      icon: <IoGitNetwork />,
      isVisible: IS_SHORTEST_PATH_VISIBLE,
      component: <ShortestPath />
    },
    [toDashedCase(SIDEBAR_VIEW_CUSTOM_QUERY)]: {
      route: ROUTE_CUSTOM_QUERY,
      icon: <BsCodeSlash />,
      isVisible: IS_CUSTOM_QUERY_VISIBLE,
      component: <CustomQuery />
    },
    [toDashedCase(SIDEBAR_VIEW_SETTINGS)]: {
      route: ROUTE_SETTINGS,
      icon: <FiSettings />,
      isVisible: IS_PHYSICS_SETTINGS_VISIBLE,
      component: <NetworkSettings />
    },
    [toDashedCase(SIDEBAR_VIEW_STYLING)]: {
      route: ROUTE_STYLING,
      icon: <FaPaintBrush />,
      isVisible: IS_STYLING_VISIBLE,
      component: <NetworkStyling />
    },
    [toDashedCase(SIDEBAR_VIEW_NOTES)]: {
      route: ROUTE_NOTES,
      icon: <FaStickyNote />,
      isVisible: IS_NOTES_VISIBLE,
      component: <NotesList />
    },
    [toDashedCase(SIDEBAR_VIEW_SYNONYMS)]: {
      route: ROUTE_SYNONYMS,
      icon: <FaFileAlt />,
      isVisible: IS_SYNONIMS_VISIBLE,
      component: <SynonymsList />
    },
    [toDashedCase(SIDEBAR_VIEW_EXPORT)]: {
      route: ROUTE_EXPORT,
      icon: <FaFileExport />,
      isVisible: IS_EXPORT_VISIBLE,
      component: <ExportSettings />
    },
    [toDashedCase(SIDEBAR_VIEW_EDIT_ONTOLOGY)]: {
      route: ROUTE_EDIT_ONTOLOGY,
      icon: <BsPencilSquare />,
      isVisible: IS_EDIT_ONTOLOGY_VISIBLE,
      component: <EditOntology />
    }
  }

  return (
    <aside className={`sidebar${isSidebarOpen ? '' : '-closed'}`}>
      <div className="sidebar-icons">
        {
          Object.keys(sidebarButtons).map((label) => {
            const {
              route, icon, isVisible
            } = sidebarButtons[label]

            if (!isVisible) return false

            return (
              <Link
                key={`sidebar-button-${label}`}
                href={route}
                aria-label={t(label)}
                tooltip={t(label)}
                onClick={() => updateStoreValue(['isSidebarOpen'], OPERATION_TYPE_UPDATE, true)}
              >
                <a
                  id={`sidebar-button-${label}`}
                  className={view === route ? 'p-button sidebar-bar-button-selected' : 'p-button'}
                >
                  {icon}
                </a>
              </Link>
            )
          })
        }
        <Button
          aria-label={t('toggleSidebar')}
          id="sidebar-button-toggle"
          tooltip={t('toggleSidebar')}
          onClick={() => updateStoreValue(['isSidebarOpen'], OPERATION_TYPE_UPDATE, !isSidebarOpen)}
        >
          {
            isSidebarOpen ? (
              <AiOutlineArrowLeft />
            ) : (
              <AiOutlineArrowRight />
            )
          }
        </Button>
      </div>

      {
        isSidebarOpen && (
          <div className="sidebar-main">
            {
              graphData[currentGraph]
              && view ? sidebarButtons[view].component : <EntrySearch />
            }
          </div>
        )
      }
    </aside>
  )
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  updateStoreValue: PropTypes.func.isRequired,
  currentGraph: PropTypes.string.isRequired,
  graphData: PropTypes.shape().isRequired,
}

const mapToProps = ({
  isSidebarOpen,
  currentGraph,
  graphData
}) => ({
  isSidebarOpen,
  currentGraph,
  graphData
})

export default connect(
  mapToProps,
  actions
)(Sidebar)

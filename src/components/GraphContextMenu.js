import { Menu } from 'primereact/menu'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import actions from '../store/actions'
import expandNode from '../utils/graphVisualisation/expandNode'
import { SIDEBAR_VIEW_CUSTOM_QUERY, SIDEBAR_VIEW_NOTES, SIDEBAR_VIEW_SYNONYMS } from '../constants/views'
import { NODE_TYPE } from '../constants/graph'
import { OPERATION_TYPE_UPDATE } from '../constants/store'

const GraphContextMenu = ({
  updateStoreValue,
  contextMenuData,
  classesFromApi,
}) => {
  const { t } = useTranslation()

  const {
    top,
    left,
    nodeId,
    edgeId
  } = contextMenuData

  const defaultMenu = [
    {
      label: t('customQuery'),
      icon: 'pi pi-fw pi-tablet',
      command: () => {
        updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_CUSTOM_QUERY)
        updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
      }
    },
    {
      separator: true
    },
    {
      label: t('close'),
      icon: 'pi pi-fw pi-power-off',
      command: () => updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
    }
  ]

  let menu = defaultMenu

  if (nodeId) {
    let synonimsButton = []

    if (classesFromApi[nodeId][NODE_TYPE]
      && classesFromApi[nodeId][NODE_TYPE] === 'class') {
      synonimsButton = [{
        label: t('synonyms'),
        icon: 'pi pi-file',
        command: () => {
          updateStoreValue(['synonymElementId'], OPERATION_TYPE_UPDATE, nodeId)
          updateStoreValue(['selectedNotesType'], OPERATION_TYPE_UPDATE, 'node')
          updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_SYNONYMS)
          updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
        }
      }]
    }

    const selectedNodeMenu = [
      {
        label: t('expandNode'),
        icon: 'pi pi-fw pi-plus',
        command: () => {
          expandNode({
            nodeId,
            updateStoreValue,
          })
          updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
        }
      }, {
        label: t('notes'),
        icon: 'pi pi-fw pi-comment',
        command: () => {
          updateStoreValue(['noteElementId'], OPERATION_TYPE_UPDATE, nodeId)
          updateStoreValue(['selectedNotesType'], OPERATION_TYPE_UPDATE, 'node')
          updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_NOTES)
          updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
        }
      },
    ]

    menu = [
      defaultMenu[0],
      ...selectedNodeMenu,
      ...synonimsButton,
      ...defaultMenu.slice(1)
    ]
  } else if (edgeId) {
    const selectedEdgeMenu = [
      {
        label: t('notes'),
        icon: 'pi pi-fw pi-comment',
        command: () => {
          updateStoreValue(['noteElementId'], OPERATION_TYPE_UPDATE, edgeId)
          updateStoreValue(['selectedNotesType'], OPERATION_TYPE_UPDATE, 'edge')
          updateStoreValue(['sidebarView'], OPERATION_TYPE_UPDATE, SIDEBAR_VIEW_NOTES)
          updateStoreValue(['showContextMenu'], OPERATION_TYPE_UPDATE, false)
        }
      }
    ]

    menu = [
      defaultMenu[0],
      ...selectedEdgeMenu,
      ...defaultMenu.slice(1)
    ]
  }

  return (
    <Menu
      className="context-menu"
      style={{ top, left }}
      model={menu}
    />
  )
}

GraphContextMenu.propTypes = {
  updateStoreValue: PropTypes.func.isRequired,
  contextMenuData: PropTypes.shape().isRequired,
  classesFromApi: PropTypes.shape().isRequired,
}

const mapToProps = ({
  contextMenuData,
  classesFromApi
}) => ({
  contextMenuData,
  classesFromApi
})

export default connect(
  mapToProps,
  actions
)(GraphContextMenu)

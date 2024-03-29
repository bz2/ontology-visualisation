import setOntologyDeleteNode from './setOntologyDeleteNode'
import setOntologyUpdateNode from './setOntologyUpdateNode'
import setOntologyAddNode from './setOntologyAddNode'
import setOntologyRestoreNode from './setOntologyRestoreNode'
import setOntologyAddEdge from './setOntologyAddEdge'
import setOntologyDeleteEdge from './setOntologyDeleteEdge'
import setOntologyRestoreEdge from './setOntologyRestoreEdge'

/**
 * Set graph full data
 * @param  {Object}         params
 * @param  {String}         params.operation                  Operation mode [add / update / delete / restore]
 * @param  {String|Array}   params.selectedElement            Selected node(s)/edge(s) IDs
 * @param  {String}         params.type                       Element type (node / edge)
 * @param  {Function}       params.updateStoreValue           updateStoreValue action
 * @param  {Object}         params.selectedElementProperties  Element properties from form
 * @return {undefined}
 */
const setOntology = ({
  operation,
  type,
  selectedElement,
  updateStoreValue,
  selectedElementProperties,
  t
}) => {
  if (operation === 'restore') {
    if (type === 'node') {
      setOntologyRestoreNode({
        selectedElement,
        updateStoreValue,
        t
      })
    }

    if (type === 'edge') {
      setOntologyRestoreEdge({
        selectedElement,
        updateStoreValue,
        t
      })
    }
  }

  if (operation === 'delete') {
    if (type === 'node') {
      setOntologyDeleteNode({
        selectedElement,
        updateStoreValue,
        t
      })
    }

    if (type === 'edge') {
      setOntologyDeleteEdge({
        updateStoreValue,
        selectedElement,
        t
      })
    }
  }

  if (operation === 'update') {
    if (type === 'node') {
      setOntologyUpdateNode({
        selectedElement,
        updateStoreValue,
        selectedElementProperties,
        t
      })
    }
  }

  if (operation === 'add') {
    if (type === 'node') {
      setOntologyAddNode({
        updateStoreValue,
        selectedElementProperties,
        t
      })
    }

    if (type === 'edge') {
      setOntologyAddEdge({
        updateStoreValue,
        selectedElementProperties,
        t,
      })
    }
  }
}

export default setOntology

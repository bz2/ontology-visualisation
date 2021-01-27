export const getElementProperties = (element) => Object.keys(element).filter((elementKey) => typeof elementKey !== 'object')
export const getEdgeAndNodes = (edge) => edge.split('___')
export const getNodesInEdge = (edge) => getEdgeAndNodes(edge).slice(-2)
export const getEdgeUniqueId = (edge) => getEdgeAndNodes(edge)[0]
export const generatePredicateId = (triple) => `${triple.predicate}___${triple.from}___${triple.to}`
export const getPathEdges = (path) => path.split('|||')
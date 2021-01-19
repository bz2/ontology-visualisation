/**
 * Update neighbourNodes and neighbourEdges recursively
 * @param  {Object}   params
 * @param  {Object}   params.triplesPerNode   List of triples per node
 * @param  {Object}   params.nextIds          Array of node IDs to loop through
 * @param  {Array}    params.neighbourNodes   Array of neighbour nodes IDs
 * @param  {Array}    params.neighbourEdges   Array of neighbour edges IDs
 * @param  {Number}   params.separationDegree Neighbourhood separation degree as integer
 * @param  {Number}   params.round            Current loop round as integer
 * @return
 */
const loopThroughNodes = ({
  nextIds,
  neighbourNodes,
  neighbourEdges,
  triplesPerNode,
  separationDegree,
  round
}) => {
  const nextIdsLoop = []

  nextIds.map((nodeId) => {
    const listOfTriples = triplesPerNode[nodeId]

    if (listOfTriples && listOfTriples.length > 0) {
      listOfTriples.map((triple) => {
        const {
          from,
          predicate,
          to
        } = triple

        const newNode = from === nodeId ? to : from

        if (!neighbourNodes.includes(newNode)) {
          neighbourNodes.push(newNode)

          if (!nextIdsLoop.includes(newNode)) {
            nextIdsLoop.push(newNode)
          }
        }

        if (!neighbourEdges.includes(predicate)) {
          neighbourEdges.push(predicate)
        }

        return true
      })
    }

    return true
  })

  const nextRound = round + 1

  if (nextIdsLoop.length > 0 && nextRound < separationDegree) {
    loopThroughNodes({
      neighbourNodes,
      nextIds: nextIdsLoop,
      neighbourEdges,
      triplesPerNode,
      separationDegree,
      round: nextRound
    })
  }
}

/**
 * Get neighbour nodes and related edges
 * @param  {Object}   params
 * @param  {Object}   params.triplesPerNode   List of triples per node
 * @param  {Object}   params.classesFromApi   Nodes from initial OwlClasses
 * @param  {Number}   params.separationDegree Neighbourhood separation degree as integer
 * @param  {String}   params.selectedNodeId   Selected node ID
 * @return {Object}   output
 * @return {Array}    output.neighbourNodes   Array of neighbour nodes IDs
 * @return {Array}    output.neighbourEdges   Array of neighbour edges IDs
 */
const getNeighbours = ({
  selectedNodeId,
  separationDegree,
  classesFromApi,
  triplesPerNode
}) => {
  const neighbourNodes = [selectedNodeId]
  const neighbourEdges = []
  const nextIds = [selectedNodeId]
  const round = 0

  if (!selectedNodeId || !triplesPerNode || !separationDegree || separationDegree < 1) return neighbourNodes

  loopThroughNodes({
    nextIds,
    neighbourNodes,
    neighbourEdges,
    triplesPerNode,
    classesFromApi,
    separationDegree,
    round
  })

  return {
    neighbourNodes,
    neighbourEdges
  }
}

export default getNeighbours
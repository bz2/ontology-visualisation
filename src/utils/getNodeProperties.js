import axios from 'axios'
import {
  NOTIFY_WARNING
} from '../constants/notifications'
import showNotification from './showNotification'
import { GET_PROPERTIES_ANNOTATIONS } from '../constants/api'
import {
  REQUIRED_PROPERTIES,
  UNIQUE_PROPERTY
} from '../constants/graph'

/**
 * Get node properties from API
 * @param  {Object}   params
 * @param  {Function} params.setStoreState              setStoreState action
 * @param  {Function} params.t                          i18n translation function
 * @return {Array}    propertiesList                    Array of objects with property id and label
 */
const getNodeProperties = async ({
  setStoreState,
  t
}) => {
  setStoreState('loading', true)

  try {
    const response = await axios.get(GET_PROPERTIES_ANNOTATIONS)

    setStoreState('loading', false)

    if (response.status !== 200) {
      showNotification({
        message: t('couldNotQueryAnnotationProperties'),
        type: NOTIFY_WARNING
      })

      return []
    }

    const { data } = response
    const annotationProperties = Object.keys(data)

    if (annotationProperties.length === 0) return []

    const propertiesList = annotationProperties.map((property) => {
      const label = data[property].rdfsLabel || property?.split('/').pop()

      return ({
        id: property,
        label,
        search: label.toLowerCase(),
        isRequired: REQUIRED_PROPERTIES.includes(property),
        isUnique: UNIQUE_PROPERTY === property
      })
    })

    const basicProperties = Object.keys(data[annotationProperties[0]])
      .filter((property) => property !== 'id')
      .map((property) => ({
        id: property,
        label: property,
        search: property.toLowerCase(),
        isRequired: REQUIRED_PROPERTIES.includes(property),
        isUnique: UNIQUE_PROPERTY === property
      }))

    return [
      ...propertiesList,
      ...basicProperties
    ]
  } catch (error) {
    setStoreState('loading', false)
    showNotification({
      message: t('couldNotQueryAnnotationProperties'),
      type: NOTIFY_WARNING
    })

    return []
  }
}

export default getNodeProperties

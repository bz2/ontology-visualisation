/* eslint no-param-reassign:0 */
/* eslint new-cap:0 */
import {
  NOTIFY_SUCCESS,
} from '../../constants/notifications'
import showNotification from '../showNotification'
import serialiseOwlFile from './serialiseOwlFile'

/**
 * Export data as owl
 * @param  {Object}   params
 * @param  {String}   params.exportFileName             File name
 * @param  {Function} params.t                          i18n translation function
 * @return { undefined }
\ */
const exportOwl = async ({
  exportFileName,
  t
}) => {
  const owlText = await serialiseOwlFile()

  const element = document.createElement('a')
  const file = new Blob([owlText], { type: 'application/xml' })
  element.href = URL.createObjectURL(file)
  element.download = `${exportFileName || 'network-graph'}.owl`
  element.id = 'output'
  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)

  showNotification({
    message: t('fileCanBeDownloaded'),
    type: NOTIFY_SUCCESS,
  })
}

export default exportOwl
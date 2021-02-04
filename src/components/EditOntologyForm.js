import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { InputTextarea } from 'primereact/inputtextarea'
import { orderBy } from 'lodash'
import { useTranslation } from 'react-i18next'
import actions from '../store/actions'
import { OWL_ANNOTATION_PROPERTIES, UNIQUE_PROPERTY } from '../constants/graph'

const EditOntologyForm = ({
  selectedElementProperties,
  setSelectedElementProperties,
  nodesProperties,
  edgesProperties,
  operation,
  initialData,
  classesFromApi,
  type
}) => {
  const { t } = useTranslation()

  const properties = type === 'node' ? nodesProperties : edgesProperties

  return (
    <>
      {
        properties.length > 0
        && orderBy(properties, ['search'], ['asc']).map((property) => {
          const {
            id,
            label,
            isRequired
          } = property

          const nodeIdIfAdd = selectedElementProperties[UNIQUE_PROPERTY]
          const isValid = operation === 'add' && isRequired ? selectedElementProperties[id]?.length > 0 : true
          const isExisting = operation === 'add' && classesFromApi[nodeIdIfAdd]

          const isDisabled = operation === 'update' && isRequired

          const initialDataValue = initialData ? (initialData[id]
            || initialData[OWL_ANNOTATION_PROPERTIES][id]) : ''

          const defaultValue = operation === 'add' ? '' : initialDataValue

          const value = selectedElementProperties && (
            selectedElementProperties[id]
            || selectedElementProperties[id] === ''
          ) ? selectedElementProperties[id] : defaultValue

          return (
            <div
              className="ontology-edit-row"
              key={`element-property-${id}`}
            >
              <label className="form-label" htmlFor={`element-property-${id}`}>
                {`${label}${isRequired ? ' *' : ''}`}
              </label>

              <InputTextarea
                id={`element-property-${id}`}
                value={value}
                className={!isValid ? 'p-invalid' : ''}
                disabled={isDisabled}
                onChange={(e) => {
                  const elementProperties = JSON.parse(JSON.stringify(selectedElementProperties))

                  elementProperties[id] = e.target.value
                  setSelectedElementProperties(elementProperties)
                }}
                placeholder={label}
              />

              {
                !isValid && (
                  <small
                    id="username2-help"
                    className="p-error p-d-block"
                  >
                    {t('requiredField')}
                  </small>
                )
              }

              {
                id === UNIQUE_PROPERTY
                && isExisting && (
                  <small
                    id="username2-help"
                    className="p-error p-d-block"
                  >
                    {t('idExists')}
                  </small>
                )
              }
            </div>
          )
        })
      }
    </>
  )
}

EditOntologyForm.propTypes = {
  selectedElementProperties: PropTypes.shape().isRequired,
  setSelectedElementProperties: PropTypes.func.isRequired,
  nodesProperties: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  edgesProperties: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  operation: PropTypes.string.isRequired,
  initialData: PropTypes.shape().isRequired,
  classesFromApi: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
}

const mapToProps = ({
  nodesProperties,
  edgesProperties,
  classesFromApi,
  type
}) => ({
  nodesProperties,
  edgesProperties,
  classesFromApi,
  type
})

export default connect(
  mapToProps,
  actions
)(EditOntologyForm)

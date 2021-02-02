/* eslint react/no-array-index-key:0 */
import {
  useState,
  useEffect
} from 'react'
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import actions from '../store/actions'
import { SIDEBAR_VIEW_EDGES_FILTER } from '../constants/views'
import setFilteredEdges from '../utils/setFilteredEdges'
import getEdgesProperties from '../utils/getEdgesProperties'

const EdgesFilter = ({
  setStoreState,
  edgesProperties,
  addToObject
}) => {
  const { t } = useTranslation()

  const defaultEdgeFilter = {
    property: '',
    value: '',
  }

  const checkEmptyRow = (filters) => filters.filter((filter) => filter.property === '' && filter.value === '').length > 0

  const [edgesFilters, setEdgesFilters] = useState([defaultEdgeFilter])

  useEffect(() => {
    if (edgesProperties.length === 0) {
      getEdgesProperties({ setStoreState })
    }
  }, [])

  return (
    <>
      <div className="sidebar-main-title">
        {t(SIDEBAR_VIEW_EDGES_FILTER)}
      </div>

      <div className="edges-filter">
        <div>{t('filterEdgesByArbitraryPropsCombination')}</div>

        <div
          className="edges-filter-selection"
        >
          {
            edgesFilters.map(
              (edgefilter, index) => {
                const selectId = `edges-filter-property-${index}`
                const inputTextId = `edges-filter-value-${index}`

                return (
                  <div
                    className="edges-filter-selection-row"
                    key={`edges-filter-${index}`}
                  >
                    {
                      edgesFilters.length > 1 && (
                      <div className="p-field remove-button p-col-12 p-md-3">
                        <Button
                          icon="pi pi-times"
                          className="p-button-rounded p-button-danger"
                          tooltip={t('removeFilter')}
                          onClick={() => {
                            const newEdgeFilter = edgesFilters.slice()

                            newEdgeFilter.splice(index, 1)

                            if (!checkEmptyRow(newEdgeFilter)) {
                              newEdgeFilter.push(JSON.parse(JSON.stringify(defaultEdgeFilter)))
                            }

                            setEdgesFilters(newEdgeFilter)
                          }}
                        />
                      </div>
                      )
                    }

                    <div className="p-field p-col-12 p-md-3">
                      <label htmlFor={selectId}>{t('selectProperty')}</label>
                      <Dropdown
                        id={selectId}
                        value={edgesFilters[index].property}
                        options={edgesProperties}
                        onChange={(e) => {
                          const newFilter = {
                            ...edgesFilters[index],
                            property: e.target.value
                          }

                          let newEdgesFilters = [
                            ...edgesFilters.slice(0, index),
                            newFilter,
                            ...edgesFilters.slice(index + 1),
                          ]

                          if (!checkEmptyRow(newEdgesFilters)) {
                            newEdgesFilters = [
                              ...newEdgesFilters,
                              JSON.parse(JSON.stringify(defaultEdgeFilter))
                            ]
                          }

                          setEdgesFilters(newEdgesFilters)
                        }}
                        className="m-t-10"
                        placeholder={t('selectProperty')}
                      />
                    </div>

                    <div className="p-field p-col-12 p-md-3 m-t-20">
                      <label htmlFor={inputTextId}>{t('searchString')}</label>
                      <InputText
                        id={inputTextId}
                        value={edgesFilters[index].value}
                        placeholder={t('searchString')}
                        onChange={(e) => {
                          const newFilter = {
                            ...edgesFilters[index],
                            value: e.target.value
                          }

                          setEdgesFilters([
                            ...edgesFilters.slice(0, index),
                            newFilter,
                            ...edgesFilters.slice(index + 1)
                          ])
                        }}
                        className="m-t-10"
                      />
                    </div>
                  </div>
                )
              }
            )
          }
        </div>

        <Button
          tooltip={t('showFilteredEdges')}
          className="edges-filter-button m-t-30"
          disabled={edgesFilters.length < 2}
          icon="pi pi-chevron-right"
          iconPos="right"
          label={t('show')}
          onClick={() => setFilteredEdges({
            setStoreState,
            edgesFilters,
            addToObject
          })}
        />
      </div>
    </>
  )
}

EdgesFilter.propTypes = {
  setStoreState: PropTypes.func.isRequired,
  edgesProperties: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToObject: PropTypes.func.isRequired,
}

const mapToProps = ({
  edgesProperties
}) => ({
  edgesProperties
})

export default connect(
  mapToProps,
  actions
)(EdgesFilter)

/* eslint jsx-a11y/label-has-associated-control:0  */
import { connect } from 'redux-zero/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { RadioButton } from 'primereact/radiobutton'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useState } from 'react'
import actions from '../store/actions'
import { OPERATION_TYPE_DELETE, OPERATION_TYPE_OBJECT_ADD, OPERATION_TYPE_UPDATE } from '../constants/store'
import SearchBar from './SearchBar'
import { ADVANCED_SEARCH_TEMPLATE, ENUMERATION_PROPERTIES } from '../constants/search'
import getEnumeration from '../utils/graphSearch/getEnumeration'

const EntrySearch = ({
  dataTypeSearch,
  upperOntologySearch,
  updateStoreValue,
  annotationProperties,
  advancedSearchFilters
}) => {
  const { t } = useTranslation()

  const [suggestions, setSuggestions] = useState([])

  const dataTypeOptions = [{
    label: t('any'),
    value: 'any'
  }, {
    label: t('dataEntity'),
    value: 'class'
  }, {
    label: t('dataset'),
    value: 'dataset'
  }]

  const ontologyTypeOptions = [{
    label: t('any'),
    value: 'any'
  }, {
    label: t('upperOntology'),
    value: 'true'
  }, {
    label: t('lowerOntology'),
    value: 'false'
  }]

  const searchFilterKeys = Object.keys(advancedSearchFilters)
  const maxSearchFilterKey = Math.max(searchFilterKeys)

  return (
    <>
      <h1 className="sidebar-main-title">
        {t('search')}
      </h1>

      <div className="entry-search">
        <div
          className="entry-search-row"
        >
          <SearchBar />
        </div>

        <div
          className="entry-search-title"
        >
          {t('searchFilters')}
        </div>

        <div
          className="entry-search-subtitle"
        >
          {t('resultType')}
        </div>

        <div className="entry-search-row">
          {
            dataTypeOptions.map((option) => (
              <div
                key={`data-type-option-${option.value}`}
                className="p-field-radiobutton"
              >
                <RadioButton
                  inputId={`data-type-option-${option.value}`}
                  name="data-type-option"
                  value={option.value}
                  onChange={() => updateStoreValue(['dataTypeSearch'], OPERATION_TYPE_UPDATE, option.value)}
                  checked={dataTypeSearch === option.value}
                />
                <label htmlFor={`data-type-option-${option.value}`}>{option.label}</label>
              </div>
            ))
          }
        </div>

        <div
          className="entry-search-subtitle"
        >
          {t('topology')}
        </div>

        <div className="entry-search-row">
          {
            ontologyTypeOptions.map((option) => (
              <div
                key={`data-type-option-${option.value}`}
                className="p-field-radiobutton"
              >
                <RadioButton
                  inputId={`data-type-option-${option.value}`}
                  name="data-type-option"
                  value={option.value}
                  onChange={() => updateStoreValue(['upperOntologySearch'], OPERATION_TYPE_UPDATE, option.value)}
                  checked={upperOntologySearch === option.value}
                />
                <label htmlFor={`data-type-option-${option.value}`}>{option.label}</label>
              </div>
            ))
          }
        </div>

        <Accordion>
          <AccordionTab
            header={t('advancedSearch')}
          >
            {
              searchFilterKeys.map((searchFilterKey) => {
                const {
                  property,
                  value
                } = advancedSearchFilters[searchFilterKey]

                const isWithEnumeration = ENUMERATION_PROPERTIES.includes(property)

                return (
                  <div
                    key={`advanced-search-${searchFilterKey}`}
                    className="entry-search-block p-pt-3 p-pb-3 p-d-flex p-ai-center"
                  >
                    <div className="p-d-flex p-flex-column">
                      <div className="entry-search-block-row m-b-5">
                        <Dropdown
                          id={`advanced-search-property-${searchFilterKey}`}
                          value={property}
                          options={annotationProperties}
                          filter
                          onChange={(e) => {
                            const selectedValue = e.value

                            if (ENUMERATION_PROPERTIES.includes(selectedValue)) {
                              getEnumeration({
                                property: selectedValue,
                                setSuggestions,
                                updateStoreValue,
                                t
                              })
                            }

                            updateStoreValue(['advancedSearchFilters', searchFilterKey], OPERATION_TYPE_OBJECT_ADD, { property: selectedValue })
                          }}
                          placeholder={t('selectProperty')}
                        />
                      </div>

                      <div className="entry-search-block-row">
                        {
                          isWithEnumeration ? (
                            <Dropdown
                              id={`advanced-search-value-${searchFilterKey}`}
                              value={value}
                              options={suggestions}
                              filter
                              onChange={(e) => updateStoreValue(['advancedSearchFilters', searchFilterKey], OPERATION_TYPE_OBJECT_ADD, { value: e.value })}
                              placeholder={t('selectProperty')}
                            />
                          ) : (
                            <InputText
                              className="property-text-input value-input"
                              id={`advanced-search-value-${searchFilterKey}`}
                              value={value}
                              placeholder={t('insertText')}
                              onChange={(e) => updateStoreValue(['advancedSearchFilters', searchFilterKey], OPERATION_TYPE_OBJECT_ADD, { value: e.target.value })}
                            />
                          )
                        }

                      </div>
                    </div>

                    <div className="p-d-flex p-flex-column">
                      <Button
                        icon="pi pi-plus"
                        className="p-m-1"
                        aria-label={t('add')}
                        onClick={() => updateStoreValue(['advancedSearchFilters'], OPERATION_TYPE_OBJECT_ADD, { [maxSearchFilterKey + 1]: JSON.parse(JSON.stringify(ADVANCED_SEARCH_TEMPLATE)) })}
                      />

                      <Button
                        icon="pi pi-minus"
                        className="p-m-1"
                        aria-label={t('remove')}
                        onClick={() => {
                          if (searchFilterKeys.length > 1) {
                            return updateStoreValue(['advancedSearchFilters', searchFilterKey], OPERATION_TYPE_DELETE)
                          }

                          updateStoreValue(['advancedSearchFilters'], OPERATION_TYPE_UPDATE, {})
                          return updateStoreValue(['advancedSearchFilters'], OPERATION_TYPE_UPDATE, { 0: JSON.parse(JSON.stringify(ADVANCED_SEARCH_TEMPLATE)) })
                        }}
                      />
                    </div>
                  </div>
                )
              })
            }
          </AccordionTab>
        </Accordion>
      </div>
    </>
  )
}

EntrySearch.propTypes = {
  dataTypeSearch: PropTypes.string.isRequired,
  upperOntologySearch: PropTypes.string.isRequired,
  updateStoreValue: PropTypes.func.isRequired,
  advancedSearchFilters: PropTypes.shape().isRequired,
  annotationProperties: PropTypes.arrayOf(PropTypes.shape).isRequired,
}

const mapToProps = ({
  dataTypeSearch,
  upperOntologySearch,
  advancedSearchFilters,
  annotationProperties,
}) => ({
  dataTypeSearch,
  upperOntologySearch,
  advancedSearchFilters,
  annotationProperties,
})

export default connect(
  mapToProps,
  actions
)(EntrySearch)

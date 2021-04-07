import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { connect } from 'redux-zero/react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import actions from '../store/actions'
import synonymsCreateSynonym from '../utils/synonyms/synonymsCreateSynonym'

const SynonymsListAddNew = ({
  synonymElementId,
  updateStoreValue,
  classesFromApi
}) => {
  const { t } = useTranslation()

  const [synonymText, setSynonymText] = useState('')
  const [showForm, setShowForm] = useState(false)

  const elementLabel = classesFromApi[synonymElementId].label

  return (
    <div className="card">

      {!showForm
        ? (
          <div className="synonyms-synonym synonyms-add-button">
            <Button
              tooltip={t('addNewSynonym')}
              tooltipOptions={{ position: 'top' }}
              label={t('addNewSynonym')}
              id="add-synonym"
              onClick={() => setShowForm(true)}
            >
              <i className="pi pi-plus-circle" />
            </Button>
          </div>
        ) : (
          <div className="synonyms-synonym">
            <p className="bold">
              {t('addNewSynonym')}
            </p>
            <label htmlFor="synonym-textarea">{t('synonymText')}</label>
            <InputTextarea
              id="synonym-textarea"
              value={synonymText}
              type="text"
              onChange={(e) => setSynonymText(e.target.value)}
            />

            <p id="selected-element-label">
              {`${t('forNode')}: ${elementLabel}`}
            </p>

            <div className="synonyms-buttons">
              <Button
                tooltip={t('close')}
                tooltipOptions={{ position: 'top' }}
                className="p-button-secondary"
                label={t('close')}
                id="close-add-synonym"
                onClick={() => setShowForm(false)}
              />

              <Button
                tooltip={t('addSynonym')}
                tooltipOptions={{ position: 'top' }}
                label={t('addSynonym')}
                id="submit-synonym"
                disabled={!synonymElementId}
                onClick={() => {
                  setShowForm(false)
                  setSynonymText('')
                  synonymsCreateSynonym({
                    selectedElement: synonymElementId,
                    synonymText,
                    updateStoreValue,
                    t
                  })
                }}
              />
            </div>
          </div>
        )}

    </div>
  )
}

SynonymsListAddNew.propTypes = {
  synonymElementId: PropTypes.string,
  updateStoreValue: PropTypes.func.isRequired,
  classesFromApi: PropTypes.shape().isRequired,
}

SynonymsListAddNew.defaultProps = {
  synonymElementId: undefined,
}

const mapToProps = ({
  synonyms,
  synonymElementId,
  nodesNotes,
  edgesNotes,
  user,
  classesFromApi
}) => ({
  synonyms,
  synonymElementId,
  nodesNotes,
  edgesNotes,
  user,
  classesFromApi
})

export default connect(
  mapToProps,
  actions
)(SynonymsListAddNew)

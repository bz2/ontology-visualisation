/// <reference types="cypress" />
import authValid from '../fixtures/authValid'
import emptyNotes from '../fixtures/emptyNotes'
import getNodesNotes from '../fixtures/getNodesNotes'
import graphResponse from '../fixtures/graphResponse'
import getStyling from '../fixtures/getStyling'
import linkAutocomplete from '../fixtures/linkAutocomplete'
import linkSearch from '../fixtures/linkSearch'
import businessAreaValues from '../fixtures/businessAreaValues'
import { ROUTE_SEARCH } from '../../src/constants/routes'
import showTourLs from '../fixtures/showTourLs'

context('Entry search', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#open-app').click()
    cy.get('#accept-all-btn').click()
    window.localStorage.setItem('showTour', showTourLs)
  })

  describe('Entry search', () => {
    it('searching for link should work', () => {
      cy.intercept({
        method: 'POST',
        url: '**/login',
      }, authValid).as('postLogin')

      cy.intercept({
        method: 'GET',
        url: '**/graph/notes',
      }, emptyNotes).as('getNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph/nodes/notes',
      }, getNodesNotes).as('getNodesNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph/edges/notes',
      }, emptyNotes).as('getEdgesNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph?model=1',
      }, graphResponse).as('getGraph')

      cy.intercept({
        method: 'GET',
        url: '**/api/ui/styling',
      }, getStyling).as('getStyling')

      cy.intercept({
        method: 'GET',
        url: '**/autocomplete**',
      }, linkAutocomplete).as('linkAutocomplete')

      cy.intercept({
        method: 'POST',
        url: '**/search?api-version=2020-06-30',
      }, linkSearch).as('linkSearch')

      cy.intercept({
        method: 'GET',
        url: '**/graph/nodes/properties/Business%20Area/values?unique=true',
      }, businessAreaValues).as('businessAreaValues')

      cy.get('#email').type('valid@email.com')
      cy.get('#password').type('password')

      cy.get('#auth-login-button').click()

      cy.wait('@postLogin')

      cy.get('.p-splitbutton-defaultbutton').click()

      cy.wait(5000)

      cy.location('pathname').should('be.equal', ROUTE_SEARCH)

      cy.get('#main-search').find('input').type('link', { force: true })

      cy.wait('@linkAutocomplete')

      cy.get('.p-autocomplete-item').eq(0).click()

      cy.wait('@linkSearch')

      cy.get('.nav-left').should('contain', 'Search results: 1-10 of 44')

      // set result type
      cy.get('#data-type-option-class').click()
      cy.get('#ontology-type-option-true').click()

      // set advanced search
      cy.get('.p-accordion-header').find('a').click()
      cy.get('#advanced-search-property-0').find('.p-dropdown-trigger').click()
      cy.get('.p-dropdown-item').eq(1).click()

      cy.get('#advanced-search-value-0').type('test')
      cy.get('#advanced-search-plus-0').click()

      cy.get('.entry-search-block').should('have.length', 2)
      cy.get('#advanced-search-minus-1').click()
      cy.get('.entry-search-block').should('have.length', 1)

      cy.get('#advanced-search-property-0').find('.p-dropdown-trigger').click()
      cy.get('.p-dropdown-item').eq(0).click()
      cy.wait('@businessAreaValues')
      cy.get('#advanced-search-value-0').clear()
      cy.get('.p-listbox-item').should('have.length', 8)
      cy.get('#advanced-search-value-0').type('des')
      cy.get('.p-listbox-item').should('have.length', 1)
      cy.get('.p-listbox-item').click()
      cy.get('#advanced-search-value-0').should('have.value', 'Design')
      cy.get('#advanced-search-plus-0').click()

      cy.get('#apply-filters-btn').click()

      cy.wait('@linkSearch')

      // check pagination
      cy.get('.p-paginator-page').eq(2).click()
      cy.get('.nav-left').should('contain', 'Search results: 21-30 of 44')

      // click on visualise
      cy.get('#card-visualise-btn-0').click()
      cy.get('.nav-left').should('contain', 'Nodes: 24')
      cy.get('.nav-left').should('contain', 'Edges: 52')
      cy.get('#sidebar-button-search').click()

      cy.get('#card-synonyms-btn-0').click()
      cy.get('#synonyms-select-element').find('.p-dropdown-label').should('contain', 'Link')
      cy.get('#sidebar-button-search').click()

      cy.get('#card-notes-btn-0').click()
      cy.get('#notes-select-element').find('.p-dropdown-label').should('contain', 'Link')
      cy.get('#sidebar-button-search').click()
    })

    it('searching for dataset should work', () => {
      cy.intercept({
        method: 'POST',
        url: '**/login',
      }, authValid).as('postLogin')

      cy.intercept({
        method: 'GET',
        url: '**/graph/notes',
      }, emptyNotes).as('getNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph/nodes/notes',
      }, getNodesNotes).as('getNodesNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph/edges/notes',
      }, emptyNotes).as('getEdgesNotes')

      cy.intercept({
        method: 'GET',
        url: '**/graph?model=1',
      }, graphResponse).as('getGraph')

      cy.intercept({
        method: 'GET',
        url: '**/api/ui/styling',
      }, getStyling).as('getStyling')

      cy.intercept({
        method: 'GET',
        url: '**/autocomplete**',
      }, linkAutocomplete).as('linkAutocomplete')

      cy.intercept({
        method: 'POST',
        url: '**/search?api-version=2020-06-30',
      }, linkSearch).as('linkSearch')

      cy.intercept({
        method: 'GET',
        url: '**/graph/nodes/properties/Business%20Area/values?unique=true',
      }, businessAreaValues).as('businessAreaValues')

      cy.get('#email').type('valid@email.com')
      cy.get('#password').type('password')

      cy.get('#auth-login-button').click()

      cy.wait('@postLogin')

      cy.get('.p-splitbutton-defaultbutton').click()

      cy.wait(5000)

      cy.location('pathname').should('be.equal', ROUTE_SEARCH)

      cy.get('#main-search').find('input').type('link', { force: true })

      cy.wait('@linkAutocomplete')

      cy.get('.p-autocomplete-item').eq(0).click()

      cy.wait('@linkSearch')

      cy.get('.nav-left').should('contain', 'Search results: 1-10 of 44')

      // click to visualise a dataset
      cy.get('#card-visualise-btn-4').click()
      cy.get('.nav-left').should('contain', 'Nodes: 2')
      cy.get('.nav-left').should('contain', 'Edges: 1')
      cy.get('#sidebar-button-search').click()

      cy.get('#card-open-link-btn-4').should('have.text', 'Open')
    })
  })
})

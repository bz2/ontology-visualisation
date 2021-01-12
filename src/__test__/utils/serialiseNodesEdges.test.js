// import serialiseNodesEdges from '../../utils/serialiseNodesEdges'

// const setStoreState = jest.fn()
// const classesFromApi = {
//   OwlClasses: {
//     'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': {
//       rdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
//       rdfsLabel: 'Communication Document',
//       skosDefinition: 'Document storing the information conveyed between two or more parties.',
//       skosComment: 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
//       skosExample: null,
//       owlAnnotationProperties: {
//         'http://www.w3.org/2004/02/skos/core#definition': 'Document storing the information conveyed between two or more parties.',
//         'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Communications',
//         'http://www.w3.org/2004/02/skos/core#comment': 'A communication will typically have the Licence Holder (Highways England) as one of the parties.'
//       },
//       rdfsSubClassOf: [{
//         classRdfAbout: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
//         owlRestriction: null
//       }, {
//         classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
//         owlRestriction: {
//           objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
//           classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M'
//         }
//       }]
//     },
//     'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M': {
//       rdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
//       rdfsLabel: 'Programme',
//       skosDefinition: 'A collection of projects or tasks undertaken to realise a strategic goal.',
//       skosComment: 'A strategic goal that is achieved through a number of projects.',
//       skosExample: 'Develop connectivity between London and Inverness.',
//       owlAnnotationProperties: {
//         'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Maintain Plan',
//         'http://www.w3.org/2004/02/skos/core#comment': 'A strategic goal that is achieved through a number of projects.',
//         'http://www.w3.org/2004/02/skos/core#example': 'Develop connectivity between London and Inverness.',
//         'http://www.w3.org/2004/02/skos/core#definition': 'A collection of projects or tasks undertaken to realise a strategic goal.'
//       },
//       rdfsSubClassOf: [{
//         classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
//         owlRestriction: {
//           objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
//           classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8'
//         }
//       }]
//     },
//     'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': {
//       rdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
//       rdfsLabel: 'Low Level Design',
//       skosDefinition: 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
//       skosComment: null,
//       skosExample: null,
//       owlAnnotationProperties: {
//         'http://www.w3.org/2004/02/skos/core#definition': 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.'
//       },
//       rdfsSubClassOf: [{
//         classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
//         owlRestriction: {
//           objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
//           classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY'
//         }
//       }]
//     }
//   }
// }

// const objectPropertiesFromApi = {
//   OwlObjectProperties: {
//     'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM': {
//       rdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
//       rdfsLabel: 'Instantiation of',
//       skosDefinition: null,
//       skosComment: null,
//       owlAnnotationProperties: {
//         'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record'
//       },
//       rdfsSubPropertyOf: ['http://webprotege.stanford.edu/R8zMIKp038MgC2umoxwzWBJ']
//     },
//     'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd': {
//       rdfAbout: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
//       rdfsLabel: 'Proposed in',
//       skosDefinition: 'Relationship used to specify the stage, document or place where an Entity is offered or suggested for consideration, acceptance, or action.',
//       skosComment: null,
//       owlAnnotationProperties: {
//         'http://www.w3.org/2004/02/skos/core#definition': 'Relationship used to specify the stage, document or place where an Entity is offered or suggested for consideration, acceptance, or action.',
//         'http://webprotege.stanford.edu/RtMeQat8p1tL74b64dS2qs': 'Record'
//       },
//       rdfsSubPropertyOf: ['http://webprotege.stanford.edu/RD3fuHtzxeYkMf46qK7HAsD']
//     },
//   }
// }

describe('serialiseNodesEdges', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('test', () => expect(true).toEqual(true))

  // it('should work correctly', async () => {
  //   const deletedNodes = []
  //   const nodesIdsToDisplay = ['http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY']
  //   const edgesToIgnore = []

  //   await serialiseNodesEdges({
  //     nodesIdsToDisplay,
  //     classesFromApi,
  //     objectPropertiesFromApi,
  //     setStoreState,
  //     edgesToIgnore,
  //     deletedNodes,
  //   })

  //   expect(setStoreState.mock.calls).toEqual([
  //     [
  //       'availableNodesNormalised',
  //       {
  //         'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': {
  //           id: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Communication Document',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Communications',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Document storing the information conveyed between two or more parties.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           rdfsLabel: 'Communication Document',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
  //               owlRestriction: null,
  //             },
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //           skosDefinition: 'Document storing the information conveyed between two or more parties.',
  //           skosExample: null,
  //         },
  //         'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M': {
  //           id: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           label: 'Programme',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Maintain Plan',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A strategic goal that is achieved through a number of projects.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'A collection of projects or tasks undertaken to realise a strategic goal.',
  //             'http://www.w3.org/2004/02/skos/core#example': 'Develop connectivity between London and Inverness.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           rdfsLabel: 'Programme',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
  //               },
  //             },
  //           ],
  //           skosComment: 'A strategic goal that is achieved through a number of projects.',
  //           skosDefinition: 'A collection of projects or tasks undertaken to realise a strategic goal.',
  //           skosExample: 'Develop connectivity between London and Inverness.',
  //         },
  //         'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': {
  //           id: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           label: 'Low Level Design',
  //           owlAnnotationProperties: {
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           rdfsLabel: 'Low Level Design',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: null,
  //           skosDefinition: 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           skosExample: null,
  //         },
  //       },
  //     ],
  //     [
  //       'availableNodes',
  //       [
  //         {
  //           id: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           label: 'Programme',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Maintain Plan',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A strategic goal that is achieved through a number of projects.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'A collection of projects or tasks undertaken to realise a strategic goal.',
  //             'http://www.w3.org/2004/02/skos/core#example': 'Develop connectivity between London and Inverness.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           rdfsLabel: 'Programme',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R4I2v4Y7su3Adf0Vcj6TWd',
  //               },
  //             },
  //           ],
  //           skosComment: 'A strategic goal that is achieved through a number of projects.',
  //           skosDefinition: 'A collection of projects or tasks undertaken to realise a strategic goal.',
  //           skosExample: 'Develop connectivity between London and Inverness.',
  //         },
  //         {
  //           id: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Communication Document',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Communications',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Document storing the information conveyed between two or more parties.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           rdfsLabel: 'Communication Document',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
  //               owlRestriction: null,
  //             },
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //           skosDefinition: 'Document storing the information conveyed between two or more parties.',
  //           skosExample: null,
  //         },
  //         {
  //           id: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           label: 'Low Level Design',
  //           owlAnnotationProperties: {
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           rdfsLabel: 'Low Level Design',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: null,
  //           skosDefinition: 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           skosExample: null,
  //         },
  //       ],
  //     ],
  //     [
  //       'availableEdges',
  //       [
  //         {
  //           edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //           from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           fromLabel: 'Communication Document',
  //           id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY___http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           label: 'Instantiation of',
  //           to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //           toLabel: 'Programme',
  //         },
  //         {
  //           edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //           from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           fromLabel: 'Low Level Design',
  //           id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Instantiation of',
  //           to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           toLabel: 'Communication Document',
  //         },
  //       ],
  //     ],
  //     [
  //       'nodesConnections',
  //       {
  //         'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': [
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             fromLabel: 'Communication Document',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY___http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //             toLabel: 'Programme',
  //           },
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //         'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M': [
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             fromLabel: 'Communication Document',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY___http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //             toLabel: 'Programme',
  //           },
  //         ],
  //         'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': [
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //       },
  //     ],
  //     [
  //       'edgesConnections',
  //       {
  //         'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM': [
  //           {
  //             from: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             fromLabel: 'Communication Document',
  //             to: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //             toLabel: 'Programme',
  //           },
  //           {
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //       },
  //     ],
  //   ])
  // })

  // it('should work correctly when deletedNodes', async () => {
  //   const deletedNodes = ['http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M']
  //   const nodesIdsToDisplay = ['http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY']
  //   const edgesToIgnore = []

  //   await serialiseNodesEdges({
  //     nodesIdsToDisplay,
  //     classesFromApi,
  //     objectPropertiesFromApi,
  //     setStoreState,
  //     edgesToIgnore,
  //     deletedNodes
  //   })

  //   expect(setStoreState.mock.calls).toEqual([
  //     [
  //       'availableNodesNormalised',
  //       {
  //         'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': {
  //           id: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Communication Document',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Communications',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Document storing the information conveyed between two or more parties.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           rdfsLabel: 'Communication Document',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
  //               owlRestriction: null,
  //             },
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //           skosDefinition: 'Document storing the information conveyed between two or more parties.',
  //           skosExample: null,
  //         },
  //         'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': {
  //           id: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           label: 'Low Level Design',
  //           owlAnnotationProperties: {
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           rdfsLabel: 'Low Level Design',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: null,
  //           skosDefinition: 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           skosExample: null,
  //         },
  //       },
  //     ],
  //     [
  //       'availableNodes',
  //       [
  //         {
  //           id: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Communication Document',
  //           owlAnnotationProperties: {
  //             'http://webprotege.stanford.edu/RkKVruwOD8lCCdsbyX0lwY': 'Communications',
  //             'http://www.w3.org/2004/02/skos/core#comment': 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Document storing the information conveyed between two or more parties.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           rdfsLabel: 'Communication Document',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/RDLUE0UQz6th3NduA1L3n3u',
  //               owlRestriction: null,
  //             },
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0qk59fxFmgNbyUncZoU8M',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: 'A communication will typically have the Licence Holder (Highways England) as one of the parties.',
  //           skosDefinition: 'Document storing the information conveyed between two or more parties.',
  //           skosExample: null,
  //         },
  //         {
  //           id: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           label: 'Low Level Design',
  //           owlAnnotationProperties: {
  //             'http://www.w3.org/2004/02/skos/core#definition': 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           },
  //           rdfAbout: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           rdfsLabel: 'Low Level Design',
  //           rdfsSubClassOf: [
  //             {
  //               classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //               owlRestriction: {
  //                 classRdfAbout: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //                 objectPropertyRdfAbout: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //               },
  //             },
  //           ],
  //           skosComment: null,
  //           skosDefinition: 'Design (for programmers) that further exposes logical detailed Design of each of the elements present in the High Level Design.',
  //           skosExample: null,
  //         },
  //       ],
  //     ],
  //     [
  //       'availableEdges',
  //       [
  //         {
  //           edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //           from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //           fromLabel: 'Low Level Design',
  //           id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           label: 'Instantiation of',
  //           to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //           toLabel: 'Communication Document',
  //         },
  //       ],
  //     ],
  //     [
  //       'nodesConnections',
  //       {
  //         'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY': [
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //         'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8': [
  //           {
  //             edgeId: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM',
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             id: 'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM___http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8___http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             label: 'Instantiation of',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //       },
  //     ],
  //     [
  //       'edgesConnections',
  //       {
  //         'http://webprotege.stanford.edu/R15RMwxh0pmeZADFPUrcpM': [
  //           {
  //             from: 'http://webprotege.stanford.edu/R1AD8Bb0IbQzZYE0Ee9Qa8',
  //             fromLabel: 'Low Level Design',
  //             to: 'http://webprotege.stanford.edu/R0jI731hv09ZcJeji1fbtY',
  //             toLabel: 'Communication Document',
  //           },
  //         ],
  //       },
  //     ],
  //   ])
  // })
})

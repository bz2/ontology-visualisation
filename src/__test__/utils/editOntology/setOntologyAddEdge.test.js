/* eslint max-len:0 */
import setOntologyAddEdge from '../../../utils/editOntology/setOntologyAddEdge'
import store from '../../../store'
import { objectPropertiesFromApi } from '../../fixtures/objectPropertiesFromApi'
import { edgesPerNode } from '../../fixtures/edgesPerNodeNew'
import addEdge from '../../../utils/nodesEdgesUtils/addEdge'
import showNotification from '../../../utils/notifications/showNotification'
import en from '../../../i18n/en'
import getEdge from '../../../utils/nodesEdgesUtils/getEdge'
import setNodeStyle from '../../../utils/networkStyling/setNodeStyle'
import setEdgeStylesByProperty from '../../../utils/networkStyling/setEdgeStylesByProperty'
import getNode from '../../../utils/nodesEdgesUtils/getNode'
import httpCall from '../../../utils/apiCalls/httpCall'

jest.mock('../../../utils/nodesEdgesUtils/addEdge')
jest.mock('../../../utils/nodesEdgesUtils/getEdge')
jest.mock('../../../utils/nodesEdgesUtils/getNode')
jest.mock('../../../utils/notifications/showNotification')
jest.mock('../../../utils/networkStyling/setNodeStyle')
jest.mock('../../../utils/networkStyling/setEdgeStylesByProperty')
jest.mock('../../../utils/apiCalls/httpCall')

const setStoreState = jest.fn()
const t = (id) => en[id]

const selectedElementProperties = {
  from: '1',
  edge: '11',
  to: '141',
  optionEdges: [
    {
      value: '11',
      label: 'Provided to'
    }
  ]
}

store.getState = jest.fn().mockImplementation(() => ({
  objectPropertiesFromApi,
  objectPropertiesFromApiBackup: objectPropertiesFromApi,
  addedEdges: [],
  nodesEdges: {
    1: [],
    141: []
  },
  edgesPerNode
}))

describe('setOntologyAddEdge', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should work correctly when error', async () => {
    httpCall.mockImplementationOnce(() => ({ error: true }))

    await setOntologyAddEdge({
      setStoreState,
      selectedElementProperties,
      t
    })

    expect(showNotification).toHaveBeenCalledWith(
      {
        message: 'Could not add edge',
        type: 'warning'
      }
    )
  })

  it('should work correctly when no data', async () => {
    httpCall.mockImplementationOnce(() => ({ data: {} }))

    await setOntologyAddEdge({
      setStoreState,
      selectedElementProperties,
      t
    })

    expect(showNotification).toHaveBeenCalledWith(
      {
        message: 'Could not add edge',
        type: 'warning'
      }
    )
  })

  it('should work correctly', async () => {
    getEdge.mockImplementationOnce(() => null)
    getNode.mockImplementation(() => ({ id: 123 }))
    httpCall.mockImplementationOnce(() => ({
      data: {
        123: {
          id: '123',
          userDefined: true
        }
      }
    }))

    await setOntologyAddEdge({
      setStoreState,
      selectedElementProperties,
      t
    })

    expect(addEdge.mock.calls).toEqual(
      [[{
        edgeId: '123',
        from: '1',
        id: '123',
        label: 'Provided to',
        rdfAbout: '11',
        rdfsLabel: 'Provided to',
        to: '141',
        userDefined: true
      }]]
    )

    expect(setNodeStyle.mock.calls).toEqual(
      [
        [{ nodeId: '1' }],
        [{ nodeId: '141' }]
      ]
    )

    expect(setEdgeStylesByProperty.mock.calls).toEqual(
      [[{ edgeId: '123' }]]
    )

    const newObjectPropertiesFromApi = JSON.parse(JSON.stringify(objectPropertiesFromApi))

    newObjectPropertiesFromApi['123'] = {
      edgeId: '123',
      from: '1',
      id: '123',
      label: 'Provided to',
      rdfAbout: '11',
      rdfsLabel: 'Provided to',
      to: '141',
      userDefined: true,
    }

    expect(setStoreState.mock.calls).toEqual(
      [
        ['objectPropertiesFromApi',
          newObjectPropertiesFromApi
        ],
        ['objectPropertiesFromApiBackup',
          newObjectPropertiesFromApi
        ],
        [
          'nodesEdges',
          {
            1: [
              '123',
            ],
            141: [
              '123',
            ],
          }
        ],
        [
          'edgesPerNode',
          {
            1: [
              '11',
              '12',
              '1361',
              '1784',
              '411',
              '1851',
              '781',
              '751',
              '1711',
              '123',
            ],
            10: [
              '101',
            ],
            100: [
              '483',
              '572',
              '1001',
              '1671',
              '1022',
            ],
            101: [
              '1013',
              '1012',
              '1011',
              '1014',
            ],
            102: [
              '1021',
              '1023',
              '1022',
              '1082',
            ],
            103: [
              '392',
              '492',
              '1032',
              '734',
              '752',
              '841',
              '1031',
              '1033',
              '1034',
              '1035',
              '1036',
              '1037',
              '1121',
              '13910',
              '1783',
              '1452',
              '1852',
            ],
            104: [
              '1041',
            ],
            105: [
              '121',
              '1053',
              '1051',
              '1052',
              '1054',
              '1055',
              '1842',
              '1821',
            ],
            106: [
              '1062',
              '432',
              '1061',
            ],
            107: [
              '1071',
              '1033',
            ],
            108: [
              '1085',
              '1081',
              '1086',
              '1087',
              '1014',
              '1082',
              '1088',
              '1083',
              '1084',
            ],
            109: [
              '1091',
              '1092',
            ],
            11: [
              '112',
              '111',
            ],
            110: [
              '1101',
              '1102',
              '1103',
            ],
            111: [
              '1111',
            ],
            112: [
              '1122',
              '1121',
              '1123',
              '1124',
            ],
            113: [
              '241',
              '441',
              '1133',
              '698',
              '705',
              '901',
              '1131',
              '1132',
              '1134',
              '1273',
            ],
            114: [
              '697',
              '1051',
              '1141',
              '1142',
              '1143',
              '1914',
              '1886',
            ],
            115: [
              '1151',
              '1171',
            ],
            116: [
              '1161',
            ],
            117: [
              '1172',
              '1171',
              '1252',
            ],
            118: [
              '23',
              '451',
              '741',
              '1181',
              '1201',
              '1702',
              '1351',
              '1431',
              '1244',
            ],
            119: [
              '321',
              '1192',
              '1193',
              '1191',
            ],
            12: [
              '121',
              '122',
              '123',
              '124',
              '1911',
              '1272',
              '442',
              '1053',
              '1405',
              '1822',
            ],
            120: [
              '1201',
            ],
            121: [
              '1211',
            ],
            122: [
              '464',
              '1222',
              '1224',
              '795',
              '811',
              '874',
              '1036',
              '1141',
              '1221',
              '1223',
              '1841',
              '1395',
              '1384',
            ],
            123: [
              '1231',
              '1221',
              '1396',
              '1764',
              '1622',
            ],
            124: [
              '1243',
              '1245',
              '1061',
              '1244',
              '1241',
              '1242',
            ],
            125: [
              '1251',
              '1252',
              '1871',
            ],
            126: [
              '1262',
              '1261',
              '1615',
            ],
            127: [
              '1272',
              '1271',
              '1273',
            ],
            128: [
              '204',
              '385',
              '932',
              '1281',
              '1282',
              '1283',
              '1571',
              '1931',
              '1502',
            ],
            129: [
              '1291',
            ],
            13: [
              '131',
            ],
            130: [
              '1301',
            ],
            131: [
              '1311',
              '1316',
              '465',
              '1314',
              '1315',
              '792',
              '814',
              '912',
              '1034',
              '1312',
              '1313',
              '1621',
              '1398',
              '1385',
            ],
            132: [
              '21',
              '561',
              '1321',
              '1322',
              '1701',
              '1421',
            ],
            133: [
              '845',
              '1084',
              '1134',
              '1413',
              '1463',
            ],
            134: [
              '1341',
            ],
            135: [
              '1351',
            ],
            136: [
              '1361',
            ],
            137: [
              '712',
              '1102',
              '1283',
              '1371',
              '1372',
              '1544',
              '17610',
              '1407',
            ],
            138: [
              '1381',
              '1384',
              '1385',
              '1382',
              '1383',
              '1386',
            ],
            139: [
              '1397',
              '1392',
              '1393',
              '1391',
              '1399',
              '13910',
              '1395',
              '1396',
              '1398',
              '1394',
            ],
            14: [
              '141',
              '142',
              '1941',
            ],
            140: [
              '1405',
              '443',
              '1403',
              '1406',
              '1407',
              '1401',
              '1402',
              '1404',
            ],
            141: [
              '11',
              '522',
              '1412',
              '1411',
              '761',
              '801',
              '853',
              '1211',
              '1413',
              '1474',
              '1901',
              '123',
            ],
            142: [
              '1421',
              '1446',
            ],
            143: [
              '1431',
            ],
            144: [
              '93',
              '141',
              '174',
              '1442',
              '521',
              '1445',
              '701',
              '863',
              '1371',
              '1402',
              '1446',
              '1441',
              '1443',
              '1444',
              '1952',
              '1953',
              '1767',
              '1481',
              '1545',
              '1802',
              '1612',
              '1933',
              '1742',
              '1552',
            ],
            145: [
              '173',
              '1454',
              '1452',
              '1451',
              '1453',
            ],
            146: [
              '212',
              '1462',
              '384',
              '383',
              '531',
              '844',
              '1031',
              '1463',
              '1461',
            ],
            147: [
              '254',
              '341',
              '362',
              '1473',
              '633',
              '1472',
              '1471',
              '699',
              '1103',
              '1401',
              '1404',
              '1474',
              '1441',
              '1475',
              '1883',
              '1853',
            ],
            148: [
              '1483',
              '1482',
              '709',
              '1481',
            ],
            149: [
              '1494',
              '1491',
              '1493',
              '1055',
              '1492',
            ],
            15: [
              '151',
              '152',
            ],
            150: [
              '1501',
              '1502',
            ],
            151: [
              '1511',
            ],
            152: [
              '1522',
              '1524',
              '1525',
              '1521',
              '1523',
            ],
            153: [
              '1531',
              '732',
            ],
            154: [
              '211',
              '1542',
              '1011',
              '1544',
              '1545',
              '1492',
              '1541',
              '1543',
              '1893',
              '1786',
            ],
            155: [
              '171',
              '1555',
              '371',
              '1554',
              '1551',
              '708',
              '1092',
              '1111',
              '1132',
              '1552',
              '1553',
            ],
            156: [
              '261',
              '1561',
              '1562',
            ],
            157: [
              '1574',
              '1572',
              '1571',
              '1573',
            ],
            158: [
              '1582',
              '1583',
              '1584',
              '1581',
              '1035',
            ],
            159: [
              '1591',
            ],
            16: [
              '161',
            ],
            160: [
              '42',
              '72',
              '251',
              '461',
              '662',
              '681',
              '702',
              '794',
              '1054',
              '1124',
              '1382',
              '1601',
              '1844',
              '1945',
            ],
            161: [
              '1617',
              '71',
              '152',
              '311',
              '1611',
              '361',
              '452',
              '462',
              '493',
              '632',
              '1618',
              '704',
              '862',
              '934',
              '1123',
              '1615',
              '1443',
              '1612',
              '1453',
              '1523',
              '1541',
              '1616',
              '1613',
              '1614',
              '1921',
              '1831',
              '17611',
              '1843',
              '1912',
            ],
            162: [
              '232',
              '233',
              '1623',
              '1622',
              '1621',
              '1341',
              '1721',
              '1722',
            ],
            163: [
              '22',
              '41',
              '51',
              '386',
              '421',
              '533',
              '651',
              '663',
              '682',
              '772',
              '1037',
              '1091',
              '1142',
              '1181',
              '1191',
              '1282',
              '1321',
              '1372',
              '1704',
              '17613',
              '1812',
            ],
            164: [
              '1641',
              '1613',
            ],
            165: [
              '1651',
              '1652',
              '1242',
            ],
            166: [
              '1661',
            ],
            167: [
              '1673',
              '1672',
              '1671',
            ],
            168: [
              '583',
              '1681',
            ],
            169: [
              '1691',
            ],
            17: [
              '171',
              '172',
              '173',
              '174',
              '175',
              '961',
              '502',
            ],
            170: [
              '12',
              '91',
              '257',
              '1703',
              '703',
              '843',
              '1083',
              '1702',
              '1281',
              '1701',
              '1461',
              '1475',
              '1573',
              '1704',
              '1763',
            ],
            171: [
              '1711',
              '1712',
            ],
            172: [
              '1721',
              '1722',
            ],
            173: [
              '1731',
            ],
            174: [
              '1741',
              '1742',
            ],
            175: [
              '1751',
            ],
            176: [
              '1766',
              '1765',
              '17612',
              '1769',
              '1761',
              '1768',
              '1762',
              '742',
              '1764',
              '1241',
              '1322',
              '17610',
              '1767',
              '1543',
              '1614',
              '17611',
              '17613',
              '1763',
              '1801',
              '1887',
            ],
            177: [
              '673',
              '852',
              '1131',
              '1771',
            ],
            178: [
              '1784',
              '1785',
              '1781',
              '1782',
              '1787',
              '1783',
              '1451',
              '1786',
            ],
            179: [
              '1793',
              '1792',
              '1791',
            ],
            18: [
              '181',
              '581',
            ],
            180: [
              '1802',
              '1801',
            ],
            181: [
              '242',
              '393',
              '1811',
              '466',
              '501',
              '7010',
              '722',
              '793',
              '813',
              '873',
              '1088',
              '1313',
              '1383',
              '1394',
              '1812',
            ],
            182: [
              '1822',
              '1821',
            ],
            183: [
              '1444',
              '1831',
            ],
            184: [
              '821',
              '881',
              '971',
              '1842',
              '1841',
              '1591',
              '1844',
              '1843',
              '1751',
            ],
            185: [
              '1851',
              '1852',
              '1853',
            ],
            186: [
              '1861',
              '601',
              '1895',
            ],
            187: [
              '1872',
              '1871',
              '1562',
            ],
            188: [
              '1884',
              '1881',
              '1882',
              '1885',
              '1888',
              '1886',
              '1883',
              '1616',
              '1887',
            ],
            189: [
              '1894',
              '1891',
              '1892',
              '1893',
              '1895',
            ],
            19: [
              '191',
            ],
            190: [
              '771',
              '1901',
              '1731',
            ],
            191: [
              '73',
              '1911',
              '151',
              '463',
              '494',
              '1913',
              '631',
              '711',
              '791',
              '812',
              '831',
              '1101',
              '1914',
              '1386',
              '1912',
              '1915',
            ],
            192: [
              '534',
              '1922',
              '1923',
              '672',
              '691',
              '695',
              '875',
              '1924',
              '1143',
              '1223',
              '1312',
              '1601',
              '1921',
              '1771',
              '1791',
            ],
            193: [
              '1932',
              '1931',
              '1933',
            ],
            194: [
              '1941',
              '1942',
              '1943',
              '1944',
              '1052',
              '1945',
              '1915',
            ],
            195: [
              '1951',
              '1952',
              '1953',
              '1553',
            ],
            2: [
              '21',
              '22',
              '23',
              '24',
              '25',
              '1617',
            ],
            20: [
              '202',
              '201',
              '203',
              '204',
              '1243',
              '431',
            ],
            21: [
              '211',
              '212',
              '213',
              '1522',
              '381',
            ],
            22: [
              '221',
            ],
            23: [
              '231',
              '232',
              '233',
            ],
            24: [
              '241',
              '242',
              '401',
              '532',
              '612',
              '1861',
              '1161',
              '1641',
            ],
            25: [
              '82',
              '92',
              '203',
              '256',
              '257',
              '258',
              '251',
              '252',
              '253',
              '254',
              '255',
              '1462',
              '1574',
            ],
            26: [
              '261',
              '262',
              '952',
            ],
            27: [
              '271',
              '382',
            ],
            28: [
              '281',
            ],
            29: [
              '172',
              '291',
              '1555',
              '1483',
            ],
            3: [
              '31',
            ],
            30: [
              '301',
            ],
            31: [
              '312',
              '311',
              '1611',
            ],
            32: [
              '321',
              '322',
              '1397',
            ],
            33: [
              '331',
              '332',
              '1081',
            ],
            34: [
              '341',
              '342',
            ],
            35: [
              '351',
            ],
            36: [
              '361',
              '362',
              '1442',
              '1884',
            ],
            37: [
              '371',
            ],
            38: [
              '381',
              '382',
              '351',
              '384',
              '385',
              '386',
              '387',
              '383',
              '641',
              '1291',
            ],
            39: [
              '322',
              '391',
              '392',
              '393',
              '394',
              '395',
              '1811',
              '1623',
              '872',
              '1673',
              '573',
              '1582',
              '1311',
            ],
            4: [
              '25',
              '41',
              '42',
              '1766',
              '911',
            ],
            40: [
              '401',
            ],
            41: [
              '411',
            ],
            42: [
              '421',
              '422',
              '1316',
            ],
            43: [
              '434',
              '433',
              '431',
              '432',
              '1765',
            ],
            44: [
              '442',
              '441',
              '443',
            ],
            45: [
              '451',
              '452',
            ],
            46: [
              '464',
              '465',
              '466',
              '461',
              '462',
              '463',
            ],
            47: [
              '471',
            ],
            48: [
              '481',
              '482',
              '483',
            ],
            49: [
              '491',
              '492',
              '493',
              '494',
            ],
            5: [
              '51',
              '81',
              '434',
              '1062',
              '312',
              '202',
            ],
            50: [
              '502',
              '394',
              '501',
              '503',
              '1192',
              '511',
            ],
            51: [
              '95',
              '122',
              '213',
              '255',
              '331',
              '471',
              '511',
              '512',
              '513',
              '1122',
              '1894',
              '871',
              '17612',
              '941',
              '1651',
              '1013',
              '1494',
              '1785',
              '602',
              '922',
              '1151',
            ],
            52: [
              '111',
              '271',
              '521',
              '522',
              '931',
              '1741',
              '1071',
            ],
            53: [
              '24',
              '124',
              '532',
              '258',
              '342',
              '387',
              '422',
              '491',
              '513',
              '531',
              '533',
              '534',
              '1473',
              '1793',
              '1922',
              '1412',
              '902',
              '1222',
              '585',
              '1482',
              '721',
              '1554',
              '851',
              '1491',
              '921',
              '1881',
              '671',
              '1314',
              '1891',
              '1445',
              '876',
              '1262',
              '1583',
              '1712',
              '1012',
              '1524',
              '1781',
              '1271',
              '1913',
              '1403',
            ],
            54: [
              '61',
              '262',
              '541',
              '1872',
              '1251',
              '1172',
              '951',
              '696',
              '1561',
            ],
            55: [
              '551',
            ],
            56: [
              '561',
            ],
            57: [
              '573',
              '571',
              '572',
              '1032',
            ],
            58: [
              '581',
              '585',
              '582',
              '583',
              '584',
            ],
            59: [
              '591',
            ],
            6: [
              '61',
              '62',
            ],
            60: [
              '602',
              '601',
              '603',
            ],
            61: [
              '612',
              '611',
              '1923',
            ],
            62: [
              '291',
              '512',
              '541',
              '1392',
              '723',
              '1315',
              '1942',
            ],
            63: [
              '631',
              '632',
              '633',
            ],
            64: [
              '641',
            ],
            65: [
              '94',
              '175',
              '201',
              '332',
              '651',
              '1472',
              '933',
              '1542',
              '1703',
              '1454',
              '1551',
              '1618',
              '1525',
              '694',
              '1782',
              '1086',
              '1471',
            ],
            66: [
              '661',
              '662',
              '663',
              '1943',
              '1882',
            ],
            67: [
              '256',
              '252',
              '253',
              '671',
              '582',
              '672',
              '673',
              '1792',
              '1411',
              '1133',
              '1584',
              '692',
              '693',
              '731',
              '1787',
              '1406',
              '1087',
            ],
            68: [
              '231',
              '681',
              '682',
              '1652',
              '1769',
              '1245',
              '1885',
            ],
            69: [
              '181',
              '696',
              '584',
              '694',
              '692',
              '693',
              '691',
              '695',
              '697',
              '698',
              '699',
              '1681',
              '1531',
              '733',
            ],
            7: [
              '71',
              '72',
              '73',
            ],
            70: [
              '706',
              '123',
              '131',
              '281',
              '301',
              '503',
              '551',
              '591',
              '603',
              '661',
              '704',
              '705',
              '7010',
              '707',
              '708',
              '709',
              '701',
              '702',
              '703',
              '1761',
              '1892',
              '1224',
              '1193',
              '1041',
              '1301',
              '1493',
              '1944',
              '1691',
              '991',
            ],
            71: [
              '711',
              '712',
              '1768',
            ],
            72: [
              '721',
              '723',
              '722',
              '1393',
              '1762',
            ],
            73: [
              '731',
              '733',
              '732',
              '734',
            ],
            74: [
              '741',
              '742',
            ],
            75: [
              '751',
              '752',
            ],
            76: [
              '31',
              '142',
              '161',
              '761',
              '1521',
              '861',
              '1261',
              '1951',
            ],
            77: [
              '771',
              '772',
              '1888',
            ],
            78: [
              '781',
            ],
            79: [
              '791',
              '792',
              '793',
              '794',
              '795',
            ],
            8: [
              '81',
              '82',
              '433',
            ],
            80: [
              '801',
              '1661',
            ],
            81: [
              '811',
              '812',
              '813',
              '814',
            ],
            82: [
              '821',
            ],
            83: [
              '831',
            ],
            84: [
              '391',
              '841',
              '842',
              '843',
              '844',
              '845',
              '1381',
              '1391',
            ],
            85: [
              '101',
              '851',
              '852',
              '853',
              '1572',
              '891',
              '1932',
              '1501',
            ],
            86: [
              '861',
              '862',
              '863',
            ],
            87: [
              '872',
              '871',
              '876',
              '571',
              '873',
              '874',
              '875',
              '1399',
              '1672',
              '1581',
            ],
            88: [
              '881',
            ],
            89: [
              '891',
            ],
            9: [
              '91',
              '92',
              '93',
              '94',
              '95',
              '112',
              '706',
              '1085',
            ],
            90: [
              '902',
              '611',
              '901',
              '1924',
            ],
            91: [
              '911',
              '191',
              '221',
              '707',
              '912',
              '1511',
              '1231',
            ],
            92: [
              '922',
              '921',
              '842',
            ],
            93: [
              '931',
              '933',
              '932',
              '934',
            ],
            94: [
              '941',
            ],
            95: [
              '62',
              '952',
              '951',
            ],
            96: [
              '961',
              '395',
              '482',
              '981',
              '1001',
              '1021',
            ],
            97: [
              '971',
            ],
            98: [
              '481',
              '981',
              '1023',
            ],
            99: [
              '991',
            ],
          },
        ],
        [
          'addedEdges', [
            '123',
          ]
        ]
      ]
    )
  })
})

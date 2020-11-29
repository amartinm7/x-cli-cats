// eslint-disable-next-line import/namespace
const assert = require('assert')
const GetCategoryPath = require('../../src/commands/GetCategoryPath')

// eslint-disable-next-line no-unused-vars

console.log('welcome! GetCategoryPath test')
/* eslint-disable camelcase */
describe('Get category path', function() {
  describe('getCategoryPathWithParentAndDetails', function() {
    it.skip('should return the audi category path', function() {
      // const expectedCategoryPath = [10, 1, 6, 0]
      const categoryId = '802'
      const actualCategoryPath = new GetCategoryPath().getCategoryPathWithParentAndDetails(
        {
          categoryId,
          jsonFile: require('./categories.json'),
          numOfLevelsInCategoryPath: 3
        }
      )
      // expect(actualCategoryPath).toEqual(expectedCategoryPath)
      expect(actualCategoryPath.length).toEqual(35)
    })
    it.skip('should return the recxx category path', function() {
      // const expectedCategoryPath = [10, 1, 6, 0]
      const categoryId = '47'
      const actualCategoryPath = new GetCategoryPath().getCategoryPathWithParentAndDetails(
        {
          categoryId,
          jsonFile: require('./categories.json'),
          numOfLevelsInCategoryPath: 2
        }
      )
      // expect(actualCategoryPath).toEqual(expectedCategoryPath)
      expect(actualCategoryPath.length).toEqual(22)
    })
  })
  describe('applyPredicates', function() {
    it.skip('should return the axxx category path', function() {
      const category = {
        type: 'XXX',
        id: '802',
        name: 'AXXX',
        levels: {
          first: 10000,
          second: 100,
          third: 600,
          fourth: 0
        }
      }
      const itemCategory = {
        type: 'XXX',
        id: '10XXX',
        name: 'AXX S2',
        levels: {
          first: 10000,
          second: 100,
          third: 600,
          fourth: 100
        }
      }
      const isIncluded = new GetCategoryPath()._applyPredicates({
        itemCategory,
        category,
        numOfLevelsInCategoryPath: 3
      })
      expect(isIncluded).toEqual(true)
    })
    it.skip('should not return the Axx category path', function() {
      const category = {
        type: 'XXX',
        id: '802',
        name: 'Axxx',
        levels: {
          first: 10000,
          second: 1000,
          third: 600,
          fourth: 0
        }
      }
      const itemCategory = {
        type: 'XXX',
        id: '10XXX',
        name: 'Axxx S2',
        levels: {
          first: 10000,
          second: 19999,
          third: 600,
          fourth: 100
        }
      }
      const isIncluded = new GetCategoryPath()._applyPredicates({
        itemCategory,
        category,
        numOfLevelsInCategoryPath: 4
      })
      expect(isIncluded).toEqual(false)
    })
  })
  describe('getCategoryPath', function() {
    it.skip('should return the axxx category path', function() {
      // const expectedCategoryPath = [10, 1, 6, 0]
      const categoryId = '802'
      const actualCategoryPath = new GetCategoryPath().getCategoryPath({
        categoryId,
        jsonFile: require('./categories.json')
      })
      // expect(actualCategoryPath).toEqual(expectedCategoryPath)
      expect(actualCategoryPath.length).toEqual(34)
    })
    it.skip('should return the recxxx category path', function() {
      // const expectedCategoryPath = [10, 1, 6, 0]
      const categoryId = '47'
      const actualCategoryPath = new GetCategoryPath().getCategoryPath({
        categoryId,
        jsonFile: require('./categories.json')
      })
      // expect(actualCategoryPath).toEqual(expectedCategoryPath)
      expect(actualCategoryPath.length).toEqual(21)
    })
  })
})

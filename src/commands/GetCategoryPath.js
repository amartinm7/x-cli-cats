class GetCategoryPath {
  /**
   * transform category, remove unnecessary attributes
   * @param category
   * @returns {{name: *, id: *, levels: *}}
   * @private
   */
  _transform(category) {
    const { id, name, levels } = category
    return { id, name, levels }
  }

  /**
   * predicates to compare by level
   * @type {{third: function(*, *, *): boolean, fourth: function(*, *, *): boolean, first: function(*, *, *): boolean, second: function(*, *, *): boolean}}
   * @private
   */
  _predicates = {
    first: (itemCategory, category, numOfLevelsInCategoryPath) => {
      return numOfLevelsInCategoryPath >= 1
        ? itemCategory.levels.first === category.levels.first
        : true
    },
    second: (itemCategory, category, numOfLevelsInCategoryPath) => {
      return numOfLevelsInCategoryPath >= 2
        ? itemCategory.levels.second === category.levels.second
        : true
    },
    third: (itemCategory, category, numOfLevelsInCategoryPath) => {
      return numOfLevelsInCategoryPath >= 3
        ? itemCategory.levels.third === category.levels.third
        : true
    },
    fourth: (itemCategory, category, numOfLevelsInCategoryPath) => {
      return numOfLevelsInCategoryPath >= 4
        ? itemCategory.levels.fourth === category.levels.fourth
        : true
    }
  }

  /**
   * apply predicates for current item category and the parent category
   * @param itemCategory current category
   * @param category parent category
   * @param numOfLevelsInCategoryPath
   * @returns true or false
   * @private
   */
  _applyPredicates({ itemCategory, category, numOfLevelsInCategoryPath }) {
    return Object.values(this._predicates)
      .map((predicate) =>
        predicate(itemCategory, category, numOfLevelsInCategoryPath)
      )
      .reduce((acc, item) => acc && item, true)
  }

  /**
   * given a categoryId and a path of a json with all categories,
   * searches all the categories which are childof of the given category using
   * the {first, second, third, fourth} predicates to compare
   * @param categoryId
   * @param jsonFile
   * @param numOfLevelsInCategoryPath
   * @returns {first, second, third, fourth}
   */
  getCategoryPathWithParentAndDetails({
    categoryId,
    jsonFile,
    numOfLevelsInCategoryPath
  }) {
    const category = jsonFile.find((category) => category.id === categoryId)
    console.log(
      'category parent used to search... ' +
        JSON.stringify(this._transform(category))
    )
    console.log(
      'levels of category parent used to search... ' +
        JSON.stringify(Object.values(category.levels))
    )
    const categoryPaths = jsonFile
      .filter((itemCategory) =>
        this._applyPredicates({
          itemCategory,
          category,
          numOfLevelsInCategoryPath
        })
      )
      .map((itemCategory) => this._transform(itemCategory))

    console.log('category length... ' + categoryPaths.length)
    console.log('categories... ' + JSON.stringify(categoryPaths))
    return categoryPaths
  }

  /**
   * given a categoryId and a path of a json with all categories,
   * searches all the categories which are childof of the given category
   * @param categoryId
   * @param jsonFile
   * @returns {first, second, third, fourth}
   */
  getCategoryPath({ categoryId, jsonFile }) {
    const categoryPaths = jsonFile
      .filter((itemCategory) => itemCategory.childOf === categoryId)
      .map((itemCategory) => Object.values(itemCategory.levels))
    // eslint-disable-next-line no-console
    console.log('categories... ' + JSON.stringify(categoryPaths))
    return categoryPaths
  }
}

module.exports = GetCategoryPath

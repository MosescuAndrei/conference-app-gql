const { getUserDataLoaders } = require('../features/user/dataLoaders')
const {getConferencesLoaders} = require('../features/conference/dataLoaders')
const {getDictionaryLoaders} = require('../features/dictionary/dataLoaders')

module.exports = dbInstance => ({
  ...getUserDataLoaders(dbInstance),
  ...getConferencesLoaders(dbInstance),
  ...getDictionaryLoaders(dbInstance)
})


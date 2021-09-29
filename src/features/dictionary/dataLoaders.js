const DataLoader = require("dataloader")

const getDictionaryLoaders = dbInstance => {
  return {
    conferenceTypeById: new DataLoader(ids =>
        dbInstance
          .select('Id', 'Name', 'Code')
          .from('DictionaryConferenceType')
          .whereIn('Id', ids)
          .then(rows => ids.map(id => rows.find(x => x.id === id)))
      ),
      categoryById: new DataLoader(ids =>
        dbInstance
          .select('Id', 'Name', 'Code')
          .from('DictionaryCategory')
          .whereIn('Id', ids)
          .then(rows => ids.map(id => rows.find(x => x.id === id)))
      ),  
    cityById: new DataLoader(ids =>
        dbInstance
          .select('Id', 'Name', 'Code')
          .from('DictionaryCity')
          .whereIn('Id', ids)
          .then(rows => ids.map(id => rows.find(row => row.id === id)))
      ),
      countyById: new DataLoader(ids =>
        dbInstance
          .select('Id', 'Name', 'Code')
          .from('DictionaryCounty')
          .whereIn('Id', ids)
          .then(rows => ids.map(id => rows.find(row => row.id === id)))
      ),
      countryById: new DataLoader(ids =>
        dbInstance
          .select('Id', 'Name', 'Code')
          .from('DictionaryCountry')
          .whereIn('Id', ids)
          .then(rows => ids.map(id => rows.find(row => row.id === id)))
      )
    
  };
};

module.exports = {getDictionaryLoaders}
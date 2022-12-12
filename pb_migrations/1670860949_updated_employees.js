migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  collection.listRule = "@request.auth.companyId = companyId.id"
  collection.viewRule = "@request.auth.companyId = companyId.id"
  collection.createRule = "@request.auth.companyId = companyId.id && @request.auth.companyId = @request.data.companyId"
  collection.updateRule = "@request.auth.companyId = companyId.id && \n@request.auth.companyId = @request.data.companyId"
  collection.deleteRule = "@request.auth.companyId = companyId.id &&\n@request.auth.companyId = @request.data.companyId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4b21lc0e9qd4rc")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})

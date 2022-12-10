migrate((db) => {
  const collection = new Collection({
    "id": "1hca2yrwobcgxjp",
    "created": "2022-12-10 06:32:44.805Z",
    "updated": "2022-12-10 06:32:44.805Z",
    "name": "jobTitles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xnnelrdz",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1hca2yrwobcgxjp");

  return dao.deleteCollection(collection);
})

migrate((db) => {
  const collection = new Collection({
    "id": "qf7yjs56mmjggq8",
    "created": "2022-12-10 06:27:53.160Z",
    "updated": "2022-12-10 06:27:53.160Z",
    "name": "employmentStatus",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3w8qfrux",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xjrkjokx",
        "name": "field",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("qf7yjs56mmjggq8");

  return dao.deleteCollection(collection);
})

```javascript
// Correct solution using $setOnInsert and $inc for handling non-existent embedded document
db.collection.updateOne( { _id: 1 }, {
  $setOnInsert: { embeddedDoc: { count: 0 } },
  $inc: { 'embeddedDoc.count': 1 }
} );
```
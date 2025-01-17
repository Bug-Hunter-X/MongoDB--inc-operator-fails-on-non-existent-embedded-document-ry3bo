```javascript
// Incorrect use of $inc operator for updating an embedded document
db.collection.updateOne( { _id: 1 }, { $inc: { 'embeddedDoc.count': 1 } } );
```
# MongoDB $inc Operator Issue with Non-Existent Embedded Documents

This repository demonstrates a common issue encountered when using the `$inc` operator in MongoDB to update fields within embedded documents. The problem arises when attempting to increment a field in an embedded document that does not yet exist.

## Problem Description
The `$inc` operator, while convenient for incrementing numeric fields, fails to handle cases where the target field doesn't exist within the document or the embedded document. This leads to unexpected behavior, often resulting in no update occurring.

## Solution
The most robust solution is to use the `$setOnInsert` and `$inc` operators together within a single update operation.  This ensures that if the embedded document doesn't exist, it's created, and if it does, the field is incremented.

## Setup Instructions
1. Clone this repository.
2. Make sure you have MongoDB installed and running.
3. Populate the database with test data or run the provided Javascript code
4. Execute the provided test scripts to reproduce and solve the problem.
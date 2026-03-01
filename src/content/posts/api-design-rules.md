---
title: "API Design: The Rules That Work"
description: "Practical guidelines for building APIs developers actually want to use."
pubDate: 2024-02-28
tags: ["api", "rest", "backend", "design"]
---

An API is a contract. Break it, and developers will leave.

## The Basics

**Consistent URLs**

```
# Good
GET /orders
GET /orders/123
POST /orders

# Bad
GET /getOrders
GET /order/123
POST /createOrder
```

**Consistent methods**

- GET - retrieve
- POST - create
- PUT - replace
- PATCH - modify
- DELETE - remove

**Consistent responses**

```json
{
  "data": { ... },
  "meta": { "total": 100 },
  "errors": []
}
```

Same structure everywhere. Predictability is key.

## What Makes APIs Pleasant

**Version from the start** - /v1/orders. You'll need it.

**Use standard error formats**

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Email is required",
    "field": "email"
  }
}
```

**Pagination** - Don't return everything. Use limit/offset or cursor.

**Sparse fieldsets** - Let consumers pick only what they need.

**Documentation** - Examples. Error codes. Interactive if possible.

## What Makes APIs Painful

- Inconsistent naming
- Missing documentation
- Changing responses without versioning
- Confusing authentication
- Random error formats
- No pagination

## The Honest Truth

Documentation matters more than design. A well-documented mediocre API beats a perfect API nobody understands.

Build for developers. Document everything. Don't break things without warning.

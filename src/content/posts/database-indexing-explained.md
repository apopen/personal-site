---
title: "Database Indexing Explained"
description: "Why your queries are slow and how to fix them."
pubDate: 2024-06-11
tags: ["database", "performance", "indexing", "sql"]
---

Your query takes 10 seconds. It should take 10 milliseconds. Here's why.

## The Problem

Without an index, databases do a full table scan. Every row. Every time.

```sql
-- Slow: scans all 1 million rows
SELECT * FROM users WHERE email = 'test@example.com';

-- Fast: index lookup
SELECT * FROM users WHERE email = 'test@example.com';
```

## How Indexes Work

Think of a book index. Instead of reading every page to find a topic, you check the index and go straight to the page.

Databases work the same way with indexes.

## Creating Indexes

```sql
-- Index on a single column
CREATE INDEX idx_users_email ON users(email);

-- Index on multiple columns (composite)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Partial index (only where needed)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
```

## What To Index

- Columns in WHERE clauses
- Columns in JOIN conditions
- Columns in ORDER BY
- Foreign keys

## What Not To Index

- Columns rarely queried
- Low-cardinality columns (like boolean flags)
- Tables that change constantly (writes get slower)

## The Query Analyzer

```sql
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
```

This shows how your query executes. Use it. If you see "Seq Scan" on a large table, you need an index.

## The Bottom Line

Slow queries are usually missing indexes. Add them. Your users will thank you.

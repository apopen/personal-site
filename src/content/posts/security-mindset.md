---
title: "The Security Mindset"
description: "Building secure systems from the start."
pubDate: 2023-11-22
tags: ["security", "engineering", "best-practices"]
---

Security is not a feature you bolt on at the end.
It is a mindset that quietly shapes how you design, build, and operate systems.

## The Principles

**Defense in depth** - Multiple layers of security. If one fails, another protects.

**Least privilege** - Give minimum access needed. Not more. Never more.

**Assume breach** - Act like attackers are already in. Limit damage they can do.

**Fail securely** - When things break, don't expose data. Fail safely.

## Common Vulnerabilities

**Injection** - Never trust user input. Validate. Sanitize. Use parameterized queries.

```php
// ❌ SQL Injection
$query = "SELECT * FROM users WHERE id = " . $_GET['id'];

// ✅ Safe
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_GET['id']]);
```

**Authentication** - Hash passwords. Use modern algorithms. Don't roll your own.

**Sensitive data** - Encrypt at rest. Encrypt in transit. Don't log secrets.

**Dependencies** - Keep them updated. Vulnerabilities hide in libraries.

## What Works

- Regular security audits
- Automated scanning in CI/CD
- Penetration testing
- Security training for developers
- Incident response plan

## The Bottom Line

Security is everyone's job. Not just the security team's. Build it in from the start.

It's cheaper than fixing a breach.

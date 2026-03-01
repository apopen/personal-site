---
title: "The AWS Alphabet"
description: "The services you need to know. Not all of them."
pubDate: 2023-05-05
tags: ["aws", "cloud", "infrastructure", "devops"]
---

EC2, S3, RDS, Lambda, ECS, EKS, VPC, IAM, CloudFront, Route 53, SNS, SQS.

AWS has hundreds of services. Here's the ones that matter.

## The Essentials

**Compute:**
- EC2: Virtual servers
- Lambda: Serverless functions
- ECS/EKS: Containers

**Storage:**
- S3: Object storage

**Database:**
- RDS: Managed relational
- DynamoDB: Managed NoSQL
- ElastiCache: Redis/Memcached

**Networking:**
- VPC: Your private network
- CloudFront: CDN
- Route 53: DNS

**Other:**
- IAM: Access management
- CloudWatch: Monitoring

## Starting Point

```
┌─────────────────────────────────────────┐
│     Typical Startup Architecture        │
├─────────────────────────────────────────┤
│ • EC2 or ECS for application           │
│ • RDS for database                     │
│ • S3 for files                        │
│ • CloudFront for CDN                  │
│ • Route 53 for DNS                    │
│ • IAM for access control               │
└─────────────────────────────────────────┘
```

This covers 80% of applications.

## The Trap

AWS is addictive. You don't need every service. Start simple. Add as needed.

Over-engineering the infrastructure kills startups. Don't be that team.

## The Alternatives

- Google Cloud: Good for data/ML
- Azure: Good for Microsoft shops
- DigitalOcean: Simple, cheap
- Vercel/Netlify: Even simpler

Pick based on team skills and project needs. Not on what's trendy.

# 🧭 Atlas v0.1 — Navigation Contract

## Purpose

This directory defines a bounded, human-readable navigation contract for the Velantrim ecosystem.

The contract answers:

> Given a question or domain, which owning source should be opened next?

It does **not** answer:

- what is true inside that domain;
- whether an implementation is current;
- whether a runtime change is authorized;
- whether a research proposal is Canon;
- whether one project may mutate another project's state.

```text
ROUTING ≠ AUTHORITY
ROUTING ≠ DOMAIN OWNERSHIP
ROUTING ≠ IMPLEMENTATION
ROUTING ≠ CANON
```

## v0.1 scope

The first bounded correction is the distinction between:

```text
GENERAL / SUBSTRATE-NEUTRAL COGNITION
≠
MENTAURY SOUL OWNER-LOCAL COGNITION / IDENTITY
```

General questions about perception, understanding, memory/experience, endogenous cognition, focus, valuation, motivation, agency and revision route to the **Unified Cognitive System Architecture**.

Questions about claims, beliefs, self/identity, relationships, commitments and bounded owner-local cognition state route to **Mentaury Soul**.

Ambiguous `cognition` queries require disambiguation rather than an automatic Soul default.

## Files

- [`ROUTING.md`](ROUTING.md) — human-readable routing map.
- [`SOURCE_POLICY.md`](SOURCE_POLICY.md) — authority and freshness rules.
- [`NON_CONFLATION.md`](NON_CONFLATION.md) — boundaries the router must preserve.
- [`SYNC_POLICY.md`](SYNC_POLICY.md) — future GitHub → Notion projection policy.
- [`IMPLEMENTATION_STATUS.md`](IMPLEMENTATION_STATUS.md) — implemented vs integrated vs authorized status matrix.
- [`../../atlas/routes.json`](../../atlas/routes.json) — machine-readable route contract.
- [`../../atlas/projects.json`](../../atlas/projects.json) — destination registry.
- [`../../atlas/sources.json`](../../atlas/sources.json) — source registry.

## Status semantics

`WORKING_NAVIGATION_CONTRACT` means the routing structure is intended to be versioned and reviewable, but it does not promote any destination content to a stronger epistemic or authority status.

```text
ROUTE STABILITY ≠ CLAIM STABILITY
SOURCE POINTER ≠ SOURCE CONTENT
MERGED ROUTE ≠ PRODUCTION AUTHORIZATION
```

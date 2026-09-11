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

The navigation contract can also register **research evidence routes** when a research question spans multiple surfaces. A research route does not copy the result into Atlas as new authority. It points separately to exact executable evidence, current interpretation, and long-form reasoning/history.

```text
RESEARCH ROUTE ≠ RESEARCH TRUTH
ATLAS SUMMARY ≠ FROZEN ARTIFACT
LAB RESULT ≠ PRODUCT AUTHORIZATION
```

The first detailed example is the Graphiti Fractal retrieval-relevance thread, whose FM-13 → FM-16 history is routed through [`RESEARCH_EVIDENCE_DIRECTORY.md`](RESEARCH_EVIDENCE_DIRECTORY.md).

## Files

- [`ROUTING.md`](ROUTING.md) — human-readable routing map.
- [`SOURCE_POLICY.md`](SOURCE_POLICY.md) — authority and freshness rules.
- [`NON_CONFLATION.md`](NON_CONFLATION.md) — boundaries the router must preserve.
- [`SYNC_POLICY.md`](SYNC_POLICY.md) — future GitHub → Notion projection policy.
- [`IMPLEMENTATION_STATUS.md`](IMPLEMENTATION_STATUS.md) — implemented vs integrated vs authorized status matrix.
- [`RESEARCH_EVIDENCE_DIRECTORY.md`](RESEARCH_EVIDENCE_DIRECTORY.md) — detailed research-source routing, including why a research question changed and which surface owns exact evidence vs narrative/history.
- [`../../atlas/routes.json`](../../atlas/routes.json) — machine-readable route contract.
- [`../../atlas/projects.json`](../../atlas/projects.json) — destination registry.
- [`../../atlas/sources.json`](../../atlas/sources.json) — source registry.

## Research evidence routing

When a research result exists across GitHub, Notion and Google Drive, read it in layers rather than treating every copy as equivalent:

```text
exact branch / exact commit
  > frozen run artifacts + tests
  > experiment code
  > current research status / closure ledger
  > long-form reasoning/history
  > Atlas summary
```

Example — Graphiti Fractal retrieval relevance:

- exact FM-13–FM-16 evidence → `velantrian/Graphiti_fractal_lab`, exact experiment branch and `artifacts/memoryops/run_00X/`;
- reconciled FM-16 interpretation → project-local closure ledger;
- why the question evolved → Retrieval Relevance Track + long-form reasoning log + Google Drive research narrative;
- quick human/AI navigation → Notion research track and Atlas evidence directory;
- production/runtime truth → verify the separate `velantrian/Graphiti_fractal` product repository; never infer activation from lab evidence.

This preserves both the **history of reasoning** and the **authority boundary** of the evidence.

## Status semantics

`WORKING_NAVIGATION_CONTRACT` means the routing structure is intended to be versioned and reviewable, but it does not promote any destination content to a stronger epistemic or authority status.

```text
ROUTE STABILITY ≠ CLAIM STABILITY
SOURCE POINTER ≠ SOURCE CONTENT
MERGED ROUTE ≠ PRODUCTION AUTHORIZATION
```

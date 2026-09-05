# 🗺️ Velantrim Atlas App

Velantrim Atlas is the navigation surface for the Velantrim ecosystem.

This repository contains two different things that must not be conflated:

1. the Atlas application UI;
2. a small, versioned navigation contract for AI and humans.

The navigation contract answers **where to go next**. It does not own the truth of the destination domain.

```text
ATLAS ROUTE ≠ DOMAIN TRUTH
ATLAS POINTER ≠ OWNERSHIP
ATLAS INDEX ≠ CANON
NAVIGATION FIX ≠ ARCHITECTURE REDESIGN
```

## Versioned Atlas contract

- Human-readable orientation: [`docs/atlas/`](docs/atlas/README.md)
- Machine-readable routes: [`atlas/routes.json`](atlas/routes.json)
- Destination registry: [`atlas/projects.json`](atlas/projects.json)
- Source registry: [`atlas/sources.json`](atlas/sources.json)

## Core routing correction in v0.1

| Question/domain | Default route |
| --- | --- |
| General substrate-neutral cognition, perception, understanding, memory/experience, endogenous cognition, focus, valuation, motivation, agency, revision | 🧠 Unified Cognitive System Architecture |
| Claims, beliefs, self/identity, relationships, commitments, owner-local cognition state | 🌀 Mentaury Soul |
| Trusted memory, evidence, provenance, bounded Canon admission | 💠 Crystal |
| Semantic invariants and substrate-neutral meaning | 🧬 Native Kernel |
| Cross-domain semantic composition and non-escalation | 🪁 Mentaury Kernel |
| Orchestration, providers, tools, bounded execution | 🗿 Titan |
| Process continuity across inference/context/runtime replacement | 🌎 Continuum |
| Model/reasoning/tool routing and assurance research | 🚀 Cognitive OS |

Ambiguous uses of the word `cognition` must **not** default directly to Mentaury Soul. The router should first distinguish neutral cognitive architecture from Soul's owner-local beliefs/identity scope.

## Source policy

Atlas is navigation-only. For actual current truth, follow the destination's owning source. In particular, the current working master for the Unified Cognitive System Architecture remains Google Drive; its Notion page is a human-readable slice.

See [`docs/atlas/SOURCE_POLICY.md`](docs/atlas/SOURCE_POLICY.md).

## Notion sync

Notion synchronization is intentionally **not implemented** in v0.1. The intended future direction is one-way projection of stable routing data from GitHub into the Notion Atlas, with drift detection and explicit verification.

```text
GITHUB ROUTING CONTRACT
        ↓
DERIVED NOTION VIEW
```

Bidirectional independent authority is not intended.

See [`docs/atlas/SYNC_POLICY.md`](docs/atlas/SYNC_POLICY.md).

## Status

`v0.1 = BOUNDED NAVIGATION CONTRACT`

This does not authorize runtime changes, project ownership changes, Canon changes, or a new cognitive layer.

# 🔎 Source Policy

## 1. Atlas authority is navigation-only

The Atlas may determine **where to look next**. It must not silently inherit the authority of the destination.

```text
ROUTE SELECTION ≠ CLAIM VALIDATION
ROUTE SELECTION ≠ OWNER AUTHORITY
ROUTE SELECTION ≠ ACTION AUTHORIZATION
```

## 2. Destination truth remains owner-local

After routing, use the owning project's current source for substantive claims.

Examples:

- current implementation/runtime state → live owning GitHub / Current State;
- versioned semantic contracts → owning GitHub documentation;
- research status → the declared current research source;
- historical explanation → archive/history source, never as current state by default.

## 3. Unified Cognitive System Architecture special case

For the Unified Cognitive System Architecture:

- Google Drive Working Master is the current evolving working source;
- the Notion Unified Architecture page is a human-readable stable slice;
- the historical archive explains prior formulations but does not define current architecture.

The Atlas route points to this architecture; it does not become its owner.

## 4. GitHub Atlas v0.1 role

After merge, `atlas/*.json` and `docs/atlas/*` are the versioned routing contract for Atlas navigation only.

They do not override destination content.

```text
VERSIONED ROUTE ≠ VERSIONED DOMAIN TRUTH
MERGED POINTER ≠ MERGED CLAIM
```

## 5. Freshness

A newer modification timestamp is not sufficient to establish authority.

```text
NEWER MODIFIED_AT ≠ CURRENT AUTHORITY
```

When route metadata and destination state disagree, re-open the owning current source before making substantive claims.

## 6. Open-world rule

Failure to find a destination or source in the Atlas does not prove that it does not exist.

```text
NOT ROUTED ≠ ABSENT
NOT INDEXED ≠ NON-EXISTENT
```

The v0.1 registry is intentionally bounded and may expand without implying that newly added projects were previously invalid or nonexistent.

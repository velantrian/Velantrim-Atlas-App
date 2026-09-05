# 🔄 GitHub → Notion Sync Policy

## Status

`SYNC_STATUS = NOT IMPLEMENTED / NOT AUTHORIZED`

This document defines the intended future direction only. It does not create a running synchronization mechanism.

```text
SYNC DESIGN ≠ SYNC IMPLEMENTATION
SYNC IMPLEMENTATION ≠ AUTHORIZATION TO WRITE
```

## Intended direction

For Atlas routing metadata, the preferred future flow is:

```text
GitHub versioned routing contract
            ↓
      reviewed / merged
            ↓
 derived human-readable projection
            ↓
        Notion Atlas
```

The goal is to avoid two independently edited routing authorities.

## Why one-way projection

GitHub provides:

- diffable changes;
- reviewable pull requests;
- rollback history;
- stable machine-readable files;
- easier automated validation.

Notion provides:

- convenient human-readable navigation;
- visual browsing;
- contextual explanation.

These roles are complementary.

## Future sync requirements

A future sync implementation should, at minimum:

1. read only merged Atlas routing data from GitHub;
2. update only designated Notion routing blocks;
3. preserve unrelated Notion content;
4. fail closed if the expected target block cannot be identified;
5. record the Git commit SHA used for projection;
6. verify the resulting Notion content after write;
7. report drift without silently overwriting ambiguous human edits;
8. never propagate destination-domain content through the Atlas sync.

## Drift rule

```text
NOTION DRIFT ≠ DOMAIN DRIFT
ROUTE DRIFT ≠ PERMISSION TO REWRITE OWNER CONTENT
```

If Notion differs from the merged GitHub route contract, the sync process should flag the routing difference and update only the bounded routing projection after explicit authorization.

## No bidirectional authority

The intended model is not an unconstrained two-way merge.

```text
GITHUB ROUTE CONTRACT ↔ NOTION INDEPENDENT ROUTE AUTHORITY   ❌
GITHUB ROUTE CONTRACT → NOTION DERIVED VIEW                 ✅
```

This policy applies to Atlas navigation metadata only. It does not establish GitHub as the universal authority for all Velantrim documentation.

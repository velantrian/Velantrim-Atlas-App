# 🔬 Research & Evidence Directory

## Purpose

This document is a **navigation and explanation surface** for research threads that span multiple evidence locations.

It answers:

> If an AI or human asks about a research result, where should they look for the exact experiment, the current interpretation, and the long-form reasoning that led there?

It does **not** replace those sources.

```text
ATLAS ROUTE ≠ RESEARCH TRUTH
RESEARCH NARRATIVE ≠ EXECUTABLE EVIDENCE
EXECUTABLE EVIDENCE ≠ RUNTIME AUTHORIZATION
```

For research claims, prefer:

```text
exact branch / exact commit
  > frozen run artifacts + tests
  > experiment code
  > current research status / closure ledger
  > long-form reasoning/history
  > Atlas summary
```

---

# 🕸 Graphiti Fractal — Retrieval Relevance · FM-13 → FM-16

## When to use this route

Open this route when the question concerns:

- Graphiti Fractal retrieval relevance;
- CrossEncoder or embedding ranking;
- hard negatives;
- global relevance thresholds;
- Honest Empty / no-relevant-memory qualification;
- narrow/direct vs broad/exploratory relevance;
- multi-hop components vs direct answers;
- FM-13, FM-14, FM-15 or FM-16;
- why the relevance research question changed over time.

This route points to the **research lab**, not to product/runtime authority.

## Why this research thread exists

The observed problem was not simply “memory is broken.” Earlier bounded lab work had already produced separate positive evidence for persistence/reopen, temporal supersession and provenance behavior.

The problem appeared higher in the stack: retrieval could return the **best available candidates** even when those candidates did not actually answer the query.

That forced the following distinction:

```text
BEST AVAILABLE CANDIDATE ≠ RELEVANT ANSWER
RANK 1 ≠ ANSWER
SEARCH RETURNED SOMETHING ≠ SEARCH FOUND AN ACCEPTABLE ANSWER
```

So the research question moved from storage correctness toward **query-conditioned relevance qualification**: after retrieval produces candidates, can the system distinguish what actually answers the information need and reject what does not?

## FM-13 — measure the real path before changing it

A CrossEncoder object already existed in the code surface, so it would have been easy to assume that it participated in active retrieval.

FM-13 instrumented the actual measured path instead of relying on architectural expectation.

Bounded result:

- BM25 introduced broad candidates;
- RRF preserved measured noise;
- CrossEncoder calls on that path were zero;
- the Zephyr negative-control query returned unrelated facts.

This weakened the explanation “the CrossEncoder is active but performs badly.” The experiment instead showed that the tested path lacked a semantic rejection step strong enough to eliminate those candidates.

Important boundary:

```text
BROAD CANDIDATE GENERATION ≠ BUG BY ITSELF
HIGH RECALL ≠ FINAL ANSWER QUALITY
```

## FM-14 — test the cheaper explanation: deterministic embeddings

The next competing explanation was that the poor result was mainly an artifact of deterministic/fake embeddings.

FM-14 changed that one variable and used real `BAAI/bge-small-en-v1.5` semantic embeddings.

Result:

- semantic geometry became more realistic/useful;
- ranking behavior improved;
- but Zephyr false positives and insufficient final filtering remained.

Therefore the bounded conclusion was **not** “embeddings are useless.” It was:

```text
REAL EMBEDDING SIGNAL = YES
REAL EMBEDDINGS ALONE SUFFICIENT FOR FINAL QUALIFICATION = NOT ESTABLISHED
```

This weakened the hypothesis that the entire problem was caused only by deterministic embeddings.

## FM-15 — isolate a real pairwise CrossEncoder signal

FM-15 deliberately avoided replacing the full Graphiti retrieval recipe. Instead, it directly scored a frozen set of query↔fact pairs with local `BAAI/bge-reranker-v2-m3` through the Graphiti `BGERerankerClient` path.

The pairwise signal was useful: the model could often rank direct-answer facts above hard negatives.

However, a later comparison showed that the real embedding baseline on the same tiny pair matrix was also mathematically separable. Therefore the safe interpretation became:

```text
PAIRWISE_CE_SIGNAL = CONFIRMED_ON_FIXTURE
NEW_SEPARABILITY_VS_EMBEDDINGS = NOT_ESTABLISHED
GLOBAL_THRESHOLD = NOT ESTABLISHED
PRODUCTION_GATE = NOT AUTHORIZED
```

Broad-query scores were also much lower in absolute magnitude than some narrow-query scores. That made it unsafe to infer a universal threshold from the tiny fixture.

This is why FM-16 existed: not to “tune a nicer threshold,” but to test whether an absolute global gate generalized under a harder frozen task.

## Why FM-16 needed protocol hardening first

The first FM-16 protocol draft was independently reviewed before scoring and received `REQUEST_CHANGES_BEFORE_SCORING`.

The review found that several concepts had to be separated before a result could be scientifically interpretable:

```text
RELEVANT ANSWER ≠ SUPPORTS POSITIVE PROPOSITION
DIRECT ANSWER ≠ MULTI-HOP COMPONENT ≠ RELATED CONTEXT
NARROW FACTOID RELEVANCE ≠ BROAD ASSOCIATIVE RELEVANCE
PAIRWISE RANKING ≠ ABSOLUTE GLOBAL QUALIFICATION
SCORER FAILURE ≠ HONEST EMPTY
```

Examples of why this mattered:

- a negative answer can still be the direct relevant answer to a yes/no question;
- a fact can be necessary for multi-hop reasoning without directly answering the query by itself;
- a broad “tell me about X” query can legitimately accept a wider set than a narrow factoid question;
- a scorer failure must never be counted as semantic abstention;
- if no calibration threshold satisfies the frozen constraints, the honest result must be `theta = null`, not a post-hoc fallback.

This protocol-review history is part of the research evidence because it explains why the task definition changed before execution.

## FM-16 / run_007 — what was actually established

FM-16 was executed as a bounded experiment with entity-disjoint CAL/TEST splits, hard-negative strata, broad queries and no-answer queries.

Independent forensic reviews later recomputed the frozen score artifacts and converged on the numerical core.

### Ranking metrics

```text
CE CAL MRR        ≈ 0.9583
Embedding CAL MRR ≈ 0.9167
CE TEST MRR       ≈ 0.9167
Embedding TEST MRR≈ 0.8611
```

### Global-threshold search

```text
CE threshold candidates        = 1599
CE feasible thresholds         = 0
CE theta                        = null

Embedding threshold candidates = 1601
Embedding feasible thresholds  = 0
Embedding theta                 = null
```

So the strongest safe claim is:

> Under the frozen FM-16 corpus, models and preregistered mixed-query feasibility constraints, neither the raw BGE CrossEncoder score nor the embedding score supports one feasible global threshold. CE nevertheless shows a stronger pairwise ranking signal than the embedding baseline on the frozen task.

## Ranking vs qualification — the central lesson

FM-16 made one distinction particularly important:

```text
RANKING
“Which candidate is better than the others?”

≠

QUALIFICATION
“Is this candidate good enough to accept at all?”
```

CrossEncoder improved the first axis.

It did **not** produce a single raw-score boundary that satisfied the entire frozen mixed-query qualification contract.

Therefore the original `NO_MATERIAL_GAIN` label is too broad if read as an overall CE-vs-embedding conclusion.

Use the decomposed interpretation:

```text
CE_VS_EMBEDDING_RANKING = CE_BETTER
CE_VS_EMBEDDING_GLOBAL_QUALIFICATION = BOTH_INFEASIBLE
```

## Strict H1 interpretation

A later hardened interpretation defines strict H1 as positive separation margin for every applicable answerable query.

Under that stricter all-query definition:

```text
RETROSPECTIVE_STRICT_H1_CE = FAIL
RETROSPECTIVE_STRICT_H1_EMBEDDING = FAIL
```

This does not erase the observed ranking signal.

```text
STRICT H1 FAIL ≠ PAIRWISE SIGNAL USELESS
```

## Broad-query heterogeneity

FM-16 intentionally placed narrow/direct, paraphrase, broad/exploratory and no-answer queries under one raw global threshold.

Some broad-query gold facts live at much lower absolute CE scores than some no-answer candidate maxima. That overlap is a real reason the joint global-threshold constraint becomes difficult.

Therefore:

```text
GLOBAL THRESHOLD NOT FEASIBLE ON THIS FROZEN MIXED TASK
≠
GLOBAL THRESHOLDS NEVER WORK
```

The experiment is valid for its mixed-task question. Generalization to a more homogeneous direct-answer-only qualification task remains limited/unknown.

## Honest Empty

FM-16 did not solve Honest Empty.

`theta = null` means the tested global qualification mechanism is unavailable under the frozen constraints. It does not mean the system has proven that no relevant memory exists.

```text
NO_RELEVANT_MEMORY ≠ KNOWLEDGE ABSENCE
NO_RELEVANT_MEMORY ≠ FALSE
NO_RELEVANT_MEMORY ≠ NOT TRUE
SCORER FAILURE ≠ HONEST EMPTY
```

## Held-out chronology limitation

The threshold-selection function itself uses calibration data only, and there is no evidence that TEST results changed the selected `theta/null` decision.

However, the executable `run_fm16()` order computes TEST scores before the threshold/null freeze.

Therefore the most precise record is:

```text
CAL_ONLY_THRESHOLD_SELECTION = YES
EVIDENCE_TEST_CHANGED_THETA = NO
THRESHOLD_APPLICATION_TO_TEST_AFTER_FREEZE = YES
STRICT_BLIND_TEST_ORDER = NOT SATISFIED UNDER LATER HARDENED STANDARD
```

Do not rewrite run_007 retroactively to make its chronology cleaner. The sequencing limitation should remain visible in the historical record.

## CQ11 / TQ11 apparent gold mismatch

The experiment source initially contains five-item gold literals for CQ11/TQ11, but later executable adjustment intentionally replaces those with the effective three-item frozen gold before the experiment runs.

The preregistration/scoring artifacts use the effective adjusted set.

Therefore:

```text
INITIAL SOURCE LITERAL ≠ FINAL EFFECTIVE GOLD
FINAL EFFECTIVE GOLD = FROZEN GOLD = SCORED GOLD
```

There is no established critical code↔artifact gold mismatch. The limitation is source readability: a reviewer who stops at the initial literal can misinterpret the experiment.

## What FM-16 did NOT establish

FM-16 does not prove that the next mechanism must be any of the following:

- structural filtering;
- LLM recognition;
- memory-specific SLM;
- graph/path scoring;
- query-conditioned normalization/margins;
- query router;
- multi-hop engine.

Those remain competing research hypotheses.

The experiment only weakened the simpler hypothesis:

```text
GOOD GENERIC SCORER + ONE GLOBAL RAW THRESHOLD
= SUFFICIENT FOR MIXED-TASK RELEVANCE QUALIFICATION
```

That hypothesis was not supported on the frozen FM-16 task.

The next research question is therefore:

> What is the minimal observable, least-assumption-heavy additional mechanism that removes the residual relevance error class?

That question is a new research frontier, not an architecture decision.

---

# 📚 Source routing for this research thread

## 1. Exact executable evidence — GitHub lab

**Repository**  
https://github.com/velantrian/Graphiti_fractal_lab

**Experiment branch**  
https://github.com/velantrian/Graphiti_fractal_lab/tree/experiment/falkordblite-deterministic-memory

**FM-16 frozen run_007 artifacts**  
https://github.com/velantrian/Graphiti_fractal_lab/tree/experiment/falkordblite-deterministic-memory/artifacts/memoryops/run_007

Use these for exact metrics, hashes, corpus/gold files, tests, scorer code and reproducibility claims.

## 2. FM-16 closure / current interpretation

https://github.com/velantrian/Graphiti_fractal_lab/blob/experiment/falkordblite-deterministic-memory/docs/research/FM16_CLOSURE_AND_INDEPENDENT_REVIEW_2026-09-11.md

Use this for the reconciled closure and interpretation findings. It is still subordinate to frozen artifacts for exact executable facts.

## 3. Research narrative

**Retrieval Relevance Track**  
https://github.com/velantrian/Graphiti_fractal_lab/blob/experiment/falkordblite-deterministic-memory/docs/research/RETRIEVAL_RELEVANCE_TRACK.md

Use this for the current human/AI narrative of FM-13 → FM-16.

## 4. Long-form reasoning history

https://github.com/velantrian/Graphiti_fractal_lab/blob/experiment/falkordblite-deterministic-memory/docs/research/RETRIEVAL_RELEVANCE_REASONING_LOG.md

Use this when the question is **why** a hypothesis changed, what alternatives were rejected, or how task boundaries were discovered.

## 5. Google Drive — long-form discussion-preserving overview

**🔬 Graphiti Fractal — Retrieval Relevance Research Track — Current**  
https://docs.google.com/document/d/1Z-tjZGi_-2ETkWp3NHsmClZIZ_mC23KAOGvAScXLYGA/edit

Use Drive when a reviewer needs the extended narrative/history and rationale across research discussions. Drive is not the executable authority for a numeric claim.

## 6. Notion — current human/AI route

**🔬 Graphiti Fractal — Retrieval Relevance Research Track**  
https://app.notion.com/p/3d7ac84d054781f4a9afca3f8878c346

Use this for current human-readable navigation and status.

**Atlas child route: Research & Evidence Directory — Graphiti Fractal**  
https://app.notion.com/p/3d8ac84d054781889133c5e27c14f8f1

Use this when entering from the global Knowledge Atlas and deciding which deeper source to open.

## 7. Product/upstream boundary

**Graphiti Fractal product repository**  
https://github.com/velantrian/Graphiti_fractal

This is a separate product/upstream authority surface.

FM-13–FM-16 research in `Graphiti_fractal_lab` does **not** authorize product/runtime changes there.

```text
LAB EXPERIMENT ≠ PRODUCT CHANGE
TESTED ≠ PRODUCTION AUTHORIZED
RESEARCH RESULT ≠ UPSTREAM MERGE AUTHORITY
```

---

# 🤖 AI routing examples

```text
Question: “What exact FM-16 scores were used?”
→ frozen run_007 artifacts

Question: “Why did the research move from embeddings to CrossEncoder?”
→ Retrieval Relevance Track + Reasoning Log + Drive long-form track

Question: “What is the current bounded interpretation of FM-16?”
→ FM-16 closure ledger, then verify exact claims in run_007

Question: “Is a CrossEncoder now enabled in Graphiti Fractal production?”
→ product/live owning source; do NOT infer from lab research

Question: “Does FM-16 prove we need an LLM relevance judge?”
→ No. Open this directory + closure ledger; LLM recognition remains a new hypothesis.
```

---

# Current status

```yaml
research_thread: graphiti-fractal-retrieval-relevance
fm13: COMPLETED
fm14: COMPLETED
fm15: COMPLETED
fm16: CLOSED_BOUNDED_EXPERIMENT
fm16_independent_review: PASS_WITH_MAJOR_INTERPRETATION_FINDINGS
ce_ranking_vs_embedding: CE_BETTER_ON_FROZEN_FM16_FIXTURE
global_ce_threshold: NOT_FEASIBLE
global_embedding_threshold: NOT_FEASIBLE
honest_empty: NOT_ESTABLISHED
runtime_authorized: false
architecture_promoted: false
next_frontier: MINIMAL_RESIDUAL_RELEVANCE_MECHANISM_RESEARCH
```


---

# 🧠 Memory → Understanding · Scientific Donors · Situation / Continuation

## When to use this route

Open this route when the question concerns:

- how memory differs from understanding;
- how a current situation is reconstructed from history;
- relation composition, semantic drift or invented causality;
- minimum sufficient resume state;
- smart forgetting / accessibility without destructive deletion;
- historical donors such as Vygotsky, Luria, Pospelov or the frame/relevance tradition;
- modern neuroscience or AI-memory donors;
- how multi-AI discussion, human-reference contamination and exact experiment evidence should be separated.

## Research boundary

```text
SCIENTIFIC DONOR ≠ VELANTRIM MECHANISM
DONOR CONVERGENCE ≠ INDEPENDENT REPLICATION
AI AGREEMENT ≠ SCIENTIFIC EVIDENCE
HISTORY ≠ CURRENT STATE
RETRIEVAL ≠ UNDERSTANDING
OBSERVED A + OBSERVED B ≠ ESTABLISHED RELATION(A,B)
```

This route is intentionally cross-project and research-only. It does not create a new runtime owner.

## Source routing

### 1. Full chronology / why the position changed

**🏆 Ruslan Исследования — Google Drive**  
https://docs.google.com/document/d/1gBRVKOtN4LmFEJTjkH-0mdp5x5Bpb40TvZJrogM0oTM/edit

Use for founder/research chronology, multi-AI observations, donor registry, status changes and why a hypothesis was retained, weakened or closed-for-now.

### 2. Distilled scientific synthesis

**🧠🌱 Memory → Understanding — Google Drive**  
https://docs.google.com/document/d/1o1fIJz5QF4JHjKnnmpAOZESNffbRAbI5UBPzQJ5xnNM/edit

Use for the compact cross-project synthesis: relation/situation/continuation distinctions and open mechanisms.

### 3. Research methodology

**🧭 Cognitive System Research Program — Google Drive**  
https://docs.google.com/document/d/17ua3MwScIlpSDZVrbbSUPyotLdvPWwn1AtrHI2htmWE/edit

Use for source qualification, evidence classes, contamination rules, CLOSED_FOR_NOW / REOPEN discipline and experiment selection.

### 4. Source-level donor cards

**🔬 Human & Philosophical Donor Fixture Trace — Google Drive**  
https://docs.google.com/document/d/1DAYoN9Y9YUyk3FmGgYF3tvyYL8od6KZgPjjygm1qIRs/edit

Use for primary-source donor extraction, limitations, transfer candidates and fixture seeds. A name in the donor queue is not yet a verified claim.

### 5. Current Notion journal

**🏆 Ruslan Исследования — Notion**  
https://app.notion.com/p/3dbac84d0547816baa4fc3e9f6ee2be5

Use for the current human-readable journal/checkpoint. It remains research-only.

### 6. Exact experiments

Exact claims about E0-B/U0b, Continuum, CLOS, State Validation Lab, Graphiti or another lab must be reopened in the owning repository and exact artifact/branch/commit. The Eiti-Wizard-Lab route is:

https://github.com/velantrian/Eiti-Wizard-Lab

Do not infer that the repository root itself proves a particular experiment result.

## Current bounded interpretation

The present research frontier is not “store more history.” It is to distinguish:

```text
what happened
→ what changed
→ what is relevant now
→ what situation is active
→ what remains unknown
→ what continuation is justified
```

This is a research decomposition, not a claim that human cognition or Velantrim already implements a single pipeline with these stages.

## Promotion rule

A donor may become:

```text
PRIMARY SOURCE
→ SOURCE-BOUND OBSERVATION
→ TRANSFER CANDIDATE
→ TESTABLE HYPOTHESIS / FIXTURE
→ EVIDENCE REVIEW
→ possible owner-local adoption
```

Never shortcut directly from donor literature or AI summary to Canon, Native law, Soul mechanism, CLOS mechanism or runtime authorization.

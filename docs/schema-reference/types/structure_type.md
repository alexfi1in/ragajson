---
title: StructureType
description: Structural parameters of a raga (e.g., aroha, avaroha, svaras, etc.).
---
# StructureType

Structural parameters of a raga (e.g., aroha, avaroha, svaras, etc.).

**Schema Information:**

| Field | Value |
|-------|-------|
| $id | `../types/structure_type.json` |
| $schema | `https://json-schema.org/draft/2020-12/schema` |
| Type | `object` |

## Properties

| Property | Type | Required | Description | Examples |
|----------|------|----------|-------------|----------|
| **aroha** | `array` | ❌ No | Ascending sequence of notes | - |
| **avaroha** | `array` | ❌ No | Descending sequence of notes | - |
| **svaras** | `array` | ❌ No | List of notes used (system-specific validation in main schema) | - |
| **vadi** | `string` | ❌ No | Vadi — principal (most prominent) note of the raga (system-specific validation in main schema) | - |
| **samvadi** | `string` | ❌ No | Samvadi — second most prominent note of the raga (system-specific validation in main schema) | - |
| **pakad** | `string` | ❌ No | Pakad — characteristic melodic phrase of the raga | - |
| **jaati** | `string` | ❌ No | Jaati — classification by number of notes (e.g., audav, shadav, sampurna, etc.) | `Audava-Audava`, `Audava-Sampurna`, `Sampurna-Sampurna` |
| **varjit_svaras** | `array` | ❌ No | Varjit svaras — omitted notes (system-specific validation in main schema) | - |
| **custom** | `object` | ❌ No | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. | - |

---

## aroha

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Ascending sequence of notes |
| Type | `array` |
| Required | ❌ No |

## avaroha

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Descending sequence of notes |
| Type | `array` |
| Required | ❌ No |

## svaras

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of notes used (system-specific validation in main schema) |
| Type | `array` |
| Required | ❌ No |

## vadi

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Vadi — principal (most prominent) note of the raga (system-specific validation in main schema) |
| Type | `string` |
| Required | ❌ No |

## samvadi

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Samvadi — second most prominent note of the raga (system-specific validation in main schema) |
| Type | `string` |
| Required | ❌ No |

## pakad

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pakad — characteristic melodic phrase of the raga |
| Type | `string` |
| Required | ❌ No |

## jaati

*Defined in [../components/jaati_enum.json](../components/jaati_enum.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `jaati_enum.json` |
| Title | JaatiEnum |
| Description | Jaati — classification by number of notes (e.g., audav, shadav, sampurna, etc.) |
| Type | `string` |
| Required | ❌ No |
| Examples | `Audava-Audava`, `Audava-Sampurna`, `Sampurna-Sampurna` |

## varjit_svaras

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Varjit svaras — omitted notes (system-specific validation in main schema) |
| Type | `array` |
| Required | ❌ No |

## custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

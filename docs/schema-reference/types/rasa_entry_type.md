---
title: RasaEntryType
description: Rasa entry with weight (intensity).
---
# RasaEntryType

Rasa entry with weight (intensity).

**Schema Information:**

| Field | Value |
|-------|-------|
| $id | `../types/rasa_entry_type.json` |
| $schema | `https://json-schema.org/draft/2020-12/schema` |
| Type | `object` |

## Properties

| Property | Type | Required | Description | Examples |
|----------|------|----------|-------------|----------|
| **rasa** | `string` | ✅ Yes | Name of the rasa | `Shringara`, `Karuna` |
| **weight** | `number` | ✅ Yes | Weight (intensity) of this rasa, from 0 to 1 | - |

---

## rasa

*Defined in [../components/rasa_enum.json](../components/rasa_enum.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `rasa_enum.json` |
| Title | RasaEnum |
| Description | Name of the rasa |
| Type | `string` |
| Required | ✅ Yes |
| Allowed Values | `Shringara`, `Karuna`, `Vira`, `Shanta`, `Bhakti`, `Hasya`, `Adbhuta`, `Raudra`, `Bibhatsa`, `Bhayanaka` |
| Examples | `Shringara`, `Karuna` |

## weight

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Weight (intensity) of this rasa, from 0 to 1 |
| Type | `number` |
| Required | ✅ Yes |
| Maximum | 1 |

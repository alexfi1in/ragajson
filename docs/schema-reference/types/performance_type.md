---
title: PerformanceType
description: Raga performance parameters (form, tempo, time of day, etc.).
---
# PerformanceType

Raga performance parameters (form, tempo, time of day, etc.).

**Schema Information:**

| Field | Value |
|-------|-------|
| $id | `../types/performance_type.json` |
| $schema | `https://json-schema.org/draft/2020-12/schema` |
| Type | `object` |

## Properties

| Property | Type | Required | Description | Examples |
|----------|------|----------|-------------|----------|
| **form** | `string` | ❌ No | Performance form (khayal, dhrupad, etc., English only) | - |
| **tempo** | `string` | ❌ No | Performance tempo (vilambit, madhya, drut, etc.) | - |
| **time_of_day** | OneOf | ❌ No | Traditional time of day (Samay Chakra) for raga performance. String or array. | - |
| **season** | `string` | ❌ No | Traditional season for raga performance. | `Vasant`, `Varsha`, `No Specific Season` |
| **rasa** | `array` | ❌ No | List of rasas with weights (intensity) | - |
| **composers** | `array` | ❌ No | Famous composers associated with the raga | - |
| **notable_performers** | `array` | ❌ No | Famous performers of the raga | - |
| **custom** | `object` | ❌ No | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. | - |

---

## form

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Performance form (khayal, dhrupad, etc., English only) |
| Type | `string` |
| Required | ❌ No |

## tempo

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Performance tempo (vilambit, madhya, drut, etc.) |
| Type | `string` |
| Required | ❌ No |

## time_of_day

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Traditional time of day (Samay Chakra) for raga performance. String or array. |
| Required | ❌ No |

### time_of_day.0

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `time_of_day_enum.json` |
| Title | TimeOfDayEnum |
| Description | Time of day classifications for raga performance. Based on traditional Ashta Prahar system with modern equivalents. |
| Type | `string` |
| Examples | `Pratah`, `Sandhya`, `Unrestricted` |

### time_of_day.0.0

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pratah kaal - dawn period, approximately 4-7 AM |
| Constant Value | `Pratah` |

### time_of_day.0.1

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Purvaahn - morning period, approximately 7-10 AM |
| Constant Value | `Purvaahn` |

### time_of_day.0.2

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Madhyaahn - late morning/midday, approximately 10 AM-1 PM |
| Constant Value | `Madhyaahn` |

### time_of_day.0.3

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Aparaahn - afternoon period, approximately 1-4 PM |
| Constant Value | `Aparaahn` |

### time_of_day.0.4

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Sandhya kaal - evening twilight, approximately 4-7 PM |
| Constant Value | `Sandhya` |

### time_of_day.0.5

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pradosh kaal - early night, approximately 7-10 PM |
| Constant Value | `Pradosh` |

### time_of_day.0.6

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Nisha kaal - deep night, approximately 10 PM-1 AM |
| Constant Value | `Nisha` |

### time_of_day.0.7

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Ardha-ratri - late night/early dawn, approximately 1-4 AM |
| Constant Value | `Ardha-ratri` |

### time_of_day.0.8

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | No specific time restriction - suitable for any time of day |
| Constant Value | `Unrestricted` |

### time_of_day.1

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `array` |
| Unique Items | true |

## season

*Defined in [../components/season_enum.json](../components/season_enum.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `season_enum.json` |
| Title | SeasonEnum |
| Description | Traditional season for raga performance. |
| Type | `string` |
| Required | ❌ No |
| Allowed Values | `Vasant`, `Varsha`, `Sharad`, `Hemant`, `Shishir`, `Grishma`, `No Specific Season` |
| Examples | `Vasant`, `Varsha`, `No Specific Season` |

## rasa

*Defined in [../types/rasa_entry_type.json](../types/rasa_entry_type.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of rasas with weights (intensity) |
| Type | `array` |
| Required | ❌ No |

## composers

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Famous composers associated with the raga |
| Type | `array` |
| Required | ❌ No |

## notable_performers

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Famous performers of the raga |
| Type | `array` |
| Required | ❌ No |

## custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

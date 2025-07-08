---
title: RagaJSON Schema
description: Machine-readable schema for describing ragas of Indian classical music.
---
# RagaJSON Schema

Machine-readable schema for describing ragas of Indian classical music.

**Schema Information:**

| Field | Value |
|-------|-------|
| $id | `../raga.schema.json` |
| $schema | `https://json-schema.org/draft/2020-12/schema` |
| Type | `object` |

## Properties

| Property | Type | Required | Description | Examples |
|----------|------|----------|-------------|----------|
| **name** | `string` | ✅ Yes | Raga name. | - |
| **system** | `string` | ✅ Yes | Indian classical music system (Hindustani or Carnatic). | `Hindustani`, `Carnatic` |
| **classification** | `string` | ❌ No | Raga classification. | - |
| **structure** | `object` | ❌ No | Structural parameters of the raga (notes, patterns, etc.). | - |
| **performance** | `object` | ❌ No | Performance-related information (time, season, rasa, etc.). | - |
| **examples** | `object` | ❌ No | Audio, video, and composition examples of the raga. | - |
| **custom** | `object` | ❌ No | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. | - |

---

## name

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Raga name. |
| Type | `string` |
| Required | ✅ Yes |

## system

*Defined in [../components/system_enum.json](../components/system_enum.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `system_enum.json` |
| Title | SystemEnum |
| Description | Indian classical music system (Hindustani or Carnatic). |
| Type | `string` |
| Required | ✅ Yes |
| Allowed Values | `Hindustani`, `Carnatic` |
| Examples | `Hindustani`, `Carnatic` |

## classification

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Raga classification. |
| Type | `string` |
| Required | ❌ No |

## structure

*Defined in [../types/structure_type.json](../types/structure_type.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `structure_type.json` |
| Title | StructureType |
| Description | Structural parameters of the raga (notes, patterns, etc.). |
| Type | `object` |
| Required | ❌ No |

#### Nested Properties

### structure.aroha

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Ascending sequence of notes |
| Type | `array` |
| Required | ❌ No |

### structure.avaroha

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Descending sequence of notes |
| Type | `array` |
| Required | ❌ No |

### structure.svaras

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of notes used (system-specific validation in main schema) |
| Type | `array` |
| Required | ❌ No |

### structure.vadi

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Vadi — principal (most prominent) note of the raga (system-specific validation in main schema) |
| Type | `string` |
| Required | ❌ No |

### structure.samvadi

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Samvadi — second most prominent note of the raga (system-specific validation in main schema) |
| Type | `string` |
| Required | ❌ No |

### structure.pakad

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pakad — characteristic melodic phrase of the raga |
| Type | `string` |
| Required | ❌ No |

### structure.jaati

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `jaati_enum.json` |
| Title | JaatiEnum |
| Description | Jaati — classification by number of notes (e.g., audav, shadav, sampurna, etc.) |
| Type | `string` |
| Required | ❌ No |
| Examples | `Audava-Audava`, `Audava-Sampurna`, `Sampurna-Sampurna` |

### structure.jaati.0

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 5 notes in aroha, 5 notes in avaroha. |
| Constant Value | `Audava-Audava` |

### structure.jaati.1

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 5 notes in aroha, 6 notes in avaroha. |
| Constant Value | `Audava-Shadava` |

### structure.jaati.2

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 5 notes in aroha, 7 notes in avaroha. |
| Constant Value | `Audava-Sampurna` |

### structure.jaati.3

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 6 notes in aroha, 5 notes in avaroha. |
| Constant Value | `Shadava-Audava` |

### structure.jaati.4

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 6 notes in aroha, 6 notes in avaroha. |
| Constant Value | `Shadava-Shadava` |

### structure.jaati.5

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 6 notes in aroha, 7 notes in avaroha. |
| Constant Value | `Shadava-Sampurna` |

### structure.jaati.6

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 7 notes in aroha, 5 notes in avaroha. |
| Constant Value | `Sampurna-Audava` |

### structure.jaati.7

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 7 notes in aroha, 6 notes in avaroha. |
| Constant Value | `Sampurna-Shadava` |

### structure.jaati.8

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | 7 notes in aroha, 7 notes in avaroha. |
| Constant Value | `Sampurna-Sampurna` |

### structure.varjit_svaras

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Varjit svaras — omitted notes (system-specific validation in main schema) |
| Type | `array` |
| Required | ❌ No |

### structure.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

## performance

*Defined in [../types/performance_type.json](../types/performance_type.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `performance_type.json` |
| Title | PerformanceType |
| Description | Performance-related information (time, season, rasa, etc.). |
| Type | `object` |
| Required | ❌ No |

#### Nested Properties

### performance.form

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Performance form (khayal, dhrupad, etc., English only) |
| Type | `string` |
| Required | ❌ No |

### performance.tempo

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Performance tempo (vilambit, madhya, drut, etc.) |
| Type | `string` |
| Required | ❌ No |

### performance.time_of_day

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Traditional time of day (Samay Chakra) for raga performance. String or array. |
| Required | ❌ No |

### performance.time_of_day.0

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `time_of_day_enum.json` |
| Title | TimeOfDayEnum |
| Description | Time of day classifications for raga performance. Based on traditional Ashta Prahar system with modern equivalents. |
| Type | `string` |
| Examples | `Pratah`, `Sandhya`, `Unrestricted` |

### performance.time_of_day.0.0

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pratah kaal - dawn period, approximately 4-7 AM |
| Constant Value | `Pratah` |

### performance.time_of_day.0.1

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Purvaahn - morning period, approximately 7-10 AM |
| Constant Value | `Purvaahn` |

### performance.time_of_day.0.2

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Madhyaahn - late morning/midday, approximately 10 AM-1 PM |
| Constant Value | `Madhyaahn` |

### performance.time_of_day.0.3

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Aparaahn - afternoon period, approximately 1-4 PM |
| Constant Value | `Aparaahn` |

### performance.time_of_day.0.4

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Sandhya kaal - evening twilight, approximately 4-7 PM |
| Constant Value | `Sandhya` |

### performance.time_of_day.0.5

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Pradosh kaal - early night, approximately 7-10 PM |
| Constant Value | `Pradosh` |

### performance.time_of_day.0.6

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Nisha kaal - deep night, approximately 10 PM-1 AM |
| Constant Value | `Nisha` |

### performance.time_of_day.0.7

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Ardha-ratri - late night/early dawn, approximately 1-4 AM |
| Constant Value | `Ardha-ratri` |

### performance.time_of_day.0.8

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | No specific time restriction - suitable for any time of day |
| Constant Value | `Unrestricted` |

### performance.time_of_day.1

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `array` |
| Unique Items | true |

### performance.season

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

### performance.rasa

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of rasas with weights (intensity) |
| Type | `array` |
| Required | ❌ No |

### performance.rasa.rasa

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `rasa_enum.json` |
| Title | RasaEnum |
| Description | Name of the rasa |
| Type | `string` |
| Allowed Values | `Shringara`, `Karuna`, `Vira`, `Shanta`, `Bhakti`, `Hasya`, `Adbhuta`, `Raudra`, `Bibhatsa`, `Bhayanaka` |
| Examples | `Shringara`, `Karuna` |

### performance.rasa.weight

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Weight (intensity) of this rasa, from 0 to 1 |
| Type | `number` |
| Maximum | 1 |

### performance.composers

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Famous composers associated with the raga |
| Type | `array` |
| Required | ❌ No |

### performance.notable_performers

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Famous performers of the raga |
| Type | `array` |
| Required | ❌ No |

### performance.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

## examples

*Defined in [../types/examples_type.json](../types/examples_type.json)*

**Details:**

| Attribute | Value |
|-----------|-------|
| $id | `examples_type.json` |
| Title | ExamplesType |
| Description | Audio, video, and composition examples of the raga. |
| Type | `object` |
| Required | ❌ No |

#### Nested Properties

### examples.media

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | A link to an audio or video recording of a performance. Must be a valid URI. |
| Type | `string` |
| Required | ❌ No |
| Format | `uri` |

### examples.compositions

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of compositions in this raga |
| Type | `array` |
| Required | ❌ No |

### examples.compositions.title

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Title of the composition |
| Type | `string` |

### examples.compositions.composer

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Composer of the composition |
| Type | `string` |

### examples.compositions.form

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Musical form (kriti, khayal, bhajan, etc.) |
| Type | `string` |

### examples.compositions.lyrics_lang

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Language of the lyrics |
| Type | `string` |

### examples.compositions.audio_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to audio recording |
| Type | `string` |
| Format | `uri` |

### examples.compositions.video_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to video recording |
| Type | `string` |
| Format | `uri` |

### examples.compositions.sheet_music_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to sheet music |
| Type | `string` |
| Format | `uri` |

### examples.compositions.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `object` |

### examples.recordings

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of recordings in this raga |
| Type | `array` |
| Required | ❌ No |

### examples.recordings.title

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Title of the recording |
| Type | `string` |

### examples.recordings.performer

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Name of the performer |
| Type | `string` |

### examples.recordings.year

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Year of recording |
| Type | `integer` |

### examples.recordings.duration_seconds

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Duration in seconds |
| Type | `integer` |

### examples.recordings.audio_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to audio recording |
| Type | `string` |
| Format | `uri` |

### examples.recordings.video_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to video recording |
| Type | `string` |
| Format | `uri` |

### examples.recordings.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `object` |

### examples.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

## custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

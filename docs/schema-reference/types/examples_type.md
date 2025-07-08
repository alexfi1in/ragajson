---
title: ExamplesType
description: Examples of audio, video, and other media for a raga.
---
# ExamplesType

Examples of audio, video, and other media for a raga.

**Schema Information:**

| Field | Value |
|-------|-------|
| $id | `../types/examples_type.json` |
| $schema | `https://json-schema.org/draft/2020-12/schema` |
| Type | `object` |

## Properties

| Property | Type | Required | Description | Examples |
|----------|------|----------|-------------|----------|
| **media** | `string` | ❌ No | A link to an audio or video recording of a performance. Must be a valid URI. | - |
| **compositions** | `array` | ❌ No | List of compositions in this raga | - |
| **recordings** | `array` | ❌ No | List of recordings in this raga | - |
| **custom** | `object` | ❌ No | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. | - |

---

## media

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | A link to an audio or video recording of a performance. Must be a valid URI. |
| Type | `string` |
| Required | ❌ No |
| Format | `uri` |

## compositions

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of compositions in this raga |
| Type | `array` |
| Required | ❌ No |

### compositions.title

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Title of the composition |
| Type | `string` |

### compositions.composer

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Composer of the composition |
| Type | `string` |

### compositions.form

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Musical form (kriti, khayal, bhajan, etc.) |
| Type | `string` |

### compositions.lyrics_lang

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Language of the lyrics |
| Type | `string` |

### compositions.audio_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to audio recording |
| Type | `string` |
| Format | `uri` |

### compositions.video_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to video recording |
| Type | `string` |
| Format | `uri` |

### compositions.sheet_music_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to sheet music |
| Type | `string` |
| Format | `uri` |

### compositions.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `object` |

## recordings

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | List of recordings in this raga |
| Type | `array` |
| Required | ❌ No |

### recordings.title

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Title of the recording |
| Type | `string` |

### recordings.performer

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Name of the performer |
| Type | `string` |

### recordings.year

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Year of recording |
| Type | `integer` |

### recordings.duration_seconds

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | Duration in seconds |
| Type | `integer` |

### recordings.audio_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to audio recording |
| Type | `string` |
| Format | `uri` |

### recordings.video_url

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | URL to video recording |
| Type | `string` |
| Format | `uri` |

### recordings.custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Type | `object` |

## custom

**Details:**

| Attribute | Value |
|-----------|-------|
| Description | User extensions and additional properties not included in the main schema. Keys must start with &#x27;x-&#x27;. |
| Type | `object` |
| Required | ❌ No |

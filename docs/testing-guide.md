# Testing Guide for RagaJSON

## Overview

The RagaJSON testing system ensures validation of the project's JSON Schema files. This guarantees that all schemas are correctly written according to the JSON Schema draft-2020-12 specification.

## Test Structure

```
ragajson/
├── tests/
│   └── schema-validation.test.js    # Jest tests for schemas
├── scripts/
│   └── validate-schemas.js          # Quick schema validation
└── docs/
    └── testing-guide.md             # This documentation
```

## Commands

### Quick Validation

```bash
npm run validate
```

Runs a quick check of all schemas with visual output:

```
🔍 Validating JSON Schema files...

✅ schema/raga.schema.json
✅ schema/components/system_enum.json
❌ schema/components/broken_enum.json
   Missing required field: title
   root: must have property 'enum'

📊 Results: 12/13 files valid
❌ Some schema files have validation errors
```

### Comprehensive Testing

```bash
npm run test:schemas
```

Runs detailed Jest tests with comprehensive reports.

### All Tests

```bash
npm test
```

Runs all project tests.

## Two Validation Approaches

This project uses two complementary validation methods, following industry best practices:

### Quick Validation Script (`npm run validate`)

- **Purpose**: Fast feedback during development
- **Output**: Visual, human-readable with emojis and colors
- **When to use**: Daily development, before commits, debugging
- **Audience**: Developers
- **Performance**: Fast execution, immediate results

### Jest Tests (`npm run test:schemas`)

- **Purpose**: Formal testing for CI/CD and comprehensive validation
- **Output**: Structured test reports, detailed error information
- **When to use**: CI/CD pipelines, pull requests, integration testing
- **Audience**: Automation systems, test runners
- **Performance**: More thorough, generates test coverage reports

### Why Both?

This dual approach provides several benefits:

1. **Developer Experience**: Quick script gives instant, visual feedback while coding
2. **Automation Integration**: Jest tests integrate seamlessly with CI/CD systems
3. **Different Detail Levels**: Script for overview, tests for deep analysis
4. **Flexibility**: Use separately during development or together in pipelines
5. **Industry Standard**: Common pattern used by major projects (ESLint, Prettier, TypeScript)

### Example Workflow

```bash
# During development
npm run validate              # Quick check

# Before committing
npm run validate && git commit

# In CI/CD pipeline
npm run validate              # Fast gate check
npm run test:schemas          # Detailed validation
```

## What is Tested

### 1. File Structure

- ✅ Valid JSON syntax
- ✅ Presence of required fields:
  - `$schema` = `"https://json-schema.org/draft/2020-12/schema"`
  - `$id` (unique identifier)
  - `title` (schema name)
  - `description` (schema description)

### 2. Meta-Validation

- ✅ Compliance with JSON Schema draft-2020-12
- ✅ Correct data types
- ✅ Proper keyword syntax

### 3. $ref Links

- ✅ All local `$ref` links exist
- ✅ File paths are correct

## Error Examples and Solutions

### Missing Required Field

**Error:**

```
❌ schema/components/my_enum.json
   Missing required field: title
```

**Solution:**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://raw.githubusercontent.com/OpenRaga/ragajson/main/schema/components/my_enum.json",
  "title": "MyEnum", // ← add this
  "description": "Description of my enum",
  "type": "string",
  "enum": ["value1", "value2"]
}
```

### Incorrect Schema Version

**Error:**

```
Expected $schema to be 'https://json-schema.org/draft/2020-12/schema', got 'http://json-schema.org/draft-07/schema#'
```

**Solution:**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema" // ← fix this
  // ...
}
```

### Broken $ref Link

**Error:**

```
$ref link not found: schema/components/nonexistent_enum.json
```

**Solution:**

1. Create the missing file
2. Or fix the path in `$ref`

### Invalid JSON Schema Syntax

**Error:**

```
root: must have property 'type'
```

**Solution:**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "...",
  "title": "...",
  "description": "...",
  "type": "string", // ← add required property
  "enum": ["value1", "value2"]
}
```

## Configuration

### Jest

Tests use Jest with default configuration. Test files are located in the `tests/` folder.

### AJV

The validator uses AJV with these settings:

- `strict: false` - less strict rules for compatibility
- `allErrors: true` - show all errors, not just the first one
- `validateSchema: false` - disable schema validation

## CI/CD Integration

Add schema validation to your CI pipeline:

```yaml
# .github/workflows/test.yml
name: Test Schemas
on: [push, pull_request]
jobs:
  validate-schemas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run validate
      - run: npm run test:schemas
```

## Adding New Schemas

When creating a new schema, make sure that:

1. **File has the correct structure:**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://raw.githubusercontent.com/OpenRaga/ragajson/main/schema/path/to/your_schema.json",
  "title": "YourSchemaName",
  "description": "Clear description of what this schema validates",
  "type": "string|object|array"
  // ... your schema
}
```

2. **Run validation:**

```bash
npm run validate
```

3. **Check tests:**

```bash
npm run test:schemas
```

## Debugging

For detailed error analysis, use Jest tests:

```bash
npm run test:schemas -- --verbose
```

This will show detailed information about each test and error.

## Useful Links

- [JSON Schema Specification draft-2020-12](https://json-schema.org/specification-links.html#draft-2020-12)
- [AJV JSON Schema Validator](https://ajv.js.org/)
- [Jest Testing Framework](https://jestjs.io/)

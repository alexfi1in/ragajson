# RagaJSON Documentation

Welcome to the RagaJSON project documentation. RagaJSON is a machine-readable schema for describing ragas of Indian classical music.

## 📚 Documentation Sections

### 🎼 Schema Reference

Comprehensive documentation for all JSON Schema files:

- **[Schema Reference](schema-reference/index.md)** - Complete API reference generated from schemas
- **[Main Schema](schema-reference/raga.schema.md)** - Core RagaJSON schema
- **[Components](schema-reference/index.md#components)** - Reusable enum and type definitions
- **[Types](schema-reference/index.md#types)** - Complex object type definitions

### 🛠️ Developer Guides

- **[Testing Guide](testing-guide.md)** - Comprehensive testing strategy and validation
- **[Why JSON Schema?](why-json-schema.md)** - Design decisions and benefits

## 🚀 Quick Start

### Using the Schema

```json
{
  "$schema": "https://raw.githubusercontent.com/OpenRaga/ragajson/main/schema/raga.schema.json",
  "name": "Yaman",
  "system": "Hindustani",
  "structure": {
    "aroha": ["Sa", "Re", "Ga", "Pa", "Dha", "Ni", "Sa'"],
    "avaroha": ["Sa'", "Ni", "Dha", "Pa", "Ga", "Re", "Sa"],
    "vadi": "Ga",
    "samvadi": "Ni"
  },
  "performance": {
    "time_of_day": "Evening",
    "season": "All",
    "rasa": ["Shringara", "Shanta"]
  }
}
```

### Validation

```javascript
const Ajv = require("ajv")
const addFormats = require("ajv-formats")

const ajv = new Ajv({ strict: false })
addFormats(ajv)

// Load and compile schema
const schema = require("./schema/raga.schema.json")
const validate = ajv.compile(schema)

// Validate data
const isValid = validate(ragaData)
if (!isValid) {
  console.log(validate.errors)
}
```

## 🌟 Features

- **📖 Rich Metadata**: Comprehensive descriptions, examples, and display names
- **🔗 Modular Design**: Reusable components and types
- **🎯 System-Specific**: Support for both Hindustani and Carnatic systems
- **✅ Extensive Testing**: 225+ automated tests for quality assurance
- **📋 JSON Schema 2020-12**: Latest specification with conditional validation

## 🏗️ Project Structure

```
ragajson/
├── schema/                    # JSON Schema definitions
│   ├── raga.schema.json      # Main schema
│   ├── components/           # Reusable enums
│   └── types/               # Complex type definitions
├── docs/                     # Documentation
│   ├── schema-reference/     # Generated API docs
│   ├── testing-guide.md     # Testing documentation
│   └── why-json-schema.md   # Design rationale
├── tests/                    # Test suites
└── scripts/                  # Build and validation scripts
```

## 🤝 Contributing

1. **Schema Changes**: Modify files in `schema/` directory
2. **Run Tests**: `npm test` to validate changes
3. **Generate Docs**: `npm run docs:generate` to update documentation
4. **Submit PR**: Documentation updates automatically on merge

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

**📖 [Browse Schema Reference →](schema-reference/index.md)**

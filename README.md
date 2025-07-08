# RagaJSON

**A universal format for describing ragas of Indian classical music**

> Making the rich musical heritage of Indian classical ragas accessible to the digital world through standardized, machine-readable data.

## The Problem

Raga information is scattered across books, websites, and oral traditions with no standard format. This makes it difficult for apps, researchers, and AI systems to understand and work with raga structures.

## The Solution

**RagaJSON** provides a standardized, machine-readable format for describing ragas using JSON Schema. Think of it as a "universal language" that computers, apps, and researchers can understand.

## Who Uses This

- **Developers**: Build music apps with structured raga data
- **Researchers**: Analyze ragas systematically
- **Musicians**: Access comprehensive raga information
- **AI/ML**: Train models on cultural musical data

## Technical Overview

- **Format**: [JSON Schema draft-2020-12](https://json-schema.org/draft/2020-12)
- **Validation**: Built-in tools for checking data correctness
- **Modularity**: Separate schemas for components (notes, time periods, emotions)
- **Flexibility**: Support for both Hindustani and Carnatic systems
- **Extensibility**: Custom fields allowed with `x-` prefix

## Quick Start

```bash
# Install dependencies
npm install

# Quick validation with visual feedback
npm run validate

# Run comprehensive tests
npm test

# Run quality checks specifically
npm run test:schema-quality
```

**All schemas are validated with:**

- ✅ Technical compliance tests
- ✅ Quality standard tests
- ✅ Real-time validation feedback

## Documentation

### 📖 [Complete Documentation](docs/index.md)

- **[Schema Reference](docs/schema-reference/index.md)** - Generated API documentation from schemas
- **[Main Schema](docs/schema-reference/raga.schema.md)** - Core RagaJSON specification
- **[Components](docs/schema-reference/index.md#components)** - Enum definitions (systems, notes, etc.)
- **[Types](docs/schema-reference/index.md#types)** - Complex object structures

### 🛠️ Developer Resources

- **[Testing Guide](docs/testing-guide.md)** - Comprehensive validation strategy
- **[Why JSON Schema?](docs/why-json-schema.md)** - Design decisions and benefits
- **[Examples](examples/)** - Real raga data _(coming soon)_

### 🚀 Quick Links

- Generate docs: `npm run docs:generate`
- Clean docs: `npm run docs:clean`

---

_Made with love for the global Indian classical music community_

Copyright © 2025 OpenRaga Contributors

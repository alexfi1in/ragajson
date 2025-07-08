const JsonSchemaStaticDocs = require("json-schema-static-docs")
const path = require("path")
const fs = require("fs")

async function generateSchemaDocs() {
  console.log("🚀 Generating JSON Schema documentation with custom templates...")

  const inputPath = path.join(__dirname, "..", "schema")
  const outputPath = path.join(__dirname, "..", "docs", "schema-reference")
  const templatePath = path.join(__dirname, "..", "templates", "custom")

  // Ensure output directory exists
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  }

  try {
    const jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
      inputPath: inputPath,
      outputPath: outputPath,
      templatePath: templatePath, // 👈 Используем кастомные шаблоны
      jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
      inputFileGlob: "**/*.json",
      createIndex: true,
      indexPath: "index.md",
      indexTitle: "RagaJSON Schema Reference",
      addFrontMatter: true,
      displaySchema: false, // Don't show raw JSON in docs
      enableMetaEnum: true, // Support enum descriptions
      ajvOptions: {
        allowUnionTypes: true,
        strict: false
      }
    })

    await jsonSchemaStaticDocs.generate()

    // 🧹 Post-process generated files for better formatting
    await postProcessMarkdownFiles(outputPath)

    console.log("✅ Documentation generated successfully with clean Markdown!")
    console.log(`📁 Output location: ${outputPath}`)
    console.log("📖 Main index: docs/schema-reference/index.md")

    // Generate a summary of what was created
    const files = getAllFiles(outputPath).filter(f => f.endsWith(".md"))
    console.log(`📄 Generated ${files.length} documentation files:`)
    files.forEach(file => {
      const relativePath = path.relative(outputPath, file)
      console.log(`   • ${relativePath}`)
    })
  } catch (error) {
    console.error("❌ Error generating documentation:", error)
    console.error("💡 Make sure templates/custom/schema.hbs exists")
    process.exit(1)
  }
}

async function postProcessMarkdownFiles(outputPath) {
  console.log("🧹 Post-processing markdown files for cleaner output...")

  const files = getAllFiles(outputPath).filter(f => f.endsWith(".md"))

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8")

    // Clean up common formatting issues
    content = content
      // Remove excessive empty lines
      .replace(/\n{3,}/g, "\n\n")
      // Clean up trailing whitespace
      .replace(/[ \t]+$/gm, "")
      // Fix broken references to relative paths
      .replace(/https:\/\/raw\.githubusercontent\.com\/OpenRaga\/ragajson\/main\/schema\//g, "../")
      // Remove trailing empty lines at end of file
      .replace(/\n+$/, "\n")
      // Fix frontmatter formatting if needed
      .replace(/^---\n(title: .+)\n(description: .+)\n\n---/, "---\n$1\n$2\n---")

    fs.writeFileSync(file, content, "utf8")
  }

  console.log(`✨ Cleaned ${files.length} markdown files`)
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
    } else {
      arrayOfFiles.push(fullPath)
    }
  })

  return arrayOfFiles
}

// Run the generation
generateSchemaDocs()

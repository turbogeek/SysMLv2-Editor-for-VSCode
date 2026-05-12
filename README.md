# SysMLv2 Editor for VSCode

A robust and user-friendly SysMLv2 and KerML language extension for Visual Studio Code.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Features

### 1. Language Support
- **SysMLv2 Support**: Full syntax highlighting and basic semantic understanding of the SysMLv2 language.
- **KerML Support**: Comprehensive support for KerML syntax, including all core concepts and relationships.
- **Model-Based System Engineering (MBSE)**: Built-in support for MBSE practices with validation rules.

### 2. Editing Experience
- **Syntax Highlighting**: Beautiful, professional syntax highlighting for SysMLv2 and KerML.
- **Code Snippets**: Quick and easy insertion of common SysMLv2 and KerML constructs.
- **Auto-Completion**: Intelligent suggestions for keywords, elements, and relationships.
- **Structural Validation**: Real-time checking for structural correctness and best practices.

### 3. Integration
- **Project Management**: Tools for managing SysMLv2 and KerML projects within the VSCode workspace.
- **Import/Export**: Capabilities to import from and export to other standard formats (planned).

## Installation

### Prerequisites
- Visual Studio Code (version 1.45.0 or higher)

### Steps

1. Open VS Code.
2. Go to the **Extensions** view (click the square icon on the sidebar or press `Ctrl+Shift+X`).
3. Search for "SysMLv2".
4. Find the **SysMLv2 Editor for VSCode** extension.
5. Click the **Install** button.

## Usage

### Creating a New SysMLv2 Project

1. Open a folder in VS Code.
2. Create a new file with a `.sysml` or `.ker` extension.
3. The editor will automatically enable SysMLv2/KerML mode.

### Using Code Snippets

Type the following trigger words and press `Tab` or `Enter` to insert snippets:

- `part` - Insert part definition
- `action` - Insert action definition
- `req` - Insert requirement
- `usecase` - Insert use case

### Validation

The editor provides real-time validation based on SysMLv2 and KerML best practices. Issues will be underlined with squiggles and listed in the **Problems** panel.

## Configuration

To configure the extension, open VS Code **Settings** (`Ctrl+,` or `Cmd+,`) and search for "SysMLv2".

### Available Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `sysmlv2.validation.enabled` | boolean | `true` | Enable/disable structural validation |
| `sysmlv2.validation.strict` | boolean | `true` | Enable strict validation mode |
| `sysmlv2.snippets.enabled` | boolean | `true` | Enable/disable code snippets |

## Roadmap

### Current Features (v1.0.0)
- [x] Syntax highlighting for SysMLv2
- [x] Syntax highlighting for KerML
- [x] Basic structural validation
- [x] Code snippets for common constructs

### Upcoming Features (v1.1.0)
- [ ] Auto-completion for SysMLv2 and KerML
- [ ] Import from Papyrus (SysML v1.6)
- [ ] Export to Papyrus
- [ ] Integration with Cameo MagicDraw (via SysMLv2 Tool API)

### Future Enhancements
- [ ] Advanced diagram visualization (view SysML elements in browser)
- [ ] Model differencing and merging
- [ ] Requirements traceability matrix generation
- [ ] XMI import/export

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Steps

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Buy me a coffee or a small car

If you find this extension useful, consider buying me a coffee! [Buy me a coffee](https://www.buymeacoffee.com/turbogeek)
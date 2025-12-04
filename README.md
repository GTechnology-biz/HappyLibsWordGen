# HappyLibsWordGen

A word generator for fill-in-the-blank (Mad Libs) puzzles. This project provides a simple way to generate random words from various categories to create fun and entertaining word games.

## Project Overview

HappyLibsWordGen is a Python-based word generator designed to support Mad Libs-style word puzzles. The generator reads from a JSON file containing categorized words (nouns, verbs, adjectives, etc.) and randomly selects words from requested categories.

## Features

- Random word generation from multiple categories
- Easy-to-extend word database via JSON file
- Simple command-line interface
- Clean, modular Python code

## Getting Started

### Prerequisites

- Python 3.6 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GTechnology-biz/HappyLibsWordGen.git
   cd HappyLibsWordGen
   ```

2. Install dependencies (if any):
   ```bash
   pip install -r requirements.txt
   ```

### Usage

Run the word generator from the command line:

```bash
python src/word_generator.py
```

Or import it in your Python code:

```python
from src.word_generator import WordGenerator

generator = WordGenerator()
random_noun = generator.get_random_word("nouns")
print(f"Random noun: {random_noun}")
```

## Project Structure

```
HappyLibsWordGen/
├── src/
│   ├── __init__.py          # Package initialization
│   └── word_generator.py    # Main word generator logic
├── words.json               # Word categories and words database
├── requirements.txt         # Python dependencies
├── README.md               # This file
├── LICENSE                 # MIT License
└── .gitignore             # Git ignore rules
```

## How to Contribute

We welcome contributions! Here's how you can help:

1. **Fork the repository** and create your branch from `main`.
2. **Add new words** to `words.json` to expand the word database.
3. **Add new categories** by extending the JSON structure.
4. **Improve the generator** by adding new features or fixing bugs.
5. **Write tests** to ensure code quality.
6. **Submit a pull request** with a clear description of your changes.

### Contribution Guidelines

- Follow PEP 8 style guidelines for Python code
- Add comments to explain complex logic
- Test your changes before submitting
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

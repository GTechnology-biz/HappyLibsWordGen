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
├── index.html               # Web interface
├── script.js                # Frontend JavaScript logic
├── style.css                # Frontend styling
├── words.json               # Word categories and words database
├── 404.html                 # Custom 404 error page
├── _headers                 # Cloudflare Pages HTTP headers
├── _redirects               # Cloudflare Pages URL redirects
├── requirements.txt         # Python dependencies
├── README.md                # This file
├── LICENSE                  # MIT License
└── .gitignore               # Git ignore rules
```

## Deployment (Cloudflare Pages)

The web app is hosted on [Cloudflare Pages](https://pages.cloudflare.com/). To deploy your own instance:

### Initial Setup

1. Sign up for a free [Cloudflare account](https://dash.cloudflare.com/sign-up).
2. Go to **Workers & Pages** in the Cloudflare dashboard.
3. Click **Create** > **Pages** > **Connect to Git**.
4. Select the **HappyLibsWordGen** repository from GitHub.
5. Configure the build settings:
   - **Build command:** *(leave blank — no build step needed)*
   - **Build output directory:** `/` *(root)*
6. Click **Save and Deploy**.

Cloudflare Pages will automatically deploy on every push to the `main` branch and create preview deployments for pull requests.

### Custom Domain (Optional)

1. In your Pages project, go to **Custom domains**.
2. Click **Set up a custom domain** and follow the prompts.
3. Cloudflare handles SSL certificates automatically.

### Configuration Files

| File | Purpose |
|------|---------|
| `_headers` | HTTP security and caching headers served by Cloudflare Pages |
| `_redirects` | URL redirect rules handled by Cloudflare Pages |
| `404.html` | Custom 404 error page shown for unknown routes |

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

"""
Word Generator for HappyLibsWordGen

This module provides a simple word generator that reads words from a JSON file
and randomly selects words from requested categories (nouns, verbs, adjectives, etc.)
for use in fill-in-the-blank (Mad Libs) puzzles.
"""

import json
import random
import os


class WordGenerator:
    """
    A class to generate random words from categorized word lists.

    Attributes:
        words_file (str): Path to the JSON file containing word categories.
        words (dict): Dictionary containing word categories and their words.
    """

    def __init__(self, words_file=None):
        """
        Initialize the WordGenerator with a words file.

        Args:
            words_file (str, optional): Path to the JSON file containing words.
                                        Defaults to 'words.json' in the project root.
        """
        if words_file is None:
            # Default to words.json in the project root directory
            current_dir = os.path.dirname(os.path.abspath(__file__))
            words_file = os.path.join(current_dir, "..", "words.json")

        self.words_file = words_file
        self.words = self._load_words()

    def _load_words(self):
        """
        Load words from the JSON file.

        Returns:
            dict: Dictionary containing word categories and their words.

        Raises:
            FileNotFoundError: If the words file does not exist.
            json.JSONDecodeError: If the words file is not valid JSON.
            ValueError: If the JSON structure is invalid.
        """
        with open(self.words_file, "r", encoding="utf-8") as file:
            data = json.load(file)

        # Validate the JSON structure
        if not isinstance(data, dict):
            raise ValueError("Words file must contain a JSON object")

        for key, value in data.items():
            if not isinstance(key, str):
                raise ValueError(f"Category keys must be strings, got {type(key)}")
            if not isinstance(value, list):
                raise ValueError(f"Category '{key}' must contain a list of words")

        return data

    def get_categories(self):
        """
        Get all available word categories.

        Returns:
            list: List of available category names.
        """
        return list(self.words.keys())

    def get_random_word(self, category):
        """
        Get a random word from the specified category.

        Args:
            category (str): The category to select a word from
                           (e.g., 'nouns', 'verbs', 'adjectives').

        Returns:
            str: A randomly selected word from the category.

        Raises:
            KeyError: If the specified category does not exist.
        """
        if category not in self.words:
            raise KeyError(
                f"Category '{category}' not found. "
                f"Available categories: {self.get_categories()}"
            )

        words_list = self.words[category]
        if not words_list:
            raise ValueError(f"Category '{category}' is empty")

        return random.choice(words_list)

    def get_words_in_category(self, category):
        """
        Get all words in a specific category.

        Args:
            category (str): The category to get words from.

        Returns:
            list: List of words in the specified category.

        Raises:
            KeyError: If the specified category does not exist.
        """
        if category not in self.words:
            raise KeyError(
                f"Category '{category}' not found. "
                f"Available categories: {self.get_categories()}"
            )

        return self.words[category]


def main():
    """
    Main function to demonstrate the WordGenerator functionality.
    """
    # Create a new WordGenerator instance
    generator = WordGenerator()

    print("HappyLibsWordGen - Word Generator Demo")
    print("=" * 40)

    # Display available categories
    categories = generator.get_categories()
    print(f"\nAvailable categories: {categories}")

    # Generate and display a random word from each category
    print("\nRandom words from each category:")
    for category in categories:
        word = generator.get_random_word(category)
        print(f"  {category}: {word}")

    print("\n" + "=" * 40)
    print("Try importing WordGenerator in your own code!")


if __name__ == "__main__":
    main()

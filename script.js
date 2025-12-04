/**
 * HappyLibs Word Generator - JavaScript Logic
 * Fetches words from words.json and displays random word suggestions
 */

let wordsData = null;
const selectedWords = [];
const MAX_SELECTED_WORDS = 10;

/**
 * Fetches the words data from words.json
 * @returns {Promise<Object>} The words data object
 */
async function fetchWords() {
    try {
        const response = await fetch('words.json');
        if (!response.ok) {
            throw new Error(`Failed to load words: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Could not load word list: ${error.message}`);
    }
}

/**
 * Populates the category dropdown with available categories
 * @param {Object} words - The words data object
 */
function populateCategories(words) {
    const select = document.getElementById('category-select');
    select.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Select a category --';
    select.appendChild(defaultOption);
    
    const categories = Object.keys(words);
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        // Capitalize first letter for display
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        select.appendChild(option);
    });
}

/**
 * Displays an error message to the user
 * @param {string} message - The error message to display
 */
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

/**
 * Hides the error message
 */
function hideError() {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'none';
}

/**
 * Randomly selects words from an array using Fisher-Yates shuffle
 * @param {Array} words - Array of words to select from
 * @param {number} count - Number of words to select
 * @returns {Array} Array of randomly selected words
 */
function getRandomWords(words, count) {
    if (words.length <= count) {
        return [...words];
    }
    
    // Fisher-Yates shuffle for proper randomization
    const shuffled = [...words];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

/**
 * Displays the generated words in the results section
 * @param {Array} words - Array of words to display
 */
function displayWords(words) {
    const wordList = document.getElementById('word-list');
    wordList.innerHTML = '';
    
    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        li.addEventListener('click', () => addToSelectedWords(word));
        wordList.appendChild(li);
    });
}

/**
 * Adds a word to the selected words list
 * @param {string} word - The word to add
 */
function addToSelectedWords(word) {
    // Add the word to the array
    selectedWords.push(word);
    
    // Remove the oldest word if we exceed the maximum
    if (selectedWords.length > MAX_SELECTED_WORDS) {
        selectedWords.shift();
    }
    
    // Update the display
    displaySelectedWords();
}

/**
 * Displays the selected words in the selected words panel
 */
function displaySelectedWords() {
    const selectedList = document.getElementById('selected-word-list');
    selectedList.innerHTML = '';
    
    if (selectedWords.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No words selected yet';
        li.className = 'placeholder';
        selectedList.appendChild(li);
        return;
    }
    
    selectedWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        selectedList.appendChild(li);
    });
}

/**
 * Handles the generate button click
 */
function handleGenerate() {
    hideError();
    
    const select = document.getElementById('category-select');
    const category = select.value;
    
    if (!category) {
        showError('Please select a word category first.');
        return;
    }
    
    if (!wordsData) {
        showError('Word list is not loaded. Please refresh the page.');
        return;
    }
    
    if (!wordsData[category]) {
        showError(`Category "${category}" not found. Please select a valid category.`);
        return;
    }
    
    const categoryWords = wordsData[category];
    if (categoryWords.length === 0) {
        showError(`No words available in the "${category}" category.`);
        return;
    }
    
    const randomWords = getRandomWords(categoryWords, 3);
    displayWords(randomWords);
}

/**
 * Initializes the application
 */
async function init() {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', handleGenerate);
    
    try {
        wordsData = await fetchWords();
        populateCategories(wordsData);
    } catch (error) {
        showError(error.message);
        // Update dropdown to show error state
        const select = document.getElementById('category-select');
        select.innerHTML = '<option value="">-- Error loading categories --</option>';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

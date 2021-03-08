/**
 * Generate alphabet
 *
 * @returns {*[]} array containing alphabet letters
 */
function generateAlphabet() {
    let alphabet = [];

    var start = 'A'.charCodeAt(0);
    var last  = 'Z'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
        alphabet.push(String.fromCharCode(i));
    }

    return alphabet;
}

/**
 * Create letter button.
 *
 * @param text text to be displayed
 * @return newly created letter button
 */
function createLetterButton(text) {
    const button = document.createElement("button");

    // TODO 1. Create element
    //      2. Add classes btn, btn-light and starting-letter-criteria
    //      3. Set button type as button
    //      3. Add the text param as a text

    button.classList.add("btn", "btn-light", "starting-letter-criteria");
    button.type = "button";
    button.innerText = text;

    return button;
}

/**
 * Initialize container by generating and appending alphabet criteria buttons.
 */
function initAlphabetContainer() {
    // TODO 1. Call #generateAlphabet
    //      2. For each element generate a letter button by calling #createLetterButton
    //      3. Append created buttons into #alphabet-container
    //      4. Create another letter button with text 'Other' and append it also into #alphabet-container

    let alphabet = generateAlphabet();
    const alphabetContainer = document.getElementById("alphabet-container");

    alphabet.forEach(element => {
        alphabetContainer.append(createLetterButton(element));
    });

    alphabetContainer.append(createLetterButton("Other"));

}

// TODO Call here #initAlphabetContainer
initAlphabetContainer();
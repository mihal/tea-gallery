// TODO A: 1. Read 'Read & delete TODO'
//         2. Create here class CollectionPageOperator
//         3. Create private method init
//         4. Move function initAlphabetContainer inside a CollectionPageOperator (as a private method)
//         5. Call initAlphabetContainer from init method
//         6. Expose method named init, which will be calling the private init method

// TODO Read & delete: This is 'old' JS definition of the class. Objects of a class can be created with new, e.g. new AlphabetProvider().
function AlphabetProvider() {
    // TODO Read & delete: This is a private method (function) of the class. It will not be accessible outside this class implicitly.
    /**
     * Generate alphabet
     *
     * @returns {*[]} array containing alphabet letters
     */
    function generateAlphabet() {
        let alphabet = [];

        const start = 'A'.charCodeAt(0);
        const last = 'Z'.charCodeAt(0);
        for (let i = start; i <= last; ++i) {
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

        button.classList.add("btn", "btn-light", "starting-letter-criteria", "m-1");
        button.type = "button";
        button.innerText = text;

        return button;
    }

    // TODO Read & delete: Here you are defining which methods (functions) should be public, i.e. visible outside this class.
    //      This is a definition of the API of this class. The class AlphabetProvider exposes two methods named: generateAlphabet and createLetterButton
    //      In this case method name is identical with the function name.
    return {
        generateAlphabet: generateAlphabet,
        createLetterButton: createLetterButton
    }
}

/**
 * Initialize container by generating and appending alphabet criteria buttons.
 */
function initAlphabetContainer() {
    // TODO B: We have a problem here. generateAlphabet and createLetterButton are not available. How we can fix it?
    let alphabet = generateAlphabet();
    const alphabetContainer = document.getElementById("alphabet-container");

    alphabet.forEach(element => {
        alphabetContainer.append(createLetterButton(element));
    });

    alphabetContainer.append(createLetterButton("Other"));
}

// TODO C: Create an instance (object) of the class CollectionPageOperator and call init
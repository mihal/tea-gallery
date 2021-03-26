function AlphabetProvider() {
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

    return {
        generateAlphabet: generateAlphabet,
        createLetterButton: createLetterButton
    }
}

function CollectionPageOperator() {

    // TODO Create here a property called 'handler' and assign into a new instance of the CompaniesHandler class

    function init() {
        initAlphabetContainer();
        // TODO call initItemsView
    }

    function initItemsView() {
        // TODO 1. Call handler#loadItems
        //      2. For each item call handler#createElementFor
        //      3. Result append into the 'items-view'
    }

    /**
     * Initialize container by generating and appending alphabet criteria buttons.
     */
    function initAlphabetContainer() {
        const alphabetProvider = new AlphabetProvider();
        let alphabet = alphabetProvider.generateAlphabet();
        const alphabetContainer = document.getElementById("alphabet-container");

        alphabet.forEach(element => {
            alphabetContainer.append(alphabetProvider.createLetterButton(element));
        });

        alphabetContainer.append(alphabetProvider.createLetterButton("Other"));
    }

    return {
        init: init
    }
}

new CollectionPageOperator().init();
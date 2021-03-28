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

    let handler = new CompaniesHandler();

    function init() {
        initAlphabetContainer();
        initItemsView();
    }

    function initItemsView() {
        const companyNames = handler.loadItems();
        const itemsView = document.getElementById('items-view');

        companyNames.forEach(companyName => {
            itemsView.append(handler.createElementFor(companyName));
        });
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
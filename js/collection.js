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

function ViewSpinnerOperator() {

    const CONST = {
        TEMPLATE: 'items-view-spinner-template',
        ACTIVE: 'items-view-spinner'
    }

    return {
        show: function (viewContainer) {
            // TODO 1. Find template by id. Value is stored in CONST.TEMPLATE.
            //      2. Create a clone
            //      3. Change id to active one. (CONST.ACTIVE)
            //      4. Set the cloned element into the viewContainer.
            //      5. Target state is that the spinner is solo in the view section. No companies are displayed.
        },
        hide: function () {
            // TODO 1. Find element by the id. Value is stored in CONST.ACTIVE.
            //      2. Remove the element.
        }
    }
}

function CollectionPageOperator() {

    let handler = new CompaniesHandler();

    function init() {
        initAlphabetContainer();
        initItemsView();

        registerCompanyCardClickEvents();
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

    function initItemsView() {
        // TODO Before you call loadItems, show loading spinner. Use ViewSpinnerOperator class and itemsView. (Rearrangement needed)
        const companyNames = handler.loadItems();
        // TODO After the loading is finished. Hide the spinner and start rendering.
        const itemsView = document.getElementById('items-view');

        companyNames.forEach(companyName => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('col');
            itemContainer.append(handler.createElementFor(companyName));

            itemsView.append(itemContainer);
        });
    }

    function registerCompanyCardClickEvents() {
        // TODO Add click event handler on all .company-card elements. Callback function is handleCompanyCardClicked
    }

    function handleCompanyCardClicked(event) {
        // TODO 1. Retrieve a clicked element from the event. You either google or investigate content of the event object printing it by console.log(event)
        //      2. Find the nearest (closest) ancestor mark as .company-card. We need to cover case when you click on .company-name or other children.
        //      3. Retrieve from the company-card element the name of the company. (It is stored inside a data attribute set in companiesHandler.js)
        //      4. Find a currently active breadcrumb and remove the active class. (Find by a selector of two classes)
        //      5. Find #company-breadcrumb-item. Set the company name, mark with active class and remove invisible.
        //      6. Show view spinner.
    }

    return {
        init: init
    }
}

new CollectionPageOperator().init();
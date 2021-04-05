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
            let template = document.getElementById(CONST.TEMPLATE);
            let spinner = template.cloneNode(true);
            spinner.setAttribute('id', CONST.ACTIVE);
            // TODO: innerHtml is not a property. innerHTML is.
            viewContainer.innerHtml = "";
            viewContainer.append(spinner);
        },
        hide: function () {
            let activeSpinner = document.getElementById(CONST.ACTIVE);
            activeSpinner.remove();
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
        const itemsView = document.getElementById('items-view');

        const viewSpinnerOperator = new ViewSpinnerOperator();
        viewSpinnerOperator.show(itemsView);

        const companyNames = handler.loadItems();

        viewSpinnerOperator.hide();

        companyNames.forEach(companyName => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('col');
            itemContainer.append(handler.createElementFor(companyName));

            itemsView.append(itemContainer);
        });
    }

    function registerCompanyCardClickEvents() {
        document.querySelectorAll('.company-card').forEach(element => {
            element.addEventListener("click", handleCompanyCardClicked)
        });
    }

    function handleCompanyCardClicked(event) {
        let clickedElement = event.currentTarget;
        let companyName = clickedElement.getAttribute('data-name');

        let activeBreadcrumb = document.querySelector('.breadcrumb-item.active');
        activeBreadcrumb.classList.remove("active");

        let companyBreadcrumb = document.getElementById('company-breadcrumb-item');
        companyBreadcrumb.innerText = companyName;
        companyBreadcrumb.classList.add("active");
        companyBreadcrumb.classList.remove("invisible");

        // TODO 1. Set a new instance of the TeaCollectiblesHandler to the handler property. Note: Constructor requires one parameter. See TeaCollectiblesHandler:1
        //      2. Call initItemsView
    }

    return {
        init: init
    }
}

new CollectionPageOperator().init();
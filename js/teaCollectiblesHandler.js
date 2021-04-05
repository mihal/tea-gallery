function TeaCollectiblesHandler(teaCompany) {
    return {
        /**
         * Get all collected teas for the company.
         *
         * @return {String[]} collected teas for the company
         */
        loadItems: function () {
            // TODO Return here a couple of teas for Teekanne and Pukka. For Pickwick return empty array.
            return [];
        },
        /**
         * Create HTML element for visualization of the tea collectible.
         *
         * @param collectibleData input data, the collected tea HTML element will be created from
         * @return {Node} HTML representation of the collected tea
         */
        createElementFor: function (collectibleData) {
            // TODO 1. Find template by id (tea-collectible-template). Make clone
            //      2. Remove id attribute
            //      3. Find img element inside the cloned element.
            //      4. Set image src attribute to https://5.imimg.com/data5/MZ/ZA/LZ/SELLER-2985372/assam-green-tea-bag-500x500.jpg
            //      5. Set image alt as "<company-name> - <tea-name>"
            //      6. Set tea name into the .cord-title
            //      7. Set company name into the .card-subtitle
        }
    }
}
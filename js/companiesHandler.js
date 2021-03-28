function CompaniesHandler() {
    return {
        /**
         * Get all available companies.
         *
         * @return {String[]} available company names
         */
        loadItems: function () {
            return ["Teekanne", "Pickwick", "Pukka"];
        },
        /**
         * Create HTML element for visualization of the company.
         *
         * @param companyData input data, the company HTML element will be created from
         * @return {Node} HTML representation of the company
         */
        createElementFor: function (companyData) {
            let companyCard = document.getElementById('company-template').cloneNode(true);
            companyCard.removeAttribute('id');
            // TODO Add an attribute called data-name into companyCard. Value is companyData.
            companyCard.querySelector('.company-name').innerText = companyData;

            return companyCard;
        }
    }
}
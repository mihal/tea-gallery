function TeaCollectiblesHandler(teaCompany) {
    return {
        /**
         * Get all collected teas for the company.
         *
         * @return {String[]} collected teas for the company
         */
        loadItems: function() {
            if (teaCompany == "Teekanne") {
                return ["Green Tea Grapefruit", "Ginger & Orange", "Imunita"];
            } else if (teaCompany == "Pukka") {
                return ["Fresh Start"]
            } else {
                return [];
            }
        },
        /**
         * Create HTML element for visualization of the tea collectible.
         *
         * @param collectibleData input data, the collected tea HTML element will be created from
         * @return {Node} HTML representation of the collected tea
         */
        createElementFor: function(collectibleData) {
            let teaCollectible = document.getElementById('tea-collectible-template').cloneNode(true);
            teaCollectible.removeAttribute('id');

            let image = teaCollectible.querySelector('img');
            image.setAttribute('src', "https://5.imimg.com/data5/MZ/ZA/LZ/SELLER-2985372/assam-green-tea-bag-500x500.jpg");
            image.setAttribute('alt', teaCompany + " - " + collectibleData);

            teaCollectible.querySelector('.card-title').innerHTML = collectibleData;
            teaCollectible.querySelector('.card-subtitle').innerHTML = teaCompany;

            return teaCollectible;
        }
    }
}
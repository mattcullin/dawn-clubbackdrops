/* CLUB - adds Beacon modal function to all specified Beacon hash links */

window.addEventListener('DOMContentLoaded', () => {

    const beaconLinkList = [
        {
            "hashLink": "beacon-modal-delivery",
            "beaconArticleID": "5dd57de904286364bc91fbb5"
        },
        {
            "hashLink": "beacon-modal-delivery-gb",
            "beaconArticleID": "6025821fb3ebfb109b5817a9"
        },
        {
            "hashLink": "beacon-modal-delivery-us",
            "beaconArticleID": "602585ceb3ebfb109b5817cc"
        },
        {
            "hashLink": "beacon-modal-delivery-eu",
            "beaconArticleID": "6025437424d2d21e45ed56ac"
        },
        {
            "hashLink": "beacon-modal-delivery-au",
            "beaconArticleID": "602d43378502d1120e9086a7"
        },
        {
            "hashLink": "beacon-modal-delivery-ca",
            "beaconArticleID": "602d43f1661b720174a6e197"
        },
        {
            "hashLink": "beacon-modal-delivery-row",
            "beaconArticleID": "6025877d0a2dae5b58faedbf"
        },
        {
            "hashLink": "beacon-modal-returns",
            "beaconArticleID": "5dccfc9d2c7d3a7e9ae3ee62"
        },
        {
            "hashLink": "beacon-modal-latest",
            "beaconArticleID": "5e78b8292c7d3a7e9ae997ba"
        },
        {
            "hashLink": "beacon-modal-sale",
            "beaconArticleID": "5f3d2a7a2c7d3a352e910f8b"
        },
        {
            "hashLink": "beacon-modal-bulk",
            "beaconArticleID": "620679b168cd260cc2d3a303"
        }
    ]

    beaconLinkList.forEach(function(beaconLink) {

        var hashLink = 'a[href^="#'+beaconLink["hashLink"]+'"]';
        var linkNodes = document.querySelectorAll(hashLink);
        linkNodes.forEach(function(node) {
            node.addEventListener('click', function() {
                Beacon('article', beaconLink["beaconArticleID"], { type: 'modal' })
            });
        });    
    
    });

});
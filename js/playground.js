$(document).ready(function() {

    var iota = new IOTA({
        'provider': 'http://nodes.iota.fm:80'
    });

    curl.init();
    curl.overrideAttachToTangle(iota);

    var minWeight = 18;

    var seed;
    var balance = 0;
    var address;


    $("#get-node-info button").on("click tap", function() {
        $("#get-node-info .waiting").css("display", "block");

        iota.api.getNodeInfo(function(error, success) {
            $("#get-node-info .waiting").css("display", "none");
            if (error) {
                displayError($("#get-node-info .error"), error.message);
            } else {
                $("#get-node-info .result").css("display", "block");
                $("#get-node-info .result").html(JSON.stringify(success, undefined, 2));
            }
        });
    });

    $("#find-tx button").on("click tap", function() {
        $("#find-tx .waiting").css("display", "block");

        var searchValue = { 'bundles': [$("#find-tx input").val()] };
        $("#find-tx input").val('');

        iota.api.findTransactionObjects(searchValue, function(error, success) {
            $("#find-tx .waiting").css("display", "none");
            if (error) {
                displayError($("#find-tx .error"), error.message);
            } else {
                $("#find-tx .result").css("display", "block");
                $("#find-tx .result").html(JSON.stringify(success, undefined, 2));
            }
        });
    });

    function displayError(element, message) {
        element.css('display', 'block');
        element.html(message);
        setTimeout(function() {
            element.css('display', 'none');
            element.html();
        }, 2000);
    }

});
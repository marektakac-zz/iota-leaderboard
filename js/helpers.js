//
// Updates the address on the sidebar to the latest one
//
function updateAddressHTML(address) {

    if (!address)
        return;

    var html = '<div class="panel panel-primary"><div class="panel-heading">Address</div><div class="panel-body">' + address + '</div></div>';

    $("#allAddresses").html(html);
}

//
//  Updates the balance shown on the page
//
function updateBalanceHTML(balance) {
    $("#iota__balance").html(balance);
}

//
//  Updates the leaderboard list HTML
//
function updateLeaderboardHTML(rankedList) {

    // Now we actually sort the rankedList
    rankedList.sort(function(a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });

    var html = '';

    for (var i = 0; i < rankedList.length; i++) {

        var message = JSON.stringify(rankedList[i].message);
        var name = rankedList[i].name;
        var value = rankedList[i].value;
        var rank = i + 1;

        var listElement = '<tr><td class="iota__rank">#' + rank + '</td><td class="iota__name">' + name + '</td><td class="iota__message">' + message + '</td><td class="iota__value">' + value + '</td></tr>';
        html += listElement;
    }

    $("#leaderboard").html(html);
}
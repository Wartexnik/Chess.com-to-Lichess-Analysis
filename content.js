var download_button = document.getElementsByClassName('icon-font-chess download daily-game-footer-button');
var pgn_value = document.getElementsByClassName('share-menu-tab-image-component share-menu-tab')

setTimeout(function(){
    if (download_button[0]) {
        download_button[0].addEventListener("click", () =>
            setTimeout(function () {
                var pgn_value = document.getElementsByClassName('share-menu-tab-image-component share-menu-tab')[0].getAttribute('pgn')
                httpPost(pgn_value)
            }, 1000))
    }
}, 1000)

function httpPost(pgn_value) {
    var url = "https://lichess.org/api/import";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer your_access_token_here"); // modify this line
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            window.open(JSON.parse(xhr.responseText).url, '_blank').focus();
        }
    };

    var data = "pgn=" + pgn_value.toString();

    xhr.send(data);
}
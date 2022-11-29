
function toPDF(url) {
    const urlParams = new URLSearchParams(url);

    if (urlParams.has('pdf')) {
        return decodeURIComponent(urlParams.get('pdf'));
    }
}
const url = toPDF(window.location.search);
window.location.assign(url);

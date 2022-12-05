function isPDF(url){
    const param = new URLSearchParams(url.search);
    // console.log(url.pathname);
    // console.log(url.hostname);
    // console.log(param.has('pdf'));

    return !!(url.hostname === "www.physicsandmathstutor.com" &&
        url.pathname.split('/')[1] === "pdf-pages" &&
        param.has('pdf'));
}


function toPDF(url) {
    const urlParams = new URLSearchParams(url.search);
    console.log(urlParams);

    if (isPDF(url)) {
        let out = urlParams.get('pdf');
        console.log(out);
        out = decodeURIComponent(out);
        console.log(out);
        return out;
    }
    else {
        return url;
    }
}
function replaceURLs() {
    console.log("replacing");
    const aTags = [...document.querySelectorAll('li > a')];
    for (const aTag of aTags) {
        const url = new URL(aTag.href);
        // let pat = new URLPattern({pathname: 'pdf-pages'})

        aTag.setAttribute('href', toPDF(url));

    }

}
console.log("starting");
const search = window.location;
console.log(isPDF(search))

if (isPDF(search)) {
    window.location.assign(toPDF(search));
} else {
    replaceURLs();
}

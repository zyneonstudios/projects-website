urlParams = new URLSearchParams(window.location.search);
if(urlParams.get("from")) {
    //const from = urlParams.get("from");
    history.pushState({}, '', window.location.pathname);
}
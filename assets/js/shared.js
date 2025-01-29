addEventListener("DOMContentLoaded", () => {
    initDisplay();
    document.body.innerHTML += "<div id='socials'><a href='https://www.zyneonstudios.de'><i class='bx bxs-exit'></i></div>";
    if(location.href.startsWith("https://projects.zyneonstudios.de/")&&location.href.endsWith(".html")) {
        location.href = location.href.replaceAll(".html","");
    }
});

addEventListener("resize", () => {
    initDisplay();
});

function initDisplay() {
    const footer = document.getElementById("footer").querySelector(".links");
    const cusid_ele = document.getElementsByClassName('news-card');
    const title = document.getElementById("title");

    if(isMobile()) {
        title.classList.add("active");
        footer.classList.add("flex-column");
        footer.classList.remove("flex-row");
        for (let i = 0; i < cusid_ele.length; ++i) {
            const item = cusid_ele[i];
            if(item.querySelector(".buttons")) {
                item.querySelector(".buttons").classList.add("active");
            }
        }
    } else {
        title.classList.remove("active");
        footer.classList.add("flex-row");
        footer.classList.remove("flex-column");
        for (let i = 0; i < cusid_ele.length; ++i) {
            const item = cusid_ele[i];
            if(item.querySelector(".buttons")) {
                item.querySelector(".buttons").classList.remove("active");
            }
        }
    }
}

function isMobile() {
    if(window.innerWidth<800) {
        return true;
    }
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

addEventListener("DOMContentLoaded", (event) => {
    const url = location.hostname.toLowerCase().replaceAll("www.","");
    if(url.includes("zyneonstudios.com")||url.includes("zyneonstudios.eu")||url.includes("zyneonstudios.org")||url.includes("zyneonstudios.net")) {
        const bodyText = document.body.innerHTML;
        document.body.innerHTML = bodyText.replaceAll('zyneonstudios.de', url);
    }
});
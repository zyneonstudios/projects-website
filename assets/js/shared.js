addEventListener("DOMContentLoaded", () => {
    initDisplay();
    document.body.innerHTML += "<div id='socials'><a href='https://www.zyneonstudios.com'><i class='bx bxs-exit'></i></div>";
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
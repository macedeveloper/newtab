// Disclaimer: this js code is AI-generated, i am sorry i'm not really good at JS :(


var favsPageCount = 0
var favsCurrentPage = 0

document.getElementById("page_scroll_left").addEventListener("click", favsScrollLeft);
document.getElementById("page_scroll_right").addEventListener("click", favsScrollRight);


// Fetch the favs.json file
fetch('favs.json')
    .then(response => response.json())
    .then(data => {
        const windowContent = document.getElementById('window-content');

        var pageScrollRight = document.getElementById("page_scroll_right");

        // Loop through each category in the JSON
        for (const [categoryName, favorites] of Object.entries(data)) {
            favsPageCount += 1
            // Create the page div
            const pageDiv = document.createElement('div');
            pageDiv.className = 'window-page';

            // Create links for each favorite in the category
            favorites.forEach(fav => {
                const link = document.createElement('a');
                link.href = fav.link;

                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'button fav';
                if (fav.link == "") {
                    link.href = "#";
                    buttonDiv.className = 'button fake-fav';
                }

                const img = document.createElement('img');
                img.src = fav.imgsrc;

                const favName = document.createElement('p');
                favName.textContent = fav.name;

                buttonDiv.appendChild(img);
                buttonDiv.appendChild(favName);
                link.appendChild(buttonDiv);
                pageDiv.appendChild(link);

            });
            
            if (favsPageCount != 1) {
                pageDiv.style.display = "none";
            }
            // Add the page div to the window content
            windowContent.appendChild(pageDiv);
        }
        windowContent.appendChild(pageScrollRight)
    })
    .catch(error => {
        console.error('Error loading favs.json:', error);
    });


// Fetch Favicon:
// javascript:(function()%7Bfunction getFavicon() %7Bconst links %3D document.querySelectorAll('link%5Brel*%3D"icon"%5D')%3Bif (links.length > 0) %7Breturn links%5B0%5D.href%3B%7Dreturn %60%24%7Bwindow.location.origin%7D%2Ffavicon.ico%60%3B%7Dalert(getFavicon())%7D)()


function favsScrollUpdate () {
    const elements = document.querySelectorAll("#window-content > :not(.page_scroll)");

    for (let n = 0; n < elements.length; n++) {
        if (n == favsCurrentPage) {
            elements[n].style.display = "";
        }
        else {
            elements[n].style.display = "none";
        }
    }
}



async function favsScrollLeft () {
    favsCurrentPage = favsCurrentPage - 1;
    favsCurrentPage = (favsCurrentPage + favsPageCount) % favsPageCount;
    
    favsScrollUpdate()

    var a = document.getElementById("window-content");
    a.classList.add("scrolledLeft");
    await new Promise(resolve => setTimeout(resolve, 0));
    a.classList.remove("scrolledLeft");
}


async function favsScrollRight () {
    favsCurrentPage = favsCurrentPage + 1;
    favsCurrentPage = (favsCurrentPage + favsPageCount) % favsPageCount;
    
    favsScrollUpdate()

    var a = document.getElementById("window-content");
    a.classList.add("scrolledRight");
    await new Promise(resolve => setTimeout(resolve, 0));
    a.classList.remove("scrolledRight");
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        favsScrollLeft();
    }
    if (e.key === 'ArrowRight') {
        favsScrollRight();
    }
});

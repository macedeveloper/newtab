// this js code is AI-generated
// i am sorry

// Fetch the favs.json file
fetch('favs.json')
    .then(response => response.json())
    .then(data => {
        const windowContent = document.getElementById('window-content');

        // Loop through each category in the JSON
        for (const [categoryName, favorites] of Object.entries(data)) {
            // Create the subcontent div
            const subContentDiv = document.createElement('div');
            subContentDiv.className = 'window-subcontent';

            // Create the category title paragraph
            const categoryTitle = document.createElement('p');
            categoryTitle.textContent = categoryName;
            subContentDiv.appendChild(categoryTitle);

            // Create links for each favorite in the category
            favorites.forEach(fav => {
                const link = document.createElement('a');
                link.href = fav.link;

                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'button fav';

                const img = document.createElement('img');
                img.src = fav.imgsrc;

                buttonDiv.appendChild(img);
                link.appendChild(buttonDiv);
                subContentDiv.appendChild(link);
            });

            // Add the subcontent div to the window content
            windowContent.appendChild(subContentDiv);
        }
    })
    .catch(error => {
        console.error('Error loading favs.json:', error);
    });

// Fetch Favicon:
// javascript:(function()%7Bfunction getFavicon() %7Bconst links %3D document.querySelectorAll('link%5Brel*%3D"icon"%5D')%3Bif (links.length > 0) %7Breturn links%5B0%5D.href%3B%7Dreturn %60%24%7Bwindow.location.origin%7D%2Ffavicon.ico%60%3B%7Dalert(getFavicon())%7D)()

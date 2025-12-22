const input = document.getElementById('searchbox_input');
const button = document.getElementById('searchbox_button');

button.addEventListener('click', search);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') search();
});

function search() {
    let query = input.value.trim();
    if (!query) return;
    
    // URL regex: handles http(s), www, or domain-only like youtube.com
    const urlRegex = /^(https?:\/\/)?([\w.-]+\.[a-zA-Z]{2,})(\/.*)?$/;
    
    if (urlRegex.test(query)) {
        // Direct URL - add https:// if missing
        if (!query.startsWith('http://') && !query.startsWith('https://')) {
            query = 'https://' + query;
        }
        window.open(query, '');
    } else {
        // Search mode
        const encodedQuery = encodeURIComponent(query);
        const url = `https://duckduckgo.com/?q=${encodedQuery}`;
        window.open(url, '');
    }
}

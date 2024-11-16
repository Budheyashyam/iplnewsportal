document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    // Replace with your Google Sheet's published URL (CSV format)
    const sheetURL = "YOUR_GOOGLE_SHEET_CSV_URL_HERE";

    // Fetch data from Google Sheets
    fetch(sheetURL)
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header row
            rows.forEach(row => {
                const [title, content] = row.split(","); // Split title and content
                const newsItem = document.createElement("div");
                newsItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            newsContainer.innerHTML = "<p>Failed to load news.</p>";
        });
});

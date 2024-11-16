document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    const sampleNews = [
        { title: "IPL 2024 Kickoff!", content: "The IPL 2024 season begins with exciting matches." },
        { title: "Player of the Week", content: "An incredible performance by XYZ sets a new record." },
        { title: "Team Updates", content: "Latest updates on teams and player lineups." },
    ];

    sampleNews.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
});

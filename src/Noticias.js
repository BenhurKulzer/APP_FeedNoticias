const url = "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=4bdb7d72ffe945ca9d8778d5b85c88d2";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

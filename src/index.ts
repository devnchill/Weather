import "./css/layout.css";

// Sets up evenlistener which further manages modules
// import "./components/Controller.ts";

const url = `https://api.geocodify.com/v2/autocomplete?api_key=rd4E2oZ2dXpYqvXMXTDEJiOjLVprTImw&q=Deo`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });

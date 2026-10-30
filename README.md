# TravelBloom: Travel Recommendation Site

A travel website that recommends destinations based on what you search for. Type "beach", "temple" or a country such as Japan, and it shows matching places with a photo and a short description. Built with HTML, CSS and JavaScript.

## Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | The landing page with a full-screen travel background, the search bar and the recommendation results |
| About Us | `about-us.html` | The company's mission and values, and a team section |
| Contact Us | `contact-us.html` | A contact form with name, email and message fields |

## Features

- **Keyword search:** the search bar in the navigation recognizes three kinds of search:
  - **"beach" / "beaches"** → Bora Bora and Copacabana Beach
  - **"temple" / "temples"** → Angkor Wat and the Taj Mahal
  - **a country name** (Australia, Japan or Brazil) → two cities in that country, such as Sydney and Melbourne
- **Not case-sensitive:** "JAPAN", "japan" and "Japan" all work.
- **Result cards:** each recommendation shows a photo, the place's name and a description.
- **No-match message:** suggests valid searches when nothing matches.
- **Clear button:** empties the search box and removes the results.

## How it works

The destination data lives in `travel_recommendation_api.json`, a local JSON file shaped like an API response, with `countries` (each with a list of `cities`), `temples` and `beaches`. When you click **Search**, `travel_recommendation.js`:

1. reads the search text and lowercases it,
2. loads the JSON file with `fetch()`,
3. picks the matching category (beaches, temples or a country's cities),
4. builds a result card for each of the first two matches and adds it to the page.

## Project structure

```
index.html                       Home page with the search bar and results
about-us.html                    About Us page
contact-us.html                  Contact Us page
travel_recommendation.css        Styles for all three pages
travel_recommendation.js         Search and result rendering
travel_recommendation_api.json   Destination data (countries, temples, beaches)
*.jpg, airplane.png              Destination photos, background and logo
```

## Running it locally

The search loads `travel_recommendation_api.json` with `fetch()`, and browsers block that when you open the HTML file directly (`file://`). Run a small local server instead:

- **VS Code:** install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**, or
- **Python:** run `python3 -m http.server` in this folder, then open http://localhost:8000.

## Limitations

This is a front-end-only project, so:

- the Contact Us form and the **Book Now** and **Visit** buttons are not connected to anything;
- the team members on the About Us page are placeholders;
- the search covers the destinations in the JSON file: two beaches, two temples, and Australia, Japan and Brazil.

## Built with

- HTML5 and CSS3
- JavaScript (Fetch API and DOM manipulation)
- [Font Awesome](https://fontawesome.com/) for the search icon

Created by Sangye Tenphel, June 2025.

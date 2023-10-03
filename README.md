# ClanTube - Your Distraction-Free Learning Hub

ClanTube is a web application that aims to provide users with a distraction-free learning experience by allowing them to create personalized playlists of educational YouTube content. With ClanTube, users can add, organize, and take notes on their favorite educational videos.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)

## Demo

![ClanTube Demo](demo.gif)

You can check out a live demo of ClanTube [here](#).

## Features

- **Adding Playlists**: Users can add new playlists by providing a valid YouTube playlist URL or playlist ID.

- **Deleting Playlists**: Users can delete their playlists when they no longer need them.

- **Adding Playlist to Favorites**: Users can mark playlists as favorites for quick access.

- **Removing Playlist from Favorites**: Users can remove playlists from their favorites list.

- **Automatic Addition to "Recently Watched" Playlist**: Playlists that users watch are automatically added to the "Recently Watched" playlist.

- **Note-Taking**: Users can take notes while watching a video, edit them, and delete them as needed. The note-taking feature supports rich text formatting for better organization.

## Getting Started

To get started with ClanTube locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ClanTube.git
   cd ClanTube
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure API Keys:
   - You will need to obtain API keys for the YouTube Data API and any other necessary APIs.
   - Create a `.env` file in the project root and add your API keys:
     ```env
     REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
     # Add other API keys here if necessary
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your web browser and access ClanTube at `http://localhost:3000`.

## Tech Stack

- **Frontend**:
  - React.js
  - Redux Toolkit for state management
  - `react-rte` for rich text note-taking
  - Axios for API requests
  - Other libraries and tools as needed

- **API**:
  - YouTube Data API
  - Other APIs as required


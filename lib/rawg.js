// Obtener listado de últimos juegos
export async function getLatestGames() {
  const API_KEY = "9709865e12ce4996a03f90d29a056771";
  const LATEST_GAMES_URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-02-01,2024-12-31&ordering=-rating&page_size=24`;
  try {
    const rawData = await fetch(LATEST_GAMES_URL);
    const json = await rawData.json();
    
    return json.results.map((game) => ({
      title: game.name,
      releaseDate: game.released,
      slug: game.slug,
      image: game.background_image || game.short_screenshots?.[0]?.image, 
      genres: game.genres?.map(g => g.name) || [],
      platforms: game.platforms?.map(p => p.platform.name) || []
    }));
    
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; 
  }
}

// Obtener detalles específicos de un juego
export async function getGameDetails(slug) {
  const API_KEY = "9709865e12ce4996a03f90d29a056771";
  const GAME_DETAILS_URL = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`;

  try {
    const rawData = await fetch(GAME_DETAILS_URL);
    const game = await rawData.json();
    console.log(game);

    return {
      title: game.name,
      description: game.description_raw || "Descripción no disponible",
      releaseDate: game.released,
      slug: game.slug,
      image: game.background_image || game.short_screenshots?.[0]?.image,
      website: game.website || "#", 
      developers: game.developers?.map(d => d.name) || [],
      platforms: game.platforms?.map(p => p.platform.name) || [],
      tags: game.tags?.map(t => t.name) || []
    };
    
  } catch (error) {
    console.error("Error fetching game details:", error);
    return null;
  }
}
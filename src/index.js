const officialApi = require('./officialApi')
const getSeason = require('./seasons.js')
const getNewsNoDetails = require('./news.js')
const search = require('./search')
const { getInfoFromName, getInfoFromURL, getResultsFromSearch, getInfoFromCharacterURL } = require('./info.js')
const { getWatchListFromUser } = require('./watchList.js')
const { getEpisodesList } = require('./episodes.js')
const { getReviewsList } = require('./reviews.js')
const { getRecommendationsList } = require('./recommendations.js')
const { getStats } = require('./stats.js')
const { getPictures } = require('./pictures.js')

module.exports = {
  officialApi,
  getSeason,
  getNewsNoDetails,
  getInfoFromName,
  getInfoFromURL,
  getInfoFromCharacterURL,
  getResultsFromSearch,
  getWatchListFromUser,
  getEpisodesList,
  getReviewsList,
  getRecommendationsList,
  getStats,
  getPictures,
  search
}

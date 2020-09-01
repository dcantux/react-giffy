import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}


const getGifs = ( { keyword = 'John Wick', limit = 5, page = 0, rating= 'g' } = {} ) => {
    
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`
    
    return fetch(apiURL)
    .then(resp => resp.json())
    .then(fromApiResponseToGifs) ;
}

export default getGifs

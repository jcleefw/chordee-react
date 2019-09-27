import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const insertSong = payload => api.post(`/song`, payload)
export const getAllSongs = () => api.get(`/songs`)
export const updateSongById = (id, payload) => api.put(`/song/${id}`, payload)
export const deleteSongById = id => api.delete(`/song/${id}`)
export const getSongById = id => api.get(`/song/${id}`)

const apis = {
  insertSong,
  getAllSongs,
  updateSongById,
  deleteSongById,
  getSongById,
}

export default apis
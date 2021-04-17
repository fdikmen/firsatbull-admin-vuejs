import axios from 'axios'

export default async function uploadImgMixin(file) {
    const resData = new FormData();
    resData.append('file', file);
    resData.append('filename', file.value);
  try {
    const response = await axios.post('/upload', resData)
    const data = await response.data
    return data
  } catch (e) {
    return e
  }
}

import Axios from "axios";

const KEY = "AIzaSyA1jbRh3Pt9fQ7QH35DWfyIKqryOucZeAE";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
})
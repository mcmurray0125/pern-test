import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:5172/api/v1/restaurants"
})
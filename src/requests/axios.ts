import axios from "axios";

export default axios.create({
    baseURL: 'https://take-home.hasura.app/api/rest'
})


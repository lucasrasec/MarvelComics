import axios from "axios";
import md5 from "md5";

const privatekey = process.env.REACT_APP_MARVEL_PRIVATE_KEY
const publickey = process.env.REACT_APP_MARVEL_PUBLIC_KEY

const baseURL = process.env.REACT_APP_MARVEL_BASE_URL


const ts = Number(new Date())
const hash = md5(ts + privatekey + publickey)

const Conection = axios.create({
    baseURL: baseURL,
    params: {
        ts,
        apikey: publickey,
        hash
    },
})

export default Conection

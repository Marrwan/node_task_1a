const  axios = require("axios")
const config = require("../config/config")
const request = require("request")


exports.getHomePage = async (req,res) => {
try {
    // console.log(config);
   
   let results = await axios.get(`${config.weather_url}current.json`, {params : {key: config.weather_key, q:"Ibadan"}});
 let weather = results.data;
res.render('index', {weather} )
} catch (error) {
    res.json({ error : true , message : error.message, info : error})
}
}
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3TJTQ3ARrJzztK07tBJsNOXe-H9csOB3JDDMqC4-Vwm677E7Ba1d1XeK7PIAY2Dl_tjL8KNSxmbhp43Igd8KxA5Ji1zKA-Y5ETyEfgr1dVJGAP4ae2z8_ososeJjXXYx'
    }
});

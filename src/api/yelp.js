import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer njW-IjxDjKjJQY08XePDlGHCGHeJOj-1uaS3T4LM2hQXCIY32ATZnXK2K35anvRFTcm55olf4CvKVFgUElLEkH8akTUIUqX_p1pXdPE13chTj6tAyU8aqc6Hmmi7XnYx'
    }
});


const axios = require("axios");

exports.fetchEvents = (req,res,next) => {
    // axios.get("https://dummy.restapiexample.com/api/v1/employees")
    // .then((res) => {
    //     console.log(res);
    // })
    axios.get("https://api.twitter.com/2/tweets/search/recent?query=electric vehicles webinar -is:retweet has:links&max_results=100",{
        headers:{
            "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAAAJ4TgEAAAAA9GZXUBHw8WV%2FJsy9NahMqhOoKHQ%3DfLulmbaNwXjxcDveA9439tsa5RnzYSyrksq4x8rIYHjkFi8HXJ"
        }
    })
    .then((response) => {
        console.log(response.data.data);
        var urlRegex = /(https?:\/\/[^ ]*)/;
        let urlArray = response.data.data.map(element => {
            element.eventUrl = element.text.match(urlRegex)[0];
            return element;
        });
        return res.status(200).json({
            webinarTweets:urlArray
        })
    })
    .catch((err) => {
        console.log(err);
    })
}
// // http%3A%2F%2Flocalhost%3A3000
// // GET https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=776jnd09knxy7f&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=r_liteprofile
// // AQRomlKx-EnkPxgf-uoHM8O3YTGJKVarHJUUlzUdLdi1NweKpzEkB5vcjviqEybYO1H50Dv8U-JwbxxFTl-lyACRo5NTGv9Oo4qWuLuiB-w0esuMtE5YVxGiTrwl9BKWVzn4P-NH77uo7g-277e3TtH05kbTuV-KWEzRRCP5QfkAQNC116UR7VevOF-V3t_D95BkB7BryKOdhhj8Eqw

// // curl -ik -X POST https://www.linkedin.com/oauth/v2/accessTokengrant_type=authorization_code&code=AQRomlKx-EnkPxgf-uoHM8O3YTGJKVarHJUUlzUdLdi1NweKpzEkB5vcjviqEybYO1H50Dv8U-JwbxxFTl-lyACRo5NTGv9Oo4qWuLuiB-w0esuMtE5YVxGiTrwl9BKWVzn4P-NH77uo7g-277e3TtH05kbTuV-KWEzRRCP5QfkAQNC116UR7VevOF-V3t_D95BkB7BryKOdhhj8Eqw&redirect_uri=http%3A%2F%2Flocalhost%3A3000&client_id=776jnd09knxy7f&client_secret=6uY3MJvuol5R6ZEg' \-H 'Content-Type: application/x-www-form-urlencoded'
// AQUePTwiATC0OU2XME32_ysCtc67vM0aGowBVNX51Iaa7PLUhBYnIireh9ZNXbhiiPjzLBcCXLuT_2yJ914QwsAOdV8SFa9opXddF-ilfhpnXA0j3F15wMKyjNR9BFdGhFfNTen8v2iXLjL-mE6aML1yZaV_qOqT_hDeHOB7qKoScfLN4ZNIsbDw2eV7wODqPGMwDyGJJXylaChr5jhbKqAk_3bGC-EcDhqdCyFWxroYB5gg1Hov8CWqijfUs4LjlnbEt1QQnx5gfhmaq1sF2DzU21skZqbABnsPmk4zG0-j_8UEvfDlh771XFaehBvOe0PT3RSI87S07i56deh7foID_s4zZA

// GET https://api.linkedin.com/v2/events?organizer=urn%3Ali%3Aorganization%3A30109887&q=organizerLeadGenFormEnabledEvents&start=0&count=2


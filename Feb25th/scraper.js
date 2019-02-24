const request = require("request"),
    cheerio = require("cheerio"),
    urlPage = "https://www.aliexpress.com/item/Visofree-Mink-Lashes-3D-Mink-Eyelashes-100-Cruelty-free-Lashes-Handmade-Reusable-Natural-Eyelashes-Popular-False/32867282565.html?spm=a2g01.11715694.fdpcl001.1.47a325c4zZ6seK&gps-id=5547572&scm=1007.19201.111800.0&scm_id=1007.19201.111800.0&scm-url=1007.19201.111800.0&pvid=b31adc50-0bda-437a-a4f5-1017127dc4a7";


let listing = {};

request.get({ url: urlPage }, (err, res, body) => {
    if (err) {
        console.log(err);
    } else {
        const $ = cheerio.load(body)

        $('.product-name').filter(function() {
            let data = $(this);
            console.log(data.text());
            listing.title = data.text();
        });
        // console.log(body);
    }
})
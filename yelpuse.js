var yelp = require("yelp").createClient({
  consumer_key: "kluiSDN9YGrPUPf11m5tyQ", 
  consumer_secret: "01iR86nfeFHNT68A1UsbdJr19cc",
  token: "1YvnFIvsNfNdAQPkUG1azlyjrMq2oTrC",
  token_secret: "lkIcuEbaX9NMMzsZWu4OZUWLonE"
});


// See http://www.yelp.com/developers/documentation/v2/search_api
/*
yelp.search({term: "food", location: "San-Fransisco"}, function(error, data) {
  console.log(error);
  console.log(data);
});
*/


// See http://www.yelp.com/developers/documentation/v2/business

yelp.business("yelp-los-angeles", function(error, data) {
  console.log(error);
 console.log("Error Completed - now data will begin !! ");
  console.log(data);
});

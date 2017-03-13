# APIs
---

APIs provide 3 primary methods to access them:

1. CORS - JSON (not all are CORS)
2. non-CORS - JSONP (not all are JSONP)
3. server-side proxy (server makes the JSON request for us, and returns it to the browser)

Methods 1 and 2 let JS developers make direct requests from the Browser. Method 3 requires the backend to forward a client-request to the API.

You can also host your own separate RESTful server. Ask you instructor about a plethora of server-side Node options.

> Need to stub out some JSON data? try http://beta.json-generator.com/

## Financial

- https://www.quandl.com/

## Communications (Email, SMS, Phone)

- Email: http://www.mailgun.com/
- Twilio: https://www.twilio.com/

## Social APIs

- meetup - http://www.meetup.com/meetup_api/
- twitter - https://dev.twitter.com/
    - twitter "intents" (put interactive widgets on your page and have someone tweet/reply to you via twitter) - https://dev.twitter.com/docs/intents
    - twitter for websites (follow button, embed tweets on a page) - https://dev.twitter.com/docs/tfw
    - REST API (uses OAuth) - https://dev.twitter.com/docs/api/1.1
- facebook - https://developers.facebook.com/
- linkedin - https://developer.linkedin.com/apis
- foursquare - https://developer.foursquare.com/
- yelp - http://www.yelp.com/developers/documentation/v2/search_api
- github - https://developer.github.com/v3/
- connect to social APIs with http://adodson.com/hello.js/#install

## Food-related APIs

- Yummly - https://developer.yummly.com/
- BreweryDB - http://www.brewerydb.com/developers

## Government and Civil APIs

- Sunlight Foundation - http://sunlightfoundation.com/api/
- Capitol Words - http://capitolwords.org/term/code/?search=1
- CDC - https://data.cdc.gov/ and http://wonder.cdc.gov/
- Federal Data.gov project - https://www.data.gov/developers/apis

## Weather APIs

- Darksky - https://darksky.net/dev/

## Google APIs

- maps, directions, geocoder, places, etc - https://developers.google.com/maps/documentation/javascript/
- static maps - just a url for an image, e.g.:

    > http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284

- streetview api - again just a url, e.g.: http://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10
- tasks - https://developers.google.com/google-apps/tasks/v1/reference/tasks/update
- Google custom search engine - https://developers.google.com/custom-search/json-api/v1/overview

## Music and Video APIs

- Spotify - https://developer.spotify.com/
- Soundcloud - https://developers.soundcloud.com/
- Deezer - http://developers.deezer.com/
- Grooveshark - http://developers.grooveshark.com/
- Rdio - http://www.rdio.com/developers/
- YouTube - https://developers.google.com/youtube/v3/getting-started
- Vimeo - https://developer.vimeo.com/
- BandsInTown - http://www.bandsintown.com/api/overview
- Dolby Audio - http://developer.dolby.com/

## Image APIs

- Flickr - https://www.flickr.com/services/api/
- PlaceKitten - http://placekitten.com/
- PlaceBacn - http://placebacn.com/
- LoremPixel - http://lorempixel.com/

## File and Data Storage APIs

- Dropbox - https://www.dropbox.com/developers/datastore

    - also, embeddable JS widgets on your page -> https://www.dropbox.com/developers/dropins

- AWS - http://aws.amazon.com/sdk-for-browser/
- Firebase - https://www.firebase.com/how-it-works.html
- Filestack - https://www.filestack.com/


## Payments, Credit Card Processing, and Shopping Carts

- Stripe - https://stripe.com/docs/api - https://stripe.com/docs/stripe.js
- Braintree - https://developers.braintreepayments.com/javascript+node/start/overview
- Paypal - https://developer.paypal.com/docs/api/
- Snipcart - https://snipcart.com/


## Retail

- BestBuy - https://developer.bestbuy.com/

## News
- NYT - http://developer.nytimes.com/docs
- NPR - http://dev.npr.org/
- HackerNews - http://api.ihackernews.com/


## Dictionary / Words / Thesaurus APIs

- DictionaryAPI - http://dictionaryapi.com/ - example at http://whispering-island-7828.herokuapp.com/#magic

## Images/GIFs

- Giphy - https://github.com/giphy/GiphyAPI

## Real Estate APIs

- Trulia - http://developer.trulia.com/
- Zillow - http://www.zillow.com/howto/api/PropertyDetailsAPIOverview.htm
- http://www.getziptastic.com/

## Job APIs

- USA jobs - http://search.digitalgov.gov/developer/jobs.html
- current API you're using: http://www.authenticjobs.com/api/documentation/
- possible XML API: http://www.indeed.com/jsp/apiinfo.jsp
- JS-based API for LinkedIn Jobs: https://developer.linkedin.com/documents/getting-started-javascript-api
- Stack Overflow XML feed: http://careers.stackoverflow.com/jobs/feed?searchTerm=javascript&location=tx&range=160&distanceUnits=Miles

## Transportation APIs

- Uber - https://developer.uber.com/

## Real Devices

- Oculus - http://www.oculus.com/dk2/ - https://github.com/Instrument/oculus-bridge
- Tessel - https://tessel.io/ - https://tessel.io/docs
- Nest - https://nest.com/ - https://developer.nest.com/documentation/control - https://developer.nest.com/documentation/alert

## Movies/Music
- IMDB / OMDB - http://www.omdbapi.com/
- Rotten Tomatoes - http://developer.rottentomatoes.com/docs/read/JSON

## Other  
- Producthunt - https://github.com/karan/Hook
- Trello - https://trello.com/docs/
- Wunderlist - https://developer.wunderlist.com/documentation/tools/wunderlist.js
- Track Ships / Vessels - http://www.fleetmon.com/faq/public_api
- Wikipedia - http://www.mediawiki.org/wiki/API:Main_page
- EasyPost - Shipping integration and postage ordering with FedEx/UPS/USPS/DHL - https://www.easypost.com/
- Wit - natural language processing - http://labs.wit.ai/demo/index.html
- Nest - https://developer.nest.com/documentation/control
- FlightAware - http://flightaware.com/commercial/flightxml/
- Evernote - https://dev.evernote.com/doc/
- Marvel - http://developer.marvel.com/docs
- Starwars - http://swapi.co/


## Large Databases/Lists of APIs
- https://github.com/toddmotto/public-apis
- https://www.mashape.com/explore

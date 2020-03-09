//todo: move DB confing in separat file

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reviewapp-30339.firebaseio.com"
  });

var db = admin.firestore()

//controlloers for Locations

function postReview(req, res) {
    const locationId = req.params.locationId
    const reviewsRef = db.collection('locations').doc(locationId).collection('reviews')
    let data = req.body
    reviewsRef.add(data)
        .then(ref => {
            const review = reviewsRef.doc(ref.id)
            review.update({ id: ref.id })
        });
    res.send(data)
}

function getReviews(locationId) {
    const reviewsRef = db.collection('locations').doc(locationId).collection('reviews')
    allReviews = []
    return reviewsRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                allReviews.push(doc.data())
            })
            return allReviews
        })
        .catch(err => { console.log('no reviews for this location', err) })
}

function getLocation(req, res) {
    const locationId = req.params.locationId
    const locationRef = db.collection('locations').doc(locationId)
    locationRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                data = doc.data()
                reviews = []
                getReviews(locationId).then(result => {
                    data.reviews = result;
                    res.send(data);
                })
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
}

function getAllLocations(req, res) {
    var locationsRef = db.collection('locations');
    var allLocations = []
    locationsRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                allLocations.push(doc.data())
                console.log(doc.id, '=>', doc.data());
            });
            res.send(allLocations)
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}

function postLocation(location, req, res) {
    let data = {}
    location ? data = location : data = req.body
    db.collection('locations').add(data)
        .then(ref => {
            const locationRef = db.collection('locations').doc(ref.id)
            locationRef.update({ id: ref.id })
        });
    res.send(data)
}


function postMultipleLocations(req, res) {
    //it saves locations to db , but doesnt send response to client
    console.log(req.body)
    const locations = req.body
    // const locationsRef = db.collection('locations')
    locations.forEach(location => postLocation(location, req, res))
}

module.exports = { getAllLocations, postLocation, getLocation, postMultipleLocations, postReview }
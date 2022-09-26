import { Flight } from "../models/flight.js";

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index',{
      airline,
      airport,
      flightNo,
      departs
    })
  })
}

export {
  index
}
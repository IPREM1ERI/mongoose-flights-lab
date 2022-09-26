import { Flight } from "../models/flight.js";

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index',{
      flights,
      title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(fligh => {
    res.redirect('/flights')
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}

export {
  index, 
  newFlight as new,
  create,
}
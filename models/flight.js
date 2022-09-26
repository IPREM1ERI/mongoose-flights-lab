import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type:String,
    enum: ['Southwest','United','American']
  },
  airport: {
    type: String,
    enum:['AUS','DFW','LAX','DEN','SAN'],
    default:'DEN'
  },
  flightNo: {
    type: Number, min: 10, max: 9999
  },
  departs: {
    type: Date,
    default: oneYearFromNow()
  }
})

function oneYearFromNow() {
  const today = new Date()
  today.setFullYear(today.getFullYear() + 1)
  return today
}

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
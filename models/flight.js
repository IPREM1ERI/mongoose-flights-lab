import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema  = new Schema ({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  }
})

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
    type: Number, 
    min: 10, 
    max: 9999
  },
  departs: {
    type: Date,
    default: oneYearFromNow()
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref:'Meal'}]
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
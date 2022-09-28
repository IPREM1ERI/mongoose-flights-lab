import { Meal } from '../models/meal.js'

function addMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals
    })
  })
}

export {
  addMeal as new
}

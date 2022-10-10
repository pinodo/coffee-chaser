import coffees from '../data/coffees'
import moods from '../data/moods'

// moods : a list of mood indexs user have selected
// temperature : decimal temp valu fetched from OpenWeatherAPI
function findScoresById(moodsArray, idToLookFor) {
  for (const mood of moodsArray) {
    if (mood.id === idToLookFor) {
      return mood.scores
    }
  }
  return false
}

function calculateScoresByMoods(selectedMoodIDs) {
  let totalScoresArray = new Array(coffees.length).fill(0)
  for (const id of selectedMoodIDs) {
    const item = findScoresById(moods, id)
    totalScoresArray = totalScoresArray.map((score, index) => score + item[index])
  }
  return totalScoresArray
}

function getIndexesWithTotalScoresArray(totalScoresArray) {
  let maxScore = totalScoresArray[0]
  let maxIndexes = [0]

  for (let i = 1; i < totalScoresArray.length; ++i) {
    if (totalScoresArray[i] > maxScore) {
      maxScore = totalScoresArray[i]
      maxIndexes = []
      maxIndexes.push(i)
    } else if (totalScoresArray[i] === maxScore) {
      maxIndexes.push(i)
    }
  }
  return maxIndexes
}

function tieBreaker(resultOnlyDrinkTemp, indexesCoffeesWithMaxScores) {
  let result = resultOnlyDrinkTemp
  if (indexesCoffeesWithMaxScores.length === 1) {
    result += coffees[indexesCoffeesWithMaxScores[0]].name
  } else {
    result += coffees[indexesCoffeesWithMaxScores[Math.floor(Math.random() * indexesCoffeesWithMaxScores.length)]].name
  }
  return result
}

function recommendCoffee(selectedMoodIDs, temperature) {
  // Choose cold or hot drink.
  let result = ''
  if (temperature < 10) {
    result += 'hot '
  } else if (temperature >= 17) {
    result += 'iced '
  }

  const totalScoresArray = calculateScoresByMoods(selectedMoodIDs,)

  const indexesCoffeesWithMaxScores = getIndexesWithTotalScoresArray(totalScoresArray)

  result = tieBreaker(result, indexesCoffeesWithMaxScores)
  return result
}
export default recommendCoffee

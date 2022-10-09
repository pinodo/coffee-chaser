import coffees from "../data/coffees"
import moods from "../data/moods"

// moods : a list of mood indexs user have selected
// temperature : decimal temp valu fetched from OpenWeatherAPI
function getCoffee (selectedMoods, temperature) {
    let result = ""
    if(temperature < 10) {
        result += "hot "  
    } else if (temperature >= 17) {
        result += "iced "
    }

    // Calculate the total score
    let total = [0,0,0,0,0]
    for(let i = 0; i < selectedMoods.length; i++) {
        for(let j = 0; j < selectedMoods[i].length; ++j) {
            total[j] += moods[selectedMoods[i]].scores[j]
        }
    }

    // Pick up cofee.
    maxValue = total[0]
    maxIndexs = [0]

    for(i = 0; i < total.length; i++) {
        if(total[i] > maxValue) {
            maxValue = total[i]
            maxIndexs = []
            maxIndexs.push(i);
        } else if (total[i] == maxValue) {
            maxIndexs.push(i);
        }
    }
    
    if(maxIndex.length == 1) {
        result += coffees[maxIndex[0]].name
    } else {
        result += coffees[Math.floor(Math.random() * strArray.length)].name
    }
}

export default getCoffee

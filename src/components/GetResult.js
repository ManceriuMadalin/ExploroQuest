export const getResult = (countrys, firstQuestion, secondQuestion, thirdQuestion, fourthQuestion) => {
     let countryReslt = []
     countrys.forEach(country => {
          let points = 0
          if (firstQuestion.value === "Yes" && country["tourist-attractions"] === 1) {
               points++
          } else if (firstQuestion.value === "No" && country["tourist-attractions"] === 0) {
               points++
          }

          if (secondQuestion.value === "Yes" && country["tourist-attractions"] === 1) {
               points++
          } else if (secondQuestion.value === "No" && country["tourist-attractions"] === 0) {
               points++
          }

          if (thirdQuestion.value === "Yes" && country["tourist-attractions"] === 1) {
               points++
          } else if (thirdQuestion.value === "No" && country["tourist-attractions"] === 0) {
               points++
          }

          if (fourthQuestion.value === "low-budget" && country["tourist-attractions"] === "low-budget") {
               points++
          } else if (fourthQuestion.value === "mid-budget" && country["tourist-attractions"] === "mid-budget") {
               points++
          } else if (fourthQuestion.value === "high-budget" && country["tourist-attractions"] === "high-budget") {
               points++
          }

          if (points >= 3) {
               countryReslt.push(country)
          }
     });

     return countryReslt
} 
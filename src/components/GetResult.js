export const getResult = (countrys, firstQuestion, secondQuestion, thirdQuestion, fourthQuestion) => {
     let countryResult = []
     console.log("A")
     countrys.forEach(country => {
          let points = 0
          if (firstQuestion === "Yes" && country["tourist-attractions"] === 1) {
               points++
          } else if (firstQuestion === "No" && country["tourist-attractions"] === 0) {
               points++
          }

          if (secondQuestion === "Yes" && country["night-life"] === 1) {
               points++
          } else if (secondQuestion === "No" && country["night-life"] === 0) {
               points++
          }

          if (thirdQuestion === "Yes" && country["tropical"] === 1) {
               points++
          } else if (thirdQuestion === "No" && country["tropical"] === 0) {
               points++
          }

          if (fourthQuestion === "low-budget" && country["cost"] === "low-budget") {
               points++
          } else if (fourthQuestion === "mid-budget" && country["cost"] === "mid-budget") {
               points++
          } else if (fourthQuestion === "high-budget" && country["cost"] === "high-budget") {
               points++
          }

          if (points >= 3) {
               countryResult.push(country)
          }
     });

     return countryResult
} 
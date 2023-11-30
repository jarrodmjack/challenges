// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

var findWinners = function(matches) {

    let map = {}

    for(let i = 0; i < matches.length; i++) {
        const winner = matches[i][0]
        const loser = matches[i][1]
       if (map.hasOwnProperty(winner)) {
         map[winner] = {
           ...map[winner],
           wins: map[winner].wins + 1
         }
       } else if (!map.hasOwnProperty(winner)) {
         map[winner] = {
          losses: 0,
           wins: 1
         }
       }

      if (map.hasOwnProperty(loser)) {
        map[loser] = {
          ...map[loser],
          losses: map[loser].losses + 1
        }
      } else if (!map.hasOwnProperty(loser)) {
          map[loser] = {
            wins: 0,
            losses: 1
          }
      }
      
    }

  const result = [[],[]]

  for(let key in map) {
    if (map[key].losses === 0) {
      result[0].push(key)
    } else if (map[key].losses === 1) {
      result[1].push(key)
    }
  }

  return result

};

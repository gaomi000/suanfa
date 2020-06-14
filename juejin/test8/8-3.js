const myAtoi = function (str) {
    const reg = /\s*([-\+]?(0-9)*).*/
    const group = str.match(reg)
    const max = Math.pow(2,31)-1
    const min = -max -1
    let targetNum = 0
    if(group){
        targetNum += group[1]
        if(isNaN(targetNum)){
            targetNum = 0
        }
    }
    if(targetNum>max){
        return max
    }else if(targetNum < min){
        return min
    }
    return targetNum
  }
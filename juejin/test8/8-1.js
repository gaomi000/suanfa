//翻转字符串
const str = 'abcd';
const res = str.split('').reverse.join('')
console.log(res);


//判断字符串是否回文
function isPalindrome(str){
    //翻转字符串
    res = str.split('').reverse.join('')
    //判断是否一样
    return res === str
}

//真题一，回文字符串的衍生问题
const validPalindrome = function (s){
    const len = s.length;
    let i=0, j = len-1;
    while(i<j&&s[i]===s[j]){
        i++
        j--
    }
    if(isPalindrome1(i+1,j)){
        return true
    }
    if(isPalindrome1(i,j-1)){
        return true
    }

    function isPalindrome1(st, sd) {
        while(st<sd){
            if(s[st] !== s[sd]) {
                return false
            }
            st++
            ed--
        }
        return true;
      }
    return false;
}
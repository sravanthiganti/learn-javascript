/* function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    return total;
  }

 */

function sum(...nums) {
    let total = 0;  
    for(const num of nums) {
      total += num;
    }
    console.log(total);
    return total;
  }

sum(1,2);
sum(4,5,6);
sum(199,200,300,8789);

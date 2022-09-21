function nthmostrarest(list, n){

let count={};
list.forEach((e) => (count[e]? count[e]++ :(count[e]=1)));

    console.log(count[n]);
}
nthmostrarest([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5], 2);
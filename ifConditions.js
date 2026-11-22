var amount =  5000;
var minbalance = 500;
var withdraw = 1000;

if(amount < minbalance ){
    console.log("Atm minium amount  Maintain");
}else if(amount < withdraw){
    console.log("WithDrawAmount Amount available ")
}else if(amount<withdraw && withdraw>minbalance){
    console.log("bothconditions passed")
}else if(amount<minbalance || amount>withdraw){
    console.log("this conditions also satisfied")
}else{
    console("ATM Not working")
}
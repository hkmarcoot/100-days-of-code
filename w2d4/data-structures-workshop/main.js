const trolley = [
    {
        id: 'frt1',
        quantity: 4,
    },
    {
        id: 'ml1',
        quantity: 2,
    },
    {
        id: 'ml2',
        quantity: 1,
    },
    {
        id: 'chc1',
        quantity: 1,
    },
    {
        id: 'drk1',
        quantity: 12,
    },
    {
        id: 'drk2',
        quantity: 4,
    },
    {
        id: 'frt2',
        quantity: 10,
    },
    {
        id: 'msc1',
        quantity: 5,
    },
    {
        id: 'ele1',
        quantity: 3,
    },
    {
        id: 'pen1',
        quantity: 4,
    },
];

const inventory = [
    {
        id: 'frt1',
        name: 'Apple',
        isHealthy: true,
        recalled: false,
        price: 1,
    },
    {
        id: 'chc1',
        name: 'Large Chocolate bar',
        isHealthy: false,
        recalled: false,
        price: 3,
    },
    {
        id: 'ml1',
        name: 'Pasta Salad Meal',
        isHealthy: true,
        recalled: false,
        price: 4,
    },
    {
        id: 'frt2',
        name: 'Large Banana',
        isHealthy: true,
        recalled: true,
        price: 2,
    },
    {
        id: 'ml2',
        name: 'Chicken Sandwich Meal',
        isHealthy: true,
        recalled: false,
        price: 3,
    },
    {
        id: 'drk1',
        name: 'Red Bull Energy Drink',
        isHealthy: false,
        recalled: true,
        price: 4,
    },
    {
        id: 'pen1',
        name: 'A Pack Of Pens',
        isHealthy: true,
        recalled: false,
        price: 3,
    },
    {
        id: 'drk2',
        name: 'Orange Juice',
        isHealthy: false,
        recalled: true,
        price: 2,
    },
    {
        id: 'msc1',
        name: 'Pack Of Paper',
        isHealthy: true,
        recalled: false,
        price: 2,
    },
    {
        id: 'drk3',
        name: 'Bottled Water',
        isHealthy: true,
        recalled: true,
        price: 3,
    },
    {
        id: 'ele1',
        name: 'Laptop Computer',
        isHealthy: true,
        recalled: false,
        price: 300,
    },
    {
        id: 'nut1',
        name: 'Pack of Salted Peanuts',
        isHealthy: true,
        recalled: true,
        price: 1,
    },
    {
        id: 'nut2',
        name: 'Pack of Mixed Nuts',
        isHealthy: true,
        recalled: false,
        price: 2,
    },
    {
        id: 'hdc1',
        name: 'Large Latte',
        isHealthy: false,
        recalled: false,
        price: 4,
    },
    {
        id: 'hdc2',
        name: 'Large Skinny Cappucino',
        isHealthy: true,
        recalled: false,
        price: 4,
    }
];

const receipt = [];

//Section 1 T1
function removeUnhealthy(item) {
   return item.isHealthy === true;
}

let healthyInventory = inventory.filter(removeUnhealthy);
console.log(healthyInventory);

//Section 2 T1
function removeUnhealthyTrolley(item) {
    //for (let i = 0; i < trolley.length; i++){
        for (let k = 0; k < healthyInventory.length; k++){
            //console.log("checked once");
            if(item.id === healthyInventory[k].id) {
                return true;

            }
            //return item.id === healthyInventory[k].id;
        }
    //}
}

let healthyTrolley = trolley.filter(removeUnhealthyTrolley);
console.log(healthyTrolley);

//Section 2 T2
function noRecallFromHealthyTrolley(item) {
        for (let k = 0; k < healthyInventory.length; k++){
            if(item.id === healthyInventory[k].id) {
                if (healthyInventory[k].recalled === false){
                    return true;
                }
            }
        }
}


let noRecallTrolley = healthyTrolley.filter(noRecallFromHealthyTrolley);
console.log(noRecallTrolley);

//Section 2 T3
let shoppingReceipt =[];
function makeReceipt (){
    for (let i = 0; i < noRecallTrolley.length; i++){
        for (let k = 0; k < healthyInventory.length; k++){
            if(noRecallTrolley[i].id === healthyInventory[k].id) {
                let totalPrice = noRecallTrolley[i].quantity * healthyInventory[k].price;
                let name = healthyInventory[k].name;
                let quantity = noRecallTrolley[i].quantity;
                shoppingReceipt.push({name:`${name}`, quantity:`${quantity}`, totalPrice:`${totalPrice}`});
            }
        }
    }
}


makeReceipt();
console.log(shoppingReceipt);

//Section 2 T4
    //Total Before Discount
    let totalBfDiscount = 0;
    for (let i = 0; i < shoppingReceipt.length; i++){
        totalBfDiscount += parseInt(shoppingReceipt[i].totalPrice);
    }
    console.log(totalBfDiscount);

    //Total Discount
    let totalDiscount = 0;
    for (let i = 0; i < shoppingReceipt.length; i++){
        if( parseInt(shoppingReceipt[i].quantity) >= 3){
            totalDiscount += parseInt(shoppingReceipt[i].totalPrice) * 0.25;
        }
    }
    console.log(totalDiscount);

    let pricePaid = totalBfDiscount - totalDiscount;
    console.log(pricePaid);

    //Bonus Task 
    document.querySelector(".full-total").innerHTML = totalBfDiscount;
    document.querySelector(".discount-total").innerHTML = totalDiscount;
    document.querySelector(".price-paid").innerHTML = pricePaid;

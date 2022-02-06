products = [ {name:'A', price: 80000},
             {name:'B', price: 8000},  
             {name:'C', price: 8009},  
             {name:'D', price: 800},  
             {name:'E', price: 80},  
             {name:'F', price: 8},  
             {name:'G watch', price: 10000},  
             {name:'H', price: 20000},  
             {name:'I laptop', price: 40000},  
             {name:'J', price: 500},  
             {name:'K laptop', price: 60000},  
             {name:'L watch', price: 70000},  
]
for(const product of products) {
        if (product.price<500) {
            break;
        }
        console.log(product);
}
console.log('after the loop i understand')

// continue or skip iteration //
for(const product of products) {
    if(product.price<8000) {
        continue;
    }
    console.log(product)
}

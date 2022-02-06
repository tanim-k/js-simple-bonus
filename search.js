products = [ {name:'A', price: 80000},
             {name:'B', price: 8000},  
             {name:'C', price: 800},  
             {name:'D', price: 800},  
             {name:'E', price: 80},  
             {name:'F', price: 8},  
             {name:'G watch', price: 10000},  
             {name:'H', price: 20000},  
             {name:'I laptop', price: 40000},  
             {name:'J', price: 50000},  
             {name:'K laptop', price: 60000},  
             {name:'L watch', price: 70000},  
             {name:'M', price: 90000},  
             {name:'N watch', price: 9000},  
             {name:'O', price: 100},  
             {name:'P', price: 810000},  
             {name:'Q', price: 800300},  
]
console.log(products);
// lets make a function //
function searchProducts(products, searchText) {
    const result = [];
    for(const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;
}
// function calling //
const matchedProduct = searchProducts(products, 'laptop');
console.log(matchedProduct);
const totalCost = (products) => {
     let  sum = 0;
	for (var i = 0; i< products.length; i++){

       
        // console.log(products.price);

        const product = products[i];

        

        sum = sum + product.price;
        


    }
    console.log(sum); 

}

totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]);
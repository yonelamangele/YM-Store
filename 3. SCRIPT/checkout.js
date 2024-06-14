let name = localStorage.getItem('purchasedItems')
let main = document.querySelector('tbody')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))


function showCart() {
    purchasedItems.forEach(purchasedItems =>{
        main.innerHTML += `
        <tr>
                <td> ${purchasedItems.id} </td>
                <td> ${purchasedItems.name} </td>
                <td> <img src="${purchasedItems.image}" class="size"> </td>
                <td> ${purchasedItems.description} </td>
                <td> R${purchasedItems.price} </td>
                <td> ${purchasedItems.quantity} </td>
            </tr>
                          `
    })
}
showCart()
        









// purchasedItems = purchasedItems.reduce((acc, current) =>{
        //     const x = acc.find(item => item.name === current.name);
        //     if(!x){
        //         return acc.conncat([current]);
        //     }else{
        //         x.quantity += current.quantity;
        //         return acc;
        //     }
        // }, [])
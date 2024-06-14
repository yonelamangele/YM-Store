function CreateItem(id, name, image, description, price, quantity) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.price = price
    this.quantity = quantity
}

let item1 = new CreateItem(1, 'Tokyo Revengers Hoodie', 'https://yonelamangele.github.io/YM-Store/Tokyo%20Revengers%20Hoodie.jpg', 'Tokyo Revengers Hoodie Anime Manjiro Sano Graphic Hoodie for Men Sportswear Cosplay Costume.', 483.75, 1)

let item2 = new CreateItem(2, 'Bleach Ichigo T-Shirt', 'https://yonelamangele.github.io/YM-Store/Bleach%20T-Shirt.jpg', 'Mens Bleach Manga Anime T-Shirt - Bleach Ichigo Kurosaki Mens Fashion Shirt.', 372.26, 1)

let item3 = new CreateItem(3, 'Demon Slayer Socks', 'https://yonelamangele.github.io/YM-Store/Demon%20Slayer%20Socks.jpg', 'Bioworld Demon Slayer Adult Crew Socks 5-Pack.', 372.08, 1)

let item4 = new CreateItem(4, 'Attack On Titan Pyjama', 'https://yonelamangele.github.io/YM-Store/AOT%20Pyjama.jpg', 'Attack On Titan Scout Regiment Mens 2-Pack Sleep Set-XL.', 651.27, 1)

let item5 = new CreateItem(5, 'Dragon Ball Z underwear', 'https://yonelamangele.github.io/YM-Store/Dragon%20Ball%20Z%20underwear.jpg', 'Bioworld Dragon Ball Z Anime Cartoon Mens 3pk Boxer Briefs Set.', 372.08, 1)

let item6 = new CreateItem(6, 'Black Clover Benie Hat', 'https://yonelamangele.github.io/YM-Store/Black%20Clover%20Hat.jpg', 'Anime Black Bull Embroidery Knit Beanie Hat.', 279.01, 1)

let item7 = new CreateItem(7, 'Jujutsu Kaisen Shoes', 'https://yonelamangele.github.io/YM-Store/Jujutsu%20kaisen%20Shoe.jpg', 'Crocs Unisex-Adult Jujutsu Kaisen Classic Clogs.', 929.54, 1)

let item8 = new CreateItem(8, 'Chainsaw man shorts', 'https://yonelamangele.github.io/YM-Store/Chainsaw%20man%20Shorts.jpg', 'Rulercosplay Anime Swim Trunks.', 465.14, 1)

let items = [item1, item2, item3, item4, item5, item6, item7, item8]

localStorage.setItem('items', JSON.stringify(items))

// let quantityItem = JSON.parse(localStorage.getItem('purchasedItems'))

// let purchasedItem = quantityItem || []
// console.log(quantityItem);

let space = document.getElementById('display1')
items.forEach(item => {
    space.innerHTML += `
                        
                            <div id="images"> 
                                <div class="image-container">
                                    <img src="${item.image}" class="zoom">
                                    <p>${item.name}</p>
                                    <p>R${item.price}</p>
                                    </div>
                                <button id="viewMore"> View more </button>
                                <button class="purchase" value='${item.id}'> Purchase </button>
                            </div>
                        
                        `
})

let purchaseButtons = document.querySelectorAll('.purchase')

let purchasedItems = []
function addToCart(id){
    let [item] = items.filter(object=> object.id === +id)
    purchasedItems.push(item)
}

purchaseButtons.forEach(button=> {
    button.addEventListener('click',(event)=>{
        addToCart(event.target.value);
        localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
    })
})

function addToCart(id) {
    let existingItem = purchasedItems.find(item => item.id === +id);
    if (existingItem) {
        existingItem.quantity++; // Increase quantity
    } else {
        let newItem = items.find(item => item.id === +id);
        newItem.quantity = 1; // Set initial quantity if not present
        purchasedItems.push(newItem);
    }
}


let product = [
{
    image: 'https://yonelamangele.github.io/YM-Store/Tokyo%20Revengers%20Hoodie.jpg',
    title: 'Tokyo Revengers Hoodie',
    price: 483.75
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Bleach%20T-Shirt.jpg',
    title: 'Bleach Ichigo T-Shirt',
    price: 372.26
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Demon%20Slayer%20Socks.jpg',
    title: 'Demon Slayer Socks',
    price: 372.08
},
{
    image: 'https://yonelamangele.github.io/YM-Store/AOT%20Pyjama.jpg',
    title: 'Attack On Titan Pyjama',
    price: 651.27
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Dragon%20Ball%20Z%20underwear.jpg',
    title: 'Dragon Ball Z underwear',
    price: 372.08
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Black%20Clover%20Hat.jpg',
    title: 'Black Clover Benie Hat',
    price: 279.01
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Jujutsu%20kaisen%20Shoe.jpg',
    title: 'Jujutsu Kaisen Shoes',
    price: 929.54
},
{
    image: 'https://yonelamangele.github.io/YM-Store/Chainsaw%20man%20Shorts.jpg',
    title: 'Chainsaw man shorts',
    price: 465.14
},
]
const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=> {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('display1').innerHTML=items.map((item)=>{ 
        let {image, title, price} = item;
        return (
                                 `
                                
                                    <div id="images"> 
                                        <div class="image-container">
                                            <img src="${item.image}" class="zoom">
                                            <p>${item.title}</p>
                                            <p>R${item.price}</p>
                                            </div>
                                        <button id="viewMore"> View more </button>
                                        <button class="purchase" value='${item.id}'> Purchase </button>
                                    </div>
                                
                                `

        )
    }).join('')
};




let sortButton = document.querySelector('#dropdown')

sortButton.addEventListener('click', () => {
    space.innerHTML='';
    product.sort((a, b) => a.price - b.price).forEach(item =>  {
        space.innerHTML += `
                            <div id="images"> 
                                <div class="image-container">
                                    <img src="${item.image}" class="zoom">
                                    <p>${item.title}</p>
                                    <p>R${item.price}</p>
                                    </div>
                                <button id="viewMore"> View more </button>
                                <button class="purchase" value='${item.id}'> Purchase </button>
                            </div>
                        
                        `
    });
});


let selected = document.querySelector('#dropdown')
selected.addEventListener('change',()=>{
    let val = selected.value
    if(val == 'none'){
        display(books)
        return
    }
    console.log(val);
    let sort = books.filter(book=>{
        return book.category.includes(val)
    })
    display(sort)
})

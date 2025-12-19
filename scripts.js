var products = [
    {
        "photo": "img/dustinFunko.png",
        "name": "Pop! Dustin Henderson (Battle Damaged)",
        "fandom": "Stranger Things",
        "price": 14.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/pennywiseFunko.png",
        "name": "Pop! Pennywise the Dancing Clown",
        "fandom": "IT",
        "price": 14.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/clickerFunko.png",
        "name": "Pop! Clicker (Infected)",
        "fandom": "The Last Of Us!",
        "price": 14.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/akaliFunko.png",
        "name": "Pop! Akali",
        "fandom": "League Of Legends",
        "price": 14.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/dekuFunko.png",
        "name": "Pop! Premium Deku",
        "fandom": "My Hero Academia",
        "price": 19.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/galactusFunko.png",
        "name": "Pop! Super Galactus (Fantastic Four: First Steps)",
        "fandom": "Marvel",
        "price": 24.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/shanksFunko.png",
        "name": "Pop! Plus Shanks",
        "fandom": "One Piece",
        "price": 14.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/gardevoirFunko.png",
        "name": "Pop! Jumbo Gardevoir",
        "fandom": "Pokémon",
        "price": 39.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/pochitaFunko.png",
        "name": "Pop! Jumbo Pochita",
        "fandom": "Chainsaw Man",
        "price": 39.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/puppetFunko.png",
        "name": "Pop! Jumbo Billy the Puppet",
        "fandom": "Saw",
        "price": 39.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/hagridFunko.png",
        "name": "Pop! Super Rubeus Hagrid with Letter",
        "fandom": "Harry Potter",
        "price": 39.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/kitanaFunko.png",
        "name": "Pop! Kitana (Mortal Kombat 11)",
        "fandom": "Mortal Kombat",
        "price": 14.99,
        "active": false,
        "quantity": 1
    }
];

const FunkoShopMachine = {
    data() {
        return {
            products: window.products
        }
    },
    methods: {
        total: () => {
            var total = 0;
            this.products.forEach((item) => {
                if (item.active){
                    total += item.price * item.quantity
                }
            })
            return total.toFixed(2)
        }
    }
}

Vue.createApp(FunkoShopMachine).mount('#app')

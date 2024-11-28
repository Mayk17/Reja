function task (a, b){
    const result= a + b;
    return  result.length;

}
const a= "aziz";
const b= "ib";
const natija = task(a, b);
console.log(natija)




let mahlusotlarRoyxati =[
    {id: 1, name: "non", quantity: 4},
    {id: 2, name: "lagmon", quantity: 5},
    {id: 3, name: "non", quantity: 2},
];
function mahsulotlarIn( id, quantity ){
    const mahsulot = mahlusotlarRoyxati.find(item => item.id === id);
    if (mahsulot) {
        mahsulot.quantity += quantity;
        console.log(`${mahsulot.name} hozirda do'konga kirtildi. Jami:${product.quantity}`);
    } else {
        console.log("mahsulot topilmadi")
    }
    showInventory();

}

function mahsulotlarOut( id, quantity ){
    const mahsulot = mahlusotlarRoyxati.find(item => item.id === id);
    if (mahsulot && mahsulot.quantity >= quantity) {
        mahsulot.quantity -= quantity;
        console.log(`${mahsulot.name} hozirda do'kondan chiqdi . Jami:${product.quantity} qoldi`);
    } else {
        console.log("mahsulot topilmadi")
    }
    showInventory();

}

function showInventory() {
    console.log("do'kondagi mahsulotlar:");
    mahlusotlarRoyxati.forEach(mahsulot =>{
        console.log(`${mahsulot.name}: $ {product.quantity} ta`);
    });
    console.log('----1-1111');
}

mahsulotlarIn()





class Shop {
    constructor(non, lagmon, cola) {
        // Constructorda mahsulotlar miqdorini o'rnatamiz
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    // Mahsulotlar qoldig'ini ko'rsatadigan metod
    qoldiq() {
        const now = new Date();
        const time = now.toLocaleString(); // Hozirgi vaqtni olish
        console.log(`${time}: Hozirda ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`);
    }

    // Mahsulot sotish metod
    sotish(tovar, miqdor) {
        const now = new Date();
        if (tovar === 'non') {
            if (this.non >= miqdor) {
                this.non -= miqdor;
                console.log(`[${now.toLocaleString()}] Sotish: ${miqdor} ta non sotildi.`);
            } else {
                console.log(`[${now.toLocaleString()}] Xato: Yetarli miqdor mavjud emas!`);
            }
        } else if (tovar === 'lagmon') {
            if (this.lagmon >= miqdor) {
                this.lagmon -= miqdor;
                console.log(`[${now.toLocaleString()}] Sotish: ${miqdor} ta lagmon sotildi.`);
            } else {
                console.log(`[${now.toLocaleString()}] Xato: Yetarli miqdor mavjud emas!`);
            }
        } else if (tovar === 'cola') {
            if (this.cola >= miqdor) {
                this.cola -= miqdor;
                console.log(`[${now.toLocaleString()}] Sotish: ${miqdor} ta cola sotildi.`);
            } else {
                console.log(`[${now.toLocaleString()}] Xato: Yetarli miqdor mavjud emas!`);
            }
        } else {
            console.log(`[${now.toLocaleString()}] Xato: Noto'g'ri mahsulot nomi!`);
        }
    }

    // Mahsulot qabul qilish metod
    qabul(tovar, miqdor) {
        const now = new Date();
        if (tovar === 'non') {
            this.non += miqdor;
            console.log(`[${now.toLocaleString()}] Qabul: ${miqdor} ta non qabul qilindi.`);
        } else if (tovar === 'lagmon') {
            this.lagmon += miqdor;
            console.log(`[${now.toLocaleString()}] Qabul: ${miqdor} ta lagmon qabul qilindi.`);
        } else if (tovar === 'cola') {
            this.cola += miqdor;
            console.log(`[${now.toLocaleString()}] Qabul: ${miqdor} ta cola qabul qilindi.`);
        } else {
            console.log(`[${now.toLocaleString()}] Xato: Noto'g'ri mahsulot nomi!`);
        }
    }
}

// Sinov
const shop = new Shop(4, 5, 2);  // 4 ta non, 5 ta lagmon, 2 ta cola bilan yangi shop obyektini yaratish

// Qoldiqni ko'rsatish
shop.qoldiq();  // Hozirda 4ta non, 5ta lagmon va 2ta cola mavjud!

// Mahsulot sotish
shop.sotish('non', 3);  // 3 ta non sotildi
shop.sotish('cola', 1);  // 1 ta cola sotildi

// Mahsulot qabul qilish
shop.qabul('cola', 4);  // 4 ta cola qabul qilindi

// Qoldiqni yana ko'rsatish
shop.qoldiq();  // Hozirda 1ta non, 5ta lagmon va 6ta cola mavjud!


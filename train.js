/* >>>>>>>>>>>>> TASK F >>>>>>>>>>>>>>>>
TASK F

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!*/

function findDoublers(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.includes(str[i], i + 1)) {
            return true;  
        }
    }
    return false;  
}

const a = findDoublers("hello");
console.log(a);  








/* >>>>>>>>>>>>> TASK E >>>>>>>>>>>>>>>>

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

/*function getReverse(str){
    return str.split("").reverse().join("");
  }
  
  
  const ourString = getReverse("Mike");
  console.log(ourString);*/



/* >>>>>>>>>>>>> TASK D >>>>>>>>>>>>>>>>*/

 /* function soz(soz1, soz2) {
    if (soz1.length !== soz2.length) {

        return false;
    }
    const sorteSoz1 = soz1.split('').sort().join('');
    const sorteSoz2 = soz2.split('').sort().join('');

    return sorteSoz1 === sorteSoz2;

}

console.log(soz("kofe", "ekof")); */

/* >>>>>>>>>>>>> TASK C >>>>>>>>>>>>>>>>*/

//const shop = new shop
//shop.qoldiq();

/*  

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq() {
        const now = new Date();
        const time = now.toLocaleString(); 
        console.log(`${time}: Hozirda ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`);
    }

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

const shop = new Shop(4, 5, 2);  

shop.qoldiq();  

shop.sotish('non', 3);  
shop.sotish('cola', 1);  

shop.qabul('cola', 4);  

shop.qoldiq();  
*/




/* >>>>>>>>>>>>> TASK b >>>>>>>>>>>>>>>>*/

/*function countDigits(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            count++;
        }
    }
    return count;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));  */ 

/* >>>>>>>>>>>>>>>>CALLBACK function>>>>>>>>>>>>>>>>>>>>*/

/*
console.log("Jack Ma maslahatlari");
const list =[
    "yaxshi talaba bo'ling", //0-20
    "to'gri boshliq tanlang va koproq xato qiling", // 20-30
    "uzingizga ishlashni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", //60
]; */

 /*
 function maslahatBering(a, callback) {
    if ( typeof a !== "number") callback("insert a number", null);
    else if ( a <= 20) callback(null,list[0]);
    else if ( a > 20 && a <= 30) callback(null,list[1]);
    else if ( a > 30 && a <= 40) callback(null,list[2]);
    else if ( a > 40 && a <= 50) callback(null,list[0]);
    else if ( a > 50 && a <= 60) callback(null,list[0]);
    else {
        setTimeout(function () {
            callback(null, list [5]);
        }, 5000);
    }
 }
/*
 maslahatBering(25, (err, data,) => {
    if (err) console.log("ERROR:", err);
    console.log("javob:", data);
}); */
   /* maslahatBering("salom", (err, data,) => {
        if (err) console.log("ERROR:", err);
        console.log("javob:", data);
 }); */

 /* maslahatBering(25, (err, data,) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);

    }
}); */
 
/* 
console.log("passed here 0");
maslahatBering(65, (err, data,) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});
console.log("passed here 1");
 */

/* >>>>>>>>>>>>>>>>CALLBACK END >>>>>>>>>>>>*/

/*>>>>>>>>>>>>>>>>ASYNC>>>>>>>>>>>>>> */

/*async function maslahatBering(a,) {
    if ( typeof a !== "number") throw new Error("insert a number",);
    else if ( a <= 20) return list[0];
    else if ( a > 20 && a <= 30) return list[1];
    else if ( a > 30 && a <= 40) return list[2];
    else if ( a > 40 && a <= 50) return list[3];
    else if ( a > 50 && a <= 60) return list[4];
    else { 
        return new Promise ((resolve, reject) => {
            setInterval(() => {
                resolve(list[5]);
            }, 1000);
          
            //  setTimeout(() => {
          //      resolve(list[5]);
        //    }, 5000);
        });
    }
 } */

 //  call via then/catch
 /*
 console.log("passed here 0");
 maslahatBering(25)
   .then((data) => {
      console.log("javob:", data);
   })
   .catch((err) => {
      console.log("ERROR:", err);
   });
   console.log("passed here 1");
   */


  /* async function run() {
    let javob = await maslahatBering(65);
    console.log(javob);
   // javob = await maslahatBering(31);
    // console.log(javob);
  //  javob = await maslahatBering (41);
    //console.log(javob);
   }
   run();*/


/**>>>>>>>>>>>>>>>> Callback and Intervall>>>>>>>>>>>>>> */
   
 /* function maslahatBering(a, callback) {
    if ( typeof a !== "number") callback("insert a number", null);
    else if ( a <= 20) callback(null,list[0]);
    else if ( a > 20 && a <= 30) callback(null,list[1]);
    else if ( a > 30 && a <= 40) callback(null,list[2]);
    else if ( a > 40 && a <= 50) callback(null,list[0]);
    else if ( a > 50 && a <= 60) callback(null,list[0]);
    else {
        setInterval(function () {
            callback(null, list [5]);
        }, 1000);
    }
 }

 console.log("passed here 0");
maslahatBering(65, (err, data,) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});
console.log("passed here 1"); */





// DEFINE

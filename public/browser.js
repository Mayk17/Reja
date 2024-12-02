


console.log("Frontend Js ishga tushdi");

function itemTemplate(item) {
    return ` <li
                class=" list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button 
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"> ozgartirish</button>

                <button 
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm">Ochirish</button>
            </div>
            </li>`;
}


let createField = document.getElementById("create-field");

document
.getElementById("create-form").addEventListener("submit", function (e) { e.preventDefault();

    axios.post("/create-item", { reja: createField.value })
    .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytatdan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
    console.log(e.target);

    // delete oper
    if (e.target.classList.contains("delete-me")) {
         if (confirm("Aniq o'chirmoqchimisiz?")) {
           axios
           .post("/delete-item", { id: e.target.getAttribute("data-id")})
           .then((response) => {
             console.log(response.data);
             e.target.parentElement.parentElement.remove();
           })
           .catch((err) => {
              console.log("Iltimos qaytatdan harakat qiling!");
           });
        }


            /* alert("Yes deb javob berildi");
         } else {
            alert ("No deb javob berildi");
         }
       } 
       
    alert("siz delete tugmasini bosdingiz");  
       */


    }

    // edit oper

    if (e.target.classList.contains("edit-me")) {
       let userInput = prompt(  // o'zgarihni bosganda bizga alertga o'xshagan oyna chiqazib berishi uchun ishlatiladi
        "O'zgartirish kiriting",
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
       ); // bu yzoilib turgan qismini olish un ishlatiladi
       if (userInput) {
        axios // axios orqali post qilyapmiz u esa app.postga boradi v yerda database otib malumotni o'zgartiradi 
        // o'zgartiligan malumot esa stateni  then reponse ga qaytaradi biz uni consolega chiqarmiza.
        .post("/edit-item", { // bu data object hisoblandi
            id: e.target.getAttribute("data-id"),
            new_input: userInput,
        }).then(response => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
            ).innerHTML = userInput;
        }).catch(err => {
            console.log("Iltimos qaytadan harakat qiling!");

        });
       }
    }
    });

    document.getElementById("clean-all").addEventListener("click", function () {
        axios.post("/delete-all", { delete_all: true}).then(respose => {
            alert(respose.data.state); // sternitsiyada yengi alert chiqazadi.
            document.location.reload();  /// bu pageni reload qiladi
        });
    });

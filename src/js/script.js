const inputItem = document.querySelectorAll('.inputItem');
const btn = document.querySelector('.enviar');
const aviso = document.querySelectorAll('.aviso');

inputItem.forEach((item, indice) => {
    item.addEventListener("change", () => {
        if (item.value !== "") {
            item.classList.add("borda-green")
        } else {
            item.classList.add("borda-red");
        };
    });

    aviso.forEach((opacity, indice) => {
        btn.addEventListener("click", () => {
            if (item.value === "") {
                item.classList.add("borda-red")
                opacity.classList.remove("aviso");
                opacity.classList.add("opacidade");
            } else {
                item.classList.remove("borda-red");
                opacity.classList.remove("opacidade");
                opacity.classList.add("aviso");

            }
        })
    })
});







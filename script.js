scrollTimerOn = null;
const button_1 = document.getElementById("Autoscroll");
button_1.addEventListener("click", () => {
    if (scrollTimerOn === null) {
        scrollTimerOn = setInterval(() => {
            window.scrollBy({
                top: 300,
                behavior: "smooth"
            });
        }, 5000);
        button_1.textContent = "Автоскролл: ON";
    } else {
        clearInterval(scrollTimerOn);
        scrollTimerOn = null;
        button_1.textContent = "Автоскролл: OFF";
    }
});

const button_2 = document.getElementById("Current_Date");
button_2.addEventListener("click", () => {
    const today = new Date();
    const date = today.toLocaleDateString('ru-RU');
    alert(`Текущая дата: ${date}.`);
})

color_changed = false
const button_3 = document.getElementById("Change_Color");
button_3.addEventListener("click", () => {
    if (color_changed == false) {
        color_changed = true
        document.body.style.backgroundColor = 'rgb(200, 160, 0)';
    } else {
        color_changed = false
        document.body.style.backgroundColor = 'rgb(35, 30, 60)';
    }
})
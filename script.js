const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
    message.classList.add("show");

    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
});

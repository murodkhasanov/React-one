let row = document.querySelector(".row");

const my = [
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    },
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    },
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    },
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    },
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    },
    {
        shot: "112",
        text: "Add tags for solutions",
        desc: "easier to search solutions based on a specific stack",
        button: 'Enhancement'
    }
]



let you = true
let ui = ""
my.map(itme => {
    if (you == true)
        ui += `
                <div class="counten">
            <article class = "menu-itme">
            <h6 class="shot">${itme.shot}</h6>
            <h6 class="text">${itme.text}</h6>
            <h6 class="desc">${itme.desc}</h6>
            <h6 class="button">${itme.button}</h6>
                 </article>
                 </div>
                 `
                 console.log(ui);
    row.innerHTML = ui
});
 
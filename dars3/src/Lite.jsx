import './css.css'


function Lite() {
    {
        let row = document.querySelector(".row");
        let Lite = document.querySelector(".Lite");

        const my = [
            {
                shot: "112",
                text: "Add tags for solutions",
                desc: "Easier to search solutions based on a specific stack",
                button: 'Enhancement'
            },
            {
                shot: "112",
                text: "Add tags for solutions",
                desc: "Easier to search solutions based on a specific stack",
                button: 'Enhancement'
            },
            {
                shot: "112",
                text: "Add tags for solutions",
                desc: "Easier to search solutions based on a specific stack",
                button: 'Enhancement'
            },
            {
                shot: "112",
                text: "Add tags for solutions",
                desc: "Easier to search solutions based on a specific stack",
                button: 'Enhancement'
            },
            {
                shot: "112",
                text: "Add tags for solutions",
                desc: "Easier to search solutions based on a specific stack",
                button: 'Enhancement'
            },
        ]



        let you = true
        let ui = ""
        my.map(itme => {
            if (you == true)
                ui += `
                <div class="counten">
            <article class = "menu-itme">
            <h3 class="shot">${itme.shot}</h3>
            <h3 class="text">${itme.text}</h3>
            <h5 class="desc">${itme.desc}</h5>
            <button class="button">${itme.button}</button>
                 </article>
                 </div>
                 `

            Lite.innerHTML = ui
        });

    }

    return (
        <div className='Lite'></div>
    )

}
export default Lite
let container = document.querySelector(".container");

for (let i = 0; i < 16; i++)
{
    const column = document.createElement("div")
    container.appendChild(column)
    for (let j = 0; j < 16; j++)
    {
        const square = document.createElement("div")
        square.classList.add("squares")
        square.addEventListener("mouseover",()=>{
            console.log("hover")
            square.style.background = "green"
        })
        column.appendChild(square)
    }
}

let container = document.querySelector(".container");

let color = "green"

let height = 16
let width = 16

function generateGrid(height = 16, width = 16)
{
    for (let i = 0; i < width; i++)
    {
        const column = document.createElement("div")
        container.appendChild(column)
        for (let j = 0; j < height; j++)
        {
            const square = document.createElement("div")
            square.classList.add("squares")
            square.addEventListener("mouseover", () =>
            {
                square.style.background = color
            })
            column.appendChild(square)
        }
    }
}

function deleteGrid()
{
    container.innerHTML = '';
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    deleteGrid() // or it should just reset the colors inside the grid
    generateGrid(height,width) // or we could the last submitted value in the generate grid and have it regenerate that grid
})

let submit = document.querySelector("#submit");
submit.addEventListener("click", ()=>{
    deleteGrid()
    let inputlist = document.querySelectorAll("input")// using input list instead of id to practice using node list
    console.log(inputlist[0].value)
    height = inputlist[0].value
    width = inputlist[1].value
    generateGrid(height,width)

    return // should take the input of x and y and generate a new grid with those values
})
generateGrid(16,16)

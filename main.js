const h1 = document.getElementById("h1")
const button = document.getElementById("button")
const p = document.getElementById("p")
const body = document.getElementById("body")
button.addEventListener("click", () => {
    button.style.display = "none"
    h1.style.display = "none"
    document.body.style.background = "black"
    const div = document.createElement("div")
    div.innerText = "This page Is pretty Dark You Shouldn't Be Theeereee Get Ouuut D"
    p.append(div)
    div.style.color = "white"
    p.style.display = "flex"
    p.style.justifyContent = "center"
    p.style.alignItems = "center"
    p.style.height = "100%"
    p.style.fontSize = "1.4rem"
    const moreInfo = document.createElement("button")
    moreInfo.innerText = "Click for More Info"
    moreInfo.style.color = "black"
    p.append(moreInfo)
    p.style.flexDirection = "column"
    p.style.lineHeight = "60px"
    moreInfo.addEventListener("click", () => {
        body.style.background = "#242424"
        div.style.display = "none"
        moreInfo.style.display = "none"
        const element = document.createElement("h1")
        element.style.color = "white"
        element.innerText = "დავით IV აღმაშენებელი"
        p.append(element)
        const someThing = document.createElement("p")
        someThing.innerText = "David IV, also known as David the Builder[1] (Georgian: დავით აღმაშენებელი, Davit Aghmashenebeli) (1073 to 1125), of the Bagrationi dynasty, was the 5th king of United Georgia from 1089 until his death in 1125. his most famous battle was at 1125th year against Sejuk Turks which is called as Battle of Didgori because this battle happened at the land of Didgori."
        p.append(someThing)
        someThing.style.color = "white"
        someThing.style.lineHeight = "50px"
        const newDiv = document.createElement("div")
        newDiv.innerText = "It's not That dark Place i suppose"
        p.append(newDiv)
        newDiv.style.color = "white"
        const button1 = document.createElement("button")
        button1.style.background = "white"
        button1.innerText = "You Can Leave Now"
        p.append(button1)
        button1.addEventListener("click", () => {
            someThing.innerText = "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you"
            newDiv.innerText = "Congrats! you just got Ricrolled!"
            button1.innerText = "And You Are Locked Here Foreveer!!! :D"
            element.innerText = "Never Gonna Give You Up"
        })
    })
})
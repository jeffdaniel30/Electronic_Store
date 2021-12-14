console.dir(document)
//getelementid returns elemernt for the id you pass in
// let sectionOne= document.getElementById('section-one')
// console.log(sectionOne)
// let sectionThree = document.getElementById('section-three')
// console.log(sectionThree)

//returns the array of elements with class name of
// let cards= document.getElementsByClassName('card')
// console.log(cards[0])

// cards[0].innerHTML="a stanky book"

// let images = document.getElementsByTagName('img')
// console.log(images)

// let listItems = document.getElementsByTagName('li')
// console.log(listItems)

// let sectionOne = document.querySelector('#section-one')
// let listItems = document.querySelector('.card:nth-child(even)')
// let listItems = document.querySelector('.card')
// console.log(sectionOne)
// console.log(listItems)
// console.log(listItems[3])

// let firstCard = document.querySelector('.card')
// console.dir(firstCard)
// console.log(firstCard.attributes)
// console.log(firstCard.getAttribute('class'))
/////////////////////////////////


// let secondImage = document.querySelectorAll('img')
//setting attributes takes (name and value)
// secondImage[1].setAttribute('taco', false)
//viewing list of attibutes
// console.dir(secondImage[1].attributes)
//get specifif attricbutes values
// console.log(secondImage[1].getAttribute('taco'))

// let listItems = document.querySelectorAll('li')

// console.log(listItems)


// console.log(listItems[0].getAttribute('src'))


let cards = document.querySelectorAll('.card')
// classList will grab all the classes on the selected item
// console.log(cards[0].classList)

//add classes on using the add
// cards[0].classList.add("pizza")
//removing classes
// cards[0].classList.remove("pizza")
// console.log(cards[0].classList)

// cards[0].classList.toggle("pizza")
// console.dir(cards[7].previousElementSibiling.children)

// cards[0].classList.add("pizza")
console.dir(cards[7].outerHTML )


console.dir(cards[7].innerHTML )
/// sets contents inside of the item
// cards[7].innerHTML = "soggy boot"
// console.dir(cards[7].innerHTML)

cards[7].outerHTML = "soggy boot"

console.dir(cards[7].outerHTML)


let data = [
    {name: "Will", color:"Blue"},
    {name: "Billie", color:"green"},
    {name: "Paresh", color:"Grey"},
    {name: "Jurgen", color:"Black"},
    {name: "Alex", color:"Purple"},
]
let selectorDiv = document.querySelector('#great')
console.log(selectorDiv)

for (i=0; i<data.length; i++){
    let newE1 = document.createElement('h1')
    // console.log(`${data[i].name} love the color ${data[i].color}`)
    newE1.innerHTML= `${data[i].name} love the color ${data[i].color}`
    selectorDiv.append(newE1)
    // console.log(data[i])
}


console.dir(selectorDiv)
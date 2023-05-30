
function Shuffle(cards) {
    let currentIndex = cards.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], cards[currentIndex]];
    }
    return cards;
}
function clickCard(card) {
    card.children[1].classList.toggle("card_none_img")
    if (card.dataset.flipped !== true && cardsToTest.length < 2 && !matcCard.includes(card)) {  //כמו"כ בודק שהקלף הנלחץ אינו במערך המותאמים 
        card.dataset.flipped = "true"
        card.classList = "card card_show_img"
        cardsToTest.push(card)

        if (cardsToTest.length === 2) {
            setTimeout(checkCard, 400)
        }
        else {
            card.onclick = null
        }
    }
}
function checkCard() {
    let card1 = cardsToTest[0]
    let card2 = cardsToTest[1]
    if (card1.children[1].src === card2.children[1].src) {
        card1.onclick = null
        card2.onclick = null
        card1.dataset = true
        card2.dataset = true
        matcCard.push(card1, card2)
        if (matcCard.length === dopCard.length) {

            endGame()
        }
    } else {
        setTimeout(() => {
            card1.children[1].classList.toggle("card_none_img")
            card2.children[1].classList.toggle("card_none_img")
            card1.onclick = () => clickCard(card1)
            card1.dataset = false
            card2.dataset = false
        }, 400)
    }
    cardsToTest = []
}
function addCard(arr) {
    let board = document.getElementById("board")
    for (o of arr) {
        let card = document.createElement("div")
        card.className = "card"
        let face = document.createElement("img")
        face.src = o
        face.classList = "card_img card_none_img"
        let back = document.createElement("img")
        back.src = "img/board.jpg"
        back.classList = "card_img "
        card.appendChild(back)
        card.appendChild(face)
        card.dataset.flipped = "false"
        board.append(card)
        card.onclick = () => clickCard(card)
    }
}
function showWinMsg() {
    let b = document.getElementById("board")
    let maseg = document.createElement("div")
    let button = document.createElement("button")
    let x = document.createElement("div")
    button.textContent = "Play Agine"
    maseg.textContent = "well done"
    x.classList = "end_game"
    maseg.classList = "win_msg"
    button.classList = "button"
    x.appendChild(maseg)
    x.appendChild(button)
    b.appendChild(x)
    button.onclick = () => startGame()
}
function endGame() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => card.remove())
    showWinMsg()
}
function startGame() {
    let m = document.querySelector('.win_msg')
    let b = document.querySelector('button')
    m.remove()
    b.remove()
    const cards = ["img/wolf.jpg", "img/wolf2.jpg", "img/wolf3.jpg", "img/wolf4.jpg", "img/wolf5.jpg", "img/wolf6.jpg", "img/wolf7.jpg", "img/wolf8.jpg", "img/wolf9.jpg", "img/wolves.jpg"]
    let dopCard = cards.concat(cards)
    addCard(Shuffle(dopCard))
}
let matcCard = []
let cardsToTest = []
const cards = ["img/wolf.jpg", "img/wolf2.jpg", "img/wolf3.jpg", "img/wolf4.jpg", "img/wolf5.jpg", "img/wolf6.jpg", "img/wolf7.jpg", "img/wolf8.jpg", "img/wolf9.jpg", "img/wolves.jpg"]
let dopCard = cards.concat(cards)
addCard(Shuffle(dopCard))
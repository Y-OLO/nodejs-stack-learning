/**
 * 动态改变对象之乡
 */

let breakfast = {
    getDrink(){
        return "🍵"
    }
}

let dinner = {
    getDrink(){
        return "🍺"
    }
}


let sunday = Object.create(breakfast)

console.info("sunday此时指向",sunday.getDrink())
console.info("sunday此时指向【breakfast】",Object.getPrototypeOf(sunday) === breakfast)
console.info("sunday此时指向【dinner】",Object.getPrototypeOf(sunday) === dinner)

console.info("改变对象的作用域")

Object.setPrototypeOf(sunday,dinner)

console.info("sunday此时指向",sunday.getDrink())
console.info("sunday此时指向【breakfast】",Object.getPrototypeOf(sunday) === breakfast)
console.info("sunday此时指向【dinner】",Object.getPrototypeOf(sunday) === dinner)



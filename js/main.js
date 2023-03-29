//Считаем яйца
// let eggs = 2
// let chiken = prompt('сколько куриц?', 0)
// alert('в день ' + String(eggs * Number(chiken)) + ' яиц')

//Считаем прожорливость котов
// let fat = 5
// let thin = 3
// let fat_cats = prompt('Сколько у вас толстых котов?')
// let thin_cats = prompt('Сколько у вас худых котов?')
// alert('За неделю коты съедят '+String(7*(fat*Number(fat_cats)+thin*Number(thin_cats)))+' пачек еды')

//Работаем с кнопкой
let out1 = document.getElementById('out')
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')
let score = 0
function f1(){
    score-=1
    out1.innerHTML=score
}
function f2(){
    score=0
    out1.innerHTML=score
}
function f3(){
    score+=1
    out1.innerHTML=score
}
but1.onclick = f1
but2.onclick = f2
but3.onclick = f3

//Работа с вводом имени
let in1 = document.getElementById('in')
let butok = document.getElementById('butok')
let privet = document.getElementById('privet')
function ff(){
    let a = in1.value // забрать значение
    privet.innerHTML = 'Привет, ' + a // сформировать новую строку для privet
    in1.value = '' // очистка поля
}
butok.onclick = ff

//Случайное число по кнопке
let rand = document.getElementById('rand')
let out2 = document.getElementById('out2')
function fr(){
    let r = Math.floor(Math.random()*10)+1
    out2.innerHTML = r
}
rand.onclick = fr
// ==UserScript==
// @name         Bot for google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let btnK = document.getElementsByName('btnK')[1];
let keywords = ["Гобой", "Как звучит флейта", "Что такое валторна", "Как выглядит тромбон", "Музыкальные диктанты онлайн", "Виолончель"];
let keyword  = keywords[getRandom(0,keywords.length)];

if (btnK!=undefined){
    writeWord(keyword);
}
let links = document.links;

if (location.host == "www.google.com"){
    getGooglePage();
}
else {
    if (getRandom(0,100)>20){
        let index = getRandom(0,links.length);
        if(links[index].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1)
            setTimeout(()=>{links[index].click();},getRandom(3000, 10000));
        else location.href = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/';
    }
    else location.href = "https://www.google.com/";
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeWord(keyword){
  let i = 0;
  let timerId = setInterval(()=>{
    document.getElementsByName('q')[0].value += keyword[i];
    i++;
    if (i==keyword.length) {
        clearInterval(timerId);
        btnK.click();
    }
  },300);
}

function getGooglePage(){
    let goNextPage = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            let link = links[i];
            goNextPage = false;
            setTimeout(()=>link.click(), getRandom(3000,10000));
            break;
        }
    }
    if (goNextPage) setTimeout(()=>{
        if (document.getElementsByClassName('YyVfkd')[0].innerText == 10) logo.click();
        else pnnext.click();
    }, getRandom(3000,10000));
}

var slide1=`<div> 
            <h2> Fast </h2>
            <ul>
              <li>Cypress runs tests quickly, with a response time of less than 20 milliseconds. It also has automatic waiting for things like DOM loading, animation, and elements<li>
              </ul>
              </div>`

var slide2=`<div> 
             <h2> Easy to use </h2>
             <ul>
                <li>Cypress has a simple interface that's easy for beginners to learn.<li>
                </ul>
                </div>`              

var slide3=`<div> 
             <h2> Reliable </h2>
             <ul>
                <li>Tests written in Cypress are less likely to fail than those written in other tools.<li>
                </ul>
                </div>`                   
const pi=3.14

function displayFirst() {
    
    document.getElementById("reasons").innerHTML=slide1
    pi=4
}

function displaySecond() {
    document.getElementById("reasons").innerHTML=slide2
}

function displayThird() {
    document.getElementById("reasons").innerHTML=slide3
}

document.getElementById("first").addEventListener("click",displayFirst)
document.getElementById("second").addEventListener("click",displaySecond)
document.getElementById("third").addEventListener("click",displayThird)
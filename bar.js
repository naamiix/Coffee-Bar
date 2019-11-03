const buttonSize = document.querySelectorAll('.js-size')
const coffeeCup = document.querySelector('.glass')

const containerColumn = document.querySelector('.container-column')
const instruction2Name = document.querySelector('.instruction-2-name')
const nameContent = document.querySelector('#name')
const buttonNameConfirm = document.querySelector('.button-name-confirm')
const stripName = document.querySelector('.strip a')
const instruction3Coffee = document.querySelector('.instruction-3-coffee')

const caps = document.querySelectorAll('.cap')
const liquids = document.querySelectorAll('.js-liquids')

const containerRecapSugar = document.querySelector('.container-recap-sugar')
const containerRecap = document.querySelector('.container-recap')
const containerSugar = document.querySelector('.container-sugar')

const capRecap = document.querySelector('.js-cap-recap')
const nameCapRecap = document.querySelector('.js-cap-recap p')
const buttonContinue = document.querySelector('.button-continue')

const glassHat = document.querySelector('.glass .hat')

const sugars = document.querySelectorAll('.sugar')
const endTitle = document.querySelector('.end-simulation h2')

const playMusic = document.querySelector('.container-music-control .play-music')
const pausedMusic = document.querySelector('.container-music-control .paused-music')
let music = document.querySelector('.music')
let pourring = document.querySelector('.pourring')


let size
let capTaste


playMusic.addEventListener('click', ()=>
{
    if (music.paused) {
        music.play();
        playMusic.style.opacity = 0
        pausedMusic.style.opacity = 1
    } else {
        music.pause();	
        playMusic.style.opacity = 1
        pausedMusic.style.opacity = 0
    }
})

/* SELECT SIZE */

for (let i = 0; i < buttonSize.length; i++) 
{
    buttonSize[i].addEventListener('click', () => 
    {
        if (i==0)
        {
            coffeeCup.style.animationName = 'cup-show-xl'
            coffeeCup.style.animationPlayState = 'running'
            instruction2Name.style.animationPlayState = 'running'
            size = 1
        }
        else if (i==1)
        {   
            coffeeCup.style.animationName = 'cup-show-l'
            coffeeCup.style.animationPlayState = 'running'
            coffeeCup.style.transform ='scale(0.9)'
            instruction2Name.style.animationPlayState = 'running'
            size = 2
        }
        else
        {
            coffeeCup.style.animationName = 'cup-show-m'
            coffeeCup.style.animationPlayState = 'running'
            coffeeCup.style.transform ='scale(0.8)'
            instruction2Name.style.animationPlayState = 'running'
            size = 3
        }
    
    
    }
    )  
}

/* Confirm name and show 3rd instruction */

buttonNameConfirm.addEventListener('click', () =>
{
    stripName.innerHTML = nameContent.value
    instruction3Coffee.style.animationPlayState = 'running'
    containerColumn.style.pointerEvents = 'none'
    document.querySelector('.container-restart').style.pointerEvents = 'auto'
}
)

/*Select liquid raise*/

for (let j = 0; j < caps.length; j++) {
    caps[j].addEventListener('click',() =>
    {   
        pourring.play()
        if (j==0) 
        {
            liquids[3].style.animationName = 'liquid-rase-last-liquid'
            liquids[3].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-1')
            nameCapRecap.innerHTML = 'Classic Coffee'
            
            if (size==1)
            {
                endTitle.innerHTML = `Here's your Classic Coffee Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Classic Coffee Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Classic Coffee Tall !`
            }
        }

        else if(j==1)
        {
            liquids[4].style.animationName = 'liquid-rase-last-liquid'
            liquids[4].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-2')
            nameCapRecap.innerHTML ='Expresso'

            if (size==1)
            {
                endTitle.innerHTML = `Here's your Expresso Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Expresso Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Expresso Tall !`
            }
        }

        else if(j==2)
        {
            liquids[4].style.animationName = 'liquid-rase-first-liquid-cappu'
            liquids[1].style.animationName = 'liquid-rase-second-liquid-cappu'
            liquids[0].style.animationName = 'liquid-rase-third-liquid-cappu'
            liquids[4].style.animationPlayState = 'running'
            liquids[1].style.animationPlayState = 'running'
            liquids[0].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-3')
            nameCapRecap.innerHTML = 'Cappuccino'
            capTaste = 1

            if (size==1)
            {
                endTitle.innerHTML = `Here's your Cappuccino Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Cappuccino Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Cappuccino Tall !`
            }
        }

        else if(j==3)
        {
            liquids[4].style.animationName = 'liquid-rase-first-liquid-macchia'
            liquids[0].style.animationName = 'liquid-rase-second-liquid-macchia'
            liquids[4].style.animationPlayState = 'running'
            liquids[0].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-4')
            nameCapRecap.innerHTML = 'Macchiato'

            if (size==1)
            {
                endTitle.innerHTML = `Here's your Macchiato Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Macchiato Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Macchiato Tall !`
            }
        }

        else if(j==4)
        {
            liquids[4].style.animationName = 'liquid-rase-first-liquid-macchia'
            liquids[1].style.animationName = 'liquid-rase-second-liquid-macchia'
            liquids[4].style.animationPlayState = 'running'
            liquids[1].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-5')
            nameCapRecap.innerHTML = 'Latte'

            if (size==1)
            {
                endTitle.innerHTML = `Here's your Latte Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Latte Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Latte Tall !`
            }
        }

        else if(j==5)
        {
            liquids[4].style.animationName = 'liquid-rase-first-liquid-mocha'
            liquids[2].style.animationName = 'liquid-rase-second-liquid-mocha'
            liquids[1].style.animationName = 'liquid-rase-third-liquid-mocha'
            liquids[0].style.animationName = 'liquid-rase-fourth-liquid-mocha'
            liquids[4].style.animationPlayState = 'running'
            liquids[2].style.animationPlayState = 'running'
            liquids[1].style.animationPlayState = 'running'
            liquids[0].style.animationPlayState = 'running'
            instruction3Coffee.style.opacity = 0
            instruction3Coffee.style.pointerEvents = 'none'
            containerRecapSugar.style.animationPlayState = 'running'
            capRecap.classList.add('cap-6')
            nameCapRecap.innerHTML = 'Mocha'
            capTaste = 2

            if (size==1)
            {
                endTitle.innerHTML = `Here's your Mocha Venti !`
            }

            else if (size==2)
            {
                endTitle.innerHTML = `Here's your Mocha Grande !`
            }

            else if (size==3)
            {
                endTitle.innerHTML = `Here's your Mocha Tall !`
            }
        }
    }
    )
}


/*Select Sugar*/


for (let k = 0; k < sugars.length; k++) {
     sugars[k].addEventListener('click', ()=>
     {
         for (let l = 0; l < k+2; l++) {
             sugars[l].classList.add('color-the-selection')
         }

         for (let m = k+1; m < sugars.length; m++) {
            sugars[m].classList.remove('color-the-selection')
         }
     })  
}


buttonContinue.addEventListener('click', ()=>
{
    containerColumn.style.animationPlayState = 'running'
    containerRecap.style.animationPlayState = 'running'
    containerSugar.style.animationPlayState = 'running'

    if (size==1)
    {
        coffeeCup.style.animationName = 'shake-it-xl'
        coffeeCup.style.animationDelay = `${0}s`
        coffeeCup.style.animationDuration = `${1.5}s`
        coffeeCup.style.animationPlayState = 'running'
    }

    else if (size==2)
    {
        coffeeCup.style.animationName = 'shake-it-l'
        coffeeCup.style.animationDelay = `${0}s`
        coffeeCup.style.animationDuration = `${1.5}s`
        coffeeCup.style.animationPlayState = 'running'
    }

    else if (size==3)
    {
        coffeeCup.style.animationName = 'shake-it-m'
        coffeeCup.style.animationDelay = `${0}s`
        coffeeCup.style.animationDuration = `${1.5}s`
        coffeeCup.style.animationPlayState = 'running'
    } 
    
    if (capTaste==1 ||capTaste==2) 
    {
        liquids[3].style.zIndex = 2
        liquids[3].style.animationName = 'liquid-rase-mix'
        liquids[3].style.animationDuration = `${2}s`
        liquids[3].style.animationPlayState = 'running'
        if (capTaste==1)
        {
            document.querySelector('.liquid-4 p').innerHTML = 'Mixed Cappucinno'
        }
        else if (capTaste==2)
        {
            document.querySelector('.liquid-4 p').innerHTML = 'Mixed Mocha'
        }
        
    }

    glassHat.style.animationPlayState = 'running'
    document.querySelector('.hat .steam').style.animationPlayState = 'running'
    document.querySelector('.glass .strip').style.animationPlayState = 'running'
    document.querySelector('.end-simulation').style.animationPlayState = 'running'
})
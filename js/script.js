    const luigi = document.querySelector(".luigi");
    const pipe = document.querySelector(".pipe");
    const clouds = document.querySelector(".clouds");



    const jump = () => {
        luigi.classList.add("jump");
        setTimeout(() => {
            luigi.classList.remove("jump");
        }, 500);
    }

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const luigiPosition = +window.getComputedStyle(luigi).bottom.replace("px", "");


        console.log(luigiPosition);
       
    if (pipePosition <= 72 && pipePosition > 0 && luigiPosition < 69) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        
        luigi.style.animation = "none";
        luigi.style.bottom = `${luigiPosition}px`;

    

        luigi.src = "./img/fim_jogo.webp";
        luigi.style.width = "50px";
        luigi.style.marginLeft = "25px";
        

        clouds.style.animationPlayState = "paused"; 

        clearInterval(loop);

    }

    }, 10)

    document.addEventListener("touchstart", jump);
    document.addEventListener("keydown", jump);

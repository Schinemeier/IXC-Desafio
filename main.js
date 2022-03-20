function main(){
    let name = document.getElementById('playerName');
    let send = document.getElementById('sendName');
    let nameIn;
    let play = document.getElementById('playNow');
    let doNotEnter = document.getElementById('out');
    let fw = document.getElementById("next")
    let fw2 = document.getElementById("next2")
    let fw3= document.getElementById("next3")
    let fw4 = document.getElementById("next4")
    let fw5 = document.getElementById("next5")
    let lost11 = document.getElementById("btnF1")
    let win1 = document.getElementById("btnF2")
    let lost13 = document.getElementById("btnF3")
    let lost14 = document.getElementById("btnF4")
    let lost15 = document.getElementById("btnF5")
    let lost21 = document.getElementById("btnS1")
    let lost22 = document.getElementById("btnS2")
    let win2 = document.getElementById("btnS3")
    let lost24 = document.getElementById("btnS4")
    let lost25 = document.getElementById("btnS5")
    let lost31 = document.getElementById("btnT1")
    let lost32 = document.getElementById("btnT2")
    let lost33 = document.getElementById("btnT3")
    let win3 = document.getElementById("btnT4")
    let lost35 = document.getElementById("btnT4")
    let lost41 = document.getElementById("btnFo1")
    let win4 = document.getElementById("btnFo2")
    let lost43 = document.getElementById("btnFo3")
    let lost44 = document.getElementById("btnFo4")
    let lost45 = document.getElementById("btnFo5")
    let win5 = document.getElementById("btnFi1")
    let lost52 = document.getElementById("btnFi2")
    let lost53 = document.getElementById("btnFi3")
    let lost54 = document.getElementById("btnFi4")
    let lost55 = document.getElementById("btnFi5")
    let welcomeContainer = document.getElementById('welcome');
    let firstContainer = document.getElementById('first_question');
    let secondContainer = document.getElementById('second_question');
    let tirdContainer = document.getElementById('tird_question');
    let fourthContainer = document.getElementById('fourth_question');
    let fifthContainer = document.getElementById('fifth_question');
    let modalContainer = document.getElementById('modal');
    send.addEventListener('click', function(){
        nameIn = name.value; 
        /*console.log(nameIn);      */
    });

    welcomeContainer.style.display = "block";
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'none';
    tirdContainer.style.display = 'none';
    fourthContainer.style.display = 'none';
    fifthContainer.style.display = 'none';
    modalContainer.style.display = "nome"; 

    play.addEventListener('click',function(){
        modalContainer.style.display = "nome"; 
        welcomeContainer.style.display = "none";
        firstContainer.style.display = "block"
    });

    fw.addEventListener('click',function(){
        modalContainer.style.display = "nome"; 
        firstContainer.style.display = "none";
        secondContainer.style.display = "block";
    });

    fw2.addEventListener('click',function(){
        modalContainer.style.display = "nome"; 
        secondContainer.style.display = "none";
        tirdContainer.style.display = "block";
    });

    fw3.addEventListener('click',function(){
        modalContainer.style.display = "nome"; 
        tirdContainer.style.display = "none";
        fourthContainer.style.display = "block";
    });

    fw4.addEventListener('click',function(){
        modalContainer.style.display = "nome"; 
        fourthContainer.style.display = "none";
        fifthContainer.style.display = "block";
    });
    
    fw5.addEventListener('click',function(){
        fifthContainer.style.display = "none";
        modalContainer.style.display = "block";
    });

    win1.addEventListener('click',function(){
        points(25);    
    })

    win2.addEventListener('click',function(){
        points(25);
    })

    win3.addEventListener('click',function(){
        points(25);
    })

    win4.addEventListener('click',function(){
        points(25);
    })

    win5.addEventListener('click',function(){
        points(25);
    })
    return(nameIn);
}

function register(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor));
    /*
    localStorage.setItem("usuario", nome);
    localStorage.setItem("pontos", points());
    let user = localStorage.getItem('usuario');
    let pts = localStorage.getItem('pontos');
    console.log("in register: " + user);
    console.log("number in register: " + pts + "\n");
    JSON.stringify(['usuario', 'pontos'])*/
}

function time(){
    let initialTime = Date.now();
    let temp = setInterval(() => {
        let currentTime = Date.now();
        let elapsedTime = Math.floor((currentTime - initialize)/10);
        let formattedElapsedTime = elapsedTime / 100;
        document.getElementById("cronometro").innerText = formattedElapsedTime; 
    },60);
    document.getElementById("next5").addEventListener('click',()=>{
        clearInterval(temp);
    });
    return temp;
}

function points(valor){
    let num;
    num +=valor
    return num;
}

function nextQuestion(){

}

function winner(){
    let nome = main();
    let pontos = points();
    let tempo = time();
    /*register('nome', main());
    register('pontos', points());
    console.log(user.nome);*/
    document.getElementById("modName").innerText = nome;
    document.getElementById("modPoint").innerText = pontos;
    document.getElementById("elapse").innerText = tempo;
}

function ranking(chave){
    return JSON.parse(localStorage.getItem(chave))
}

main();
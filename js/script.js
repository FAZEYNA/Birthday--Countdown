const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");
const weeks = document.getElementById("weeks");
const months = document.getElementById("months");
const birthDate = document.getElementById("birthDate");
const champ = document.getElementById("champ");
const calculate = document.getElementById("calculate");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");
const birthday = document.getElementById("birthday");
const error = document.getElementById("error");
const happyBDay = document.getElementById("happyBDay");

calculate.addEventListener('click', ()=>{
    // RECUPERONS LA DATE D'ANNIVERSAIRE
    const BDate = birthDate.value;

    //CONVERTISSONS LA EN DATE FORMAT YYYY-MM-DD
    NewBDate = new Date(BDate);

    // RECUPERONS LE JOUR LE MOIS ET LANNEE
    BYear = new Date().getFullYear();
    BMonth = NewBDate.getMonth();
    BDay = NewBDate.getDate();
    // CREEEONS LA DATE DANNIVERSAIRE DE LAN ACTUEL
    RealBDay = new Date(BYear,BMonth,BDay);
    //CONVERTISSONS LA EN MILLISECONDS
    BYearInMilliseconds = RealBDay.getTime();

    // RECUPERONS LA DATE D'AUJOURD'HUI ET CONVERTISSONS LA EN MILLISECONDES
    var now = new Date();
    currentDay = now.getDate();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    var currentTimeInMilliseconds = now.getTime();
        // SI C'EST LE JOUR D'ANNIVERSAIRE
        if(BYear == currentYear && BMonth == currentMonth && BDay == currentDay)
        {
            suppress();
            happyBDay.innerText = 'Happy Birthday !';
        }

        // ON REMOVE LE CHAMP ET ON AFFICHE LE SPINNER PUIS ON AFFICHE LE TEMPS RESTANT
        else
        {
            if(BYearInMilliseconds > currentTimeInMilliseconds)
            {
                suppress();

                setInterval(function(){
                    var now = new Date();
                    var currentTimeInMilliseconds = now.getTime();
                    const difference = BYearInMilliseconds - currentTimeInMilliseconds; /*DIF DE TEMPS*/
                    const m = Math.floor(difference/1000/60/60/24/30); /*mois*/
                    const w = Math.floor(((difference/1000/60/60/24)%30)/7); /*week*/
                    const d = Math.floor(((difference/1000/60/60/24)%30)%7); /*day*/
                    const h = Math.floor((difference/1000/60/60) %24); /*en /mn*/
                    const mn = Math.floor((difference/1000/60) %60); /*en /h*/
                    const s = Math.floor((difference/1000) % 60); /*en /j*/
                
                    months.innerHTML = m;
                    weeks.innerHTML = w;
                    days.innerHTML = d;
                    hours.innerHTML = h;
                    minutes.innerHTML = mn;
                    seconds.innerHTML = s;
                },1000);
            }
            else
            {
                if(BYearInMilliseconds < currentTimeInMilliseconds)
                {
                    BYear +=1;
                    RealBDay = new Date(BYear,BMonth,BDay);
                    BYearInMilliseconds = RealBDay.getTime();
                    suppress();
                    setInterval(function(){
                        var now = new Date();
                        var currentTimeInMilliseconds = now.getTime();
                        const difference = BYearInMilliseconds - currentTimeInMilliseconds; /*DIF DE TEMPS*/
                        const m = Math.floor(difference/1000/60/60/24/30); /*mois*/
                        const w = Math.floor(((difference/1000/60/60/24)%30)/7); /*week*/
                        const d = Math.floor(((difference/1000/60/60/24)%30)%7); /*day*/
                        const h = Math.floor((difference/1000/60/60) %24); /*en /mn*/
                        const mn = Math.floor((difference/1000/60) %60); /*en /h*/
                        const s = Math.floor((difference/1000) % 60); /*en /j*/
                    
                        months.innerHTML = m;
                        weeks.innerHTML = w;
                        days.innerHTML = d;
                        hours.innerHTML = h;
                        minutes.innerHTML = mn;
                        seconds.innerHTML = s;
                    },1000);
                }
            }    
        }
    
});

const suppress = ()=>{
    champ.remove();
    loading.style.display = 'flex'; /*On affiche le spinner*/
    setTimeout(()=>{  
    //ON CACHE LE SPINNER
        loading.style.display = 'none';
    /*AFFICHE LE RESULTAT ( display none )*/
        birthday.style.display = 'flex';
    },2000);   
}

birthDate.addEventListener('click',()=>{
    birthDate.style.border = '0';
    error.style.display = 'none';   
});
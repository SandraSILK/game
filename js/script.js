function letsPlay(button) {
    var story = '<h4>Witaj podróżniku! </h4><h5>Nie będę dopytywać co Ciebie sprowadza w te ponure strony. Czy to jest chęć wzbogacenia się, czy tylko dobrej zabawy. Nie interesuje mnie to. Powiedz mi tylko kim jesteś, a ja powiem Ci co dalej. </p><p>Czy jesteś rycerzem, złodziejem, medykiem czy magiem?</h5>';



    header.style.display = 'none';
    document.getElementById('play').innerHTML = '<div class="col-md-8 col-sm-12" id="storyDiv">' + story + '<form>Podaj swoje imię: <input id="name" type="text" name="userMame"></form></div>';

    //        for (i = 0; i < heroAll.length; i++) {
    //            document.getElementById('storyDiv').innerHTML += heroAll[i].divAboutHero;
    //    
    //        }
    document.getElementById('storyDiv').innerHTML += '<div id="aboutHero" class="col-md-3 col-sm-6"><img src="js/../grafika/knight.jpg" onclick="requiredName(knight)" id="Rycerz"><h3>Rycerz</h3></div><div id="aboutHero" class="col-md-3 col-sm-6"><img src="js/../grafika/thief.jpg" onclick="requiredName(thief)" id="Złodziej"><h3>Złodziej</h3></div><div id="aboutHero" class="col-md-3 col-sm-6"><img src="js/../grafika/medic.jpg" onclick="requiredName(medical)" id="Medyk"><h3>Medyk</h3></div><div id="aboutHero" class="col-md-3 col-sm-6"><img src="js/../grafika/mag.jpg" onclick="requiredName(wizard)" id="Mag"><h3>Mag</h3></div>'
}

/** bohaterowie */
function HeroesAll(hid, id, type, title, defence, attack, speed, mana, life, img, description, divAboutHero, divStage2) {
    this.hid = hid;
    this.id = id;
    this.type = type;
    this.title = title;
    this.defence = defence;
    this.attack = attack;
    this.speed = speed;
    this.mana = mana;
    this.life = life;
    this.img = img;
    this.description = description;
    this.divAboutHero = '<div id="aboutHero" class="col-md-3 col-sm-6"><img src="' + this.img + '"onclick="requiredName(HeroesAll)" id="' + this.hid + '"><h3>' + this.title + '</h3><p style="color:red">życie: ' + this.life + '</p><p>obrona: ' + this.defence + '</p><p>atak: ' + this.attack + '</p><p>szybkość: ' + this.speed + '</p><p>mana: ' + this.mana + '</p></div>',
        this.divStage2 = '<div class="col-sm-4 col-md-2" id="hero"><h3>' + this.id + '</h3><img src="' + this.img + '"><p id= "heroLife" style="color:red">życie: ' + this.life + '</p><p>obrona: ' + this.defence + '</p><p>atak: ' + this.attack + '</p><p>szybkość: ' + this.speed + '</p><p>mana: ' + this.mana + '</p></div>'
}
var heroAll = [
    knight = new HeroesAll(0, 'Rycerz', 'knight', 'Rycerzem', 10, 10, 2, 0, 10, 'js/../grafika/knight.jpg', ', świetnie, a więc jesteś dzielnym rycerzem o wielkiej sile!', ),
    thief = new HeroesAll(1, 'Złodziej', 'thief', 'Złodziejem', 5, 7, 10, 1, 10, 'js/../grafika/thief.jpg', ', świetnie, a więc jesteś cwanym i przebiegłym rzezimieszkiem!'),
    medical = new HeroesAll(2, 'Medyk', 'medical', 'Medykiem', 8, 5, 6, 3, 10, 'js/../grafika/medic.jpg', ', świetnie, a więc jesteś mądrym i niosącym pomoc człowiekiem!'),
    wizard = new HeroesAll(3, 'Mag', 'Wizard', 'Magiem', 6, 7, 6, 5, 10, 'js/../grafika/mag.jpg', ', świetnie, a więc jesteś potężnym znającym wiele czarów magiem!')
]

/** potwory**/
function CardsAll(title, defence, attack, speed, life, img, story) {
    this.title = title;
    this.defence = defence;
    this.attack = attack;
    this.speed = speed;
    this.life = life;
    this.img = img;
    this.story = story
}

var cards = [
    troll = new CardsAll('Troll', 3, 4, 4, 10, 'js/../grafika/troll.jpg', 'Jesteś w grocie, pod Twoimi stopami wala się mnóstwo kości. Odrzucasz jedną z czaszek, która odbija się z głuchym łoskotem do wnętrza jamy. Hałas budzi uśpionego stwora, nadchodzi Troll!'),
    mudMonster = new CardsAll('Błotny Potwór', 4, 5, 5, 10, 'js/../grafika/blotny_potwor.png', 'Znajdujesz się daleko poza miastem. Jaskinie, la sy, bagna i wstrętny mlaskający dźwięk. Patrzysz, a zza głazu wyłania się Błotny Potwór.'),
    vampire = new CardsAll('Wampir', 3, 5, 5, 10, 'js/../grafika/vampire.jpg', 'Znajdujesz się w opustoszałym domu, gdzie słyszysz płacz dziecka. Rozglądasz się uważnie po ciemnych pokojach aż nagle go dostrzegasz. Wampir!'),
    cyclops = new CardsAll('Cyklop', 5, 2, 6, 10, 'js/../grafika/cyklop.jpg', 'Idąc wąską przełęczą, o mało nie zabija Ciebie głaz. Podnosisz wzrok, a Twoim oczom ukazuje się jednooka bestia, to cyklop!'),
    gin = new CardsAll('Dżin', 3, 3, 5, 10, 'js/../grafika/gin.jpg', 'Czujesz jak żar leje się z nieba, idziesz resztkami sił. Nagle w zamieci piaskowej dostrzegasz majaczącą niebieską plamę, czy to pustynna oaza? Nie! To śmiertelnie niebezpieczny dżin!'),
    centur = new CardsAll('Centaur', 5, 2, 5, 10, 'js/../grafika/centaur.jpg', 'Wiedziałeś, że schodzenie z leśnego szlaku to był kiepski pomysł, jednak te jagody wyglądały tak smakowicie. Gdy wkładasz kolejny owoc do ust zagradza Tobie drogę majestatyczny centaur. Przygotuj się do walki.'),
    hellishHorse = new CardsAll('Piekielny Rumak', 3, 3, 5, 10, 'js/../grafika/hellishHorse.jpg', 'Sądzisz, że w życiu wiele już widziałeś dlatego rad jesteś, że nareszcie może odpocząć w tym pustym zagajniku. W momencie, gdy wyciągasz wygodnie nogi oparty o młodą brzózkę dochodzi Ciebie swąd spalenizny. Odwracasz się i dostrzegasz płonącego ogiera, to rumak samego diabła, to Piekielny Rumak! ')
    // topielica
    // syrna
    // harpia
    //niech jedna karta będzie pusta i wtedy gracz ma farta i dostaje złoto
]

/** grafiki do przycisków **/
function btnImg(id, srcImg, onClickEvent, enterEvent, leaveEvent, textId, text, div) {
    this.id = id;
    this.srcImg = srcImg;
    this.onClickEvent = onClickEvent;
    this.enterEvent = enterEvent;
    this.leaveEvent = leaveEvent;
    this.textId = textId;
    this.text = text;
    this.div = '<div id="' + this.id + '" style="background: url(' + this.srcImg + ')" onclick="' + this.onClickEvent + '" onmouseenter="' + this.enterEvent + '" onmouseleave="' + this.leaveEvent + '"><h4 id="' + this.textId + '">' + this.text + '</h4></div>'
}
var btnImg = [
    mission = new btnImg('mission', 'js/../grafika/mission.jpg', 'newMission(chooseHero)', 'showActText(id)', 'hideActText(id)', 'activeText0', 'nowa misja'),
    store = new btnImg('store', 'js/../grafika/shop.jpg', 'getStore()', 'showActText(id)', 'hideActText(id)', 'activeText1', 'sklep'),
    close = new btnImg('close', 'js/../grafika/door.jpg', 'closeFn()', 'showActText(id)', 'hideActText(id)', 'activeText2', 'wyjdź z gry'),
//    attack = new btnImg('attack', 'js/../grafika/walcz.png', 'atack(id)', 'showActText(id)', 'hideActText(id)', 'activeText3', 'atakuj!'),
    attack = new btnImg('attack', 'js/../grafika/walcz.png', 'atack(chooseHero, chooseMonster)', 'showActText(id)', 'hideActText(id)', 'activeText3', 'atakuj!'),
    spellBook = new btnImg('spellBook', 'js/../grafika/magic.png', 'spellBookFn()', 'showActText(id)', 'hideActText(id)', 'activeText4', 'księga zaklęć'),
    runAway = new btnImg('runAway', 'js/../grafika/uciekaj.png', 'runAwayFn()', 'showActText(id)', 'hideActText(id)', 'activeText5', 'uciekaj')
]

function requiredName(HeroesAll) {
    var myHero = HeroesAll;
    //function requiredName(selectHero) {
    var name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('alertBox').innerHTML = '<h5>Chcesz mi być obcym? Podaj imię i będziemy mogli ruszać dalej.</h5><button class="btn btn-danger" onclick="hideAlertBox()">ok</button>';
        document.getElementById('alertBox').style.marginTop = '18%';
    } else {
        getName(myHero, name);
    }
}

function getName(myHero, name) {
    //    var name = document.getElementById('name').value;

    //        for (i = 0; i < heroAll.length; i++) {
    //            if (heroAll[i].id == id) {

    document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[myHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h4 style="color:gold">' + name + ' ' + heroAll[myHero.hid].description + '</h4><h5>Zacznijmy zabawę. Po prawej stronie masz menu dzięki któremu możesz wybrać swój kolejny krok, rozpocząć nową misję, zakupić cenne towary w sklepie (uwaga, sklep jest często zamknięty, jakiś remont czy coś...) lub skorzystać z drzwi i wyjść z gry.</h5><h5>Po lewej stronie masz opis swojego bohatera. Miej się na baczności, ponieważ z każdą kolejną przygodą Twoje umiejętności mogą się zmieniać.</h5><img src="js/../grafika/forest.jpg" class="forestImg img-responsive"></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';

    chooseHero = myHero;

    //    document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[i].divStage2 + '<div class="col-sm-8" id="actionDiv"><h4 style="color:gold">' + name + ' ' + heroAll[i].description + '</h4><h5>Zacznijmy zabawę. Po prawej stronie masz menu dzięki któremu możesz wybrać swój kolejny krok, rozpocząć nową misję, zakupić cenne towary w sklepie (uwaga, sklep jest często zamknięty, jakiś remont czy coś...) lub skorzystać z drzwi i wyjść z gry.</h5><h5>Po lewej stronie masz opis swojego bohatera. Miej się na baczności, ponieważ z każdą kolejną przygodą Twoje umiejętności mogą się zmieniać.</h5><img src="js/../grafika/forest.jpg" class="forestImg img-responsive"></div><div class="col-sm-4 col-md-2" id="actImgAll">' + btnImg[0].div + btnImg[1].div + btnImg[2].div + '</div></div></div>'

    //            }
    //        }
}
var chooseHero = '';
var chooseMonster = '';

function newMission(chooseHero) {
    /*action - pole rozgrywki <div class="col-sm-7" id="action"></div>
    actImgAll - boczne menu <div class="col-sm-2" id="actImgAll"></div>*/

    var cardNumber = Math.round(Math.random() * (cards.length - 1));
    chooseMonster = cardNumber;
    document.getElementById('actImgAll').innerHTML = '<div class="col-sm-4 col-md-2" id="actImgAll">' + attack.div + spellBook.div + runAway.div + '</div>';



    var divForAction = '<div class="row">   <div class="col-md-7 col-sm-12" style="margin-left:20px"><h4>' + cards[cardNumber].story + '</h4><h3>Co robisz?</h3></div>   <div class="col-md-4 col-sm-12"><h4 style="letter-spacing:2px; color:gold">' + cards[cardNumber].title + '</h4><img src="' + cards[cardNumber].img + '" class="monsterImg"><span style="float:left; padding-right: 30px;"><p>obrona: ' + cards[cardNumber].defence + '</p><p>atak: ' + cards[cardNumber].attack + '</p><p>szybkość: ' + cards[cardNumber].speed + '</p><p id="monsterLife">życie: ' + cards[cardNumber].life + '</p></span></div>  </div>';


    document.getElementById('actionDiv').innerHTML = divForAction;

}


//    function atack(id) {
function atack(chooseHero, chooseMonster, spell = '') {

    var heroDefence = chooseHero.defence;
    var heroAttack = chooseHero.attack
    var heroLife = chooseHero.life;
    var heroSpeed = chooseHero.speed;

    var cardDefence = cards[chooseMonster].defence;
    var cardAttack = cards[chooseMonster].attack;
    var cardLife = cards[chooseMonster].life;
    var cardSpeed = cards[chooseMonster].speed;
    var cardTitle = cards[chooseMonster].title;

    if (spell == '') {
        var extraCardDamage = 0;
        var extraHeroDamage = 0;
        if (heroSpeed > cardSpeed) {
            extraHeroDamage = heroSpeed / cardSpeed;
        } else {
            extraCardDamage = cardSpeed / heroSpeed;
        }
        
        //        var cardDamage = Math.abs(cardDefence - heroAttack); //obliczenie róznicy obrona - atak
        var cardDamage = Math.abs(cardDefence - heroAttack - extraHeroDamage); //obliczenie róznicy obrona - atak

        

        var newCardLife = cardLife - cardDamage - extraHeroDamage;
//      var newCardLife = cardLife - cardDamage;

        chooseMonster.life = newCardLife;

        document.getElementById('monsterLife').innerText = 'życie: ' + newCardLife;


        // bohater
        var heroDamage = Math.abs(heroDefence - cardAttack - extraCardDamage);
        //        var heroDamage = Math.abs(heroDefence - cardAttack);
//        var newHeroLife = heroLife - heroDamage - extraCardDamage;
        var newHeroLife = heroLife - heroDamage;
        chooseHero.life = newHeroLife;

        document.getElementById('heroLife').innerHTML = '<p>życie: ' + newHeroLife + '</p>';

        document.getElementById('actionDiv').innerHTML += '<p>Obrażenia zadane przez Ciebie ' + cardDamage + '  </p><p>Obrażenia zadane przez ' + cardTitle + 'a ' + heroDamage + '  </p>';




        if (newCardLife == 0 || newCardLife < 0) {
            document.getElementById('actionDiv').innerHTML += '<h3 style="color:gold">Wygrałeś!</h3>';
            console.log('wygrałeś');
            var score = 'win'
            afterBattle(chooseHero, score);
        } else if (newHeroLife == 0 || newHeroLife < 0) {
            document.getElementById('actionDiv').innerHTML += '<h3>Przegrałeś!</h3>';
            console.log('przegrałeś');
            var score = 'loose';
            afterBattle(chooseHero, score);

        }
    } else {
        console.log('nieS')
    }

}

function afterBattle(chooseHero, score) {
    chooseHero.life = 10;
    if (score == 'win') {

        document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h2>Brawo! Wygrałeś! </h2><h3>To co kolejna misja czy zimny sok z feremntowanych owoców w sklepie?</h3></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';
    } else {
        document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h2>Przegrałeś! </h2><h3>Pójdziesz popłakać w kącie czy szykujesz się do kolejnej misji?</h3></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';
    }
}
// otwieranie księgi zaklęć
function spellBookFn() {
    document.getElementById('spellBookAlertBox').style.marginTop = '5%';
    document.getElementById('actImgAll').style.visibility = 'hidden';
}
//zamykanie księgi zaklęć
function closeSpellBook() {
    document.getElementById('spellBookAlertBox').style.marginTop = '-550px';
    document.getElementById('actImgAll').style.visibility = 'visible';
}
// funkcje dla czarów
function spell(id) {

    closeSpellBook();
    console.log(value);
    //    if (id == 'whirl') {
    //
    //    } else if (id == 'blackMagic') {
    //
    //    } else if (id == 'nature') {
    //
    //    } else if (id == 'eye') {
    //
    //    } else if (id == 'blackMagic2') {
    //
    //    } else if (id == 'flash') {
    //
    //    }
}

function showActText(id) {
    if (id == 'mission') {
        document.getElementById('activeText0').style.visibility = 'visible';
    } else if (id == 'store') {
        document.getElementById('activeText1').style.visibility = 'visible';
    } else if (id == 'close') {
        document.getElementById('activeText2').style.visibility = 'visible';
    } else if (id == 'attack') {
        document.getElementById('activeText3').style.visibility = 'visible';
    } else if (id == 'spellBook') {
        document.getElementById('activeText4').style.visibility = 'visible';
    } else {
        document.getElementById('activeText5').style.visibility = 'visible';
    }
}

function hideActText(id) {
    if (id == 'mission') {
        document.getElementById('activeText0').style.visibility = 'hidden';
    } else if (id == 'store') {
        document.getElementById('activeText1').style.visibility = 'hidden';
    } else if (id == 'close') {
        document.getElementById('activeText2').style.visibility = 'hidden';
    } else if (id == 'attack') {
        document.getElementById('activeText3').style.visibility = 'hidden';
    } else if (id == 'spellBook') {
        document.getElementById('activeText4').style.visibility = 'hidden';
    } else {
        document.getElementById('activeText5').style.visibility = 'hidden';
    }
}
/** funkcja wyjścia z gry **/
function closeFn() {
    document.getElementById('closeDiv').style.marginTop = '18%';
}

function quitBox(cmd) {
    if (cmd == 'quit') {
        open(location, '_self').close();
    }
    return false;
}

function stay() {
    document.getElementById('closeDiv').style.marginTop = '-250px';
}
/**funkcja chowania alertBoxa */
function hideAlertBox() {
    document.getElementById('alertBox').style.marginTop = '-250px';
}

function getStore() {
    document.getElementById('alertBox').style.marginTop = '5%';
    document.getElementById('alertBox').innerHTML = '<h3>Przepraszamy!</h3><h4>Sklep nieczynny</h4><h5>Wróć później</h5><button class="btn btn-danger" onclick="hideAlertBox()">ok!</button>';
}

function runAwayFn() {

    chooseHero.life = 10;
    
    document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h2>Nie jest Tobie wstyd? Uciekłeś!</h2><h3>Pójdziesz popłakać w kącie czy szykujesz się do kolejnej misji?</h3></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';
}

function letsPlay(button) {
    var story = '<h2>Witaj podróżniku! </h2><h4>Nie będę dopytywać co Ciebie sprowadza w te ponure strony. Czy to jest chęć wzbogacenia się, czy tylko dobrej zabawy. Nie interesuje mnie to. Powiedz mi tylko kim jesteś, a ja powiem Ci co dalej. </p><p>Czy jesteś rycerzem, złodziejem, medykiem czy magiem?</h4>';



    header.style.display = 'none';
    document.getElementById('play').innerHTML = '<div id="play">' + story + '<form><h3>Podaj swoje imię: <input id="name" type="text" name="userMame"></h3></form></div>';
    //dawne storyDiv

    document.getElementById('play').innerHTML += '<div id="aboutHero"><img src="js/../grafika/knight.jpg" onclick="requiredName(knight)" id="rycerz"><h3>Rycerz</h3><p>życie: ' + knight.life + '</p><p>atak: ' + knight.attack + '</p><p>obrona: ' + knight.defence + '</p><p>szybkość: ' + knight.speed + '</p><p>mana: ' + knight.mana + '</p></div><div id="aboutHero"><img src="js/../grafika/thief.jpg" onclick="requiredName(thief)" id="zlodziej"><h3>Złodziej</h3><p>życie: ' + thief.life + '</p><p>atak: ' + thief.attack + '</p><p>obrona: ' + thief.defence + '</p><p>szybkość: ' + thief.speed + '</p><p>mana: ' + thief.mana + '</p></div><div id="aboutHero"><img src="js/../grafika/medic.jpg" onclick="requiredName(medical)" id="medyk"><h3>Medyk</h3><p>życie: ' + medical.life + '</p><p>atak: ' + medical.attack + '</p><p>obrona: ' + medical.defence + '</p><p>szybkość: ' + medical.speed + '</p><p>mana: ' + medical.mana + '</p></div><div id="aboutHero"><img src="js/../grafika/mag.jpg" onclick="requiredName(wizard)" id="mag"><h3>Mag</h3><p>życie: ' + wizard.life + '</p><p>atak: ' + wizard.attack + '</p><p>obrona: ' + wizard.defence + '</p><p>szybkość: ' + wizard.speed + '</p><p>mana: ' + wizard.mana + '</p></div>'
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
    this.divStage2 = '<div id="hero"><h3>' + this.id + '</h3><img src="' + this.img + '"><p id= "heroLife" style="color:red">życie: ' + this.life + '</p><p>obrona: ' + this.defence + '</p><p>atak: ' + this.attack + '</p><p>szybkość: ' + this.speed + '</p><p id="mana">mana: ' + this.mana + '</p></div>'
}
var heroAll = [
    knight = new HeroesAll(0, 'Rycerz', 'knight', 'Rycerzem', 10, 10, 2, 3, 10, 'js/../grafika/knight.jpg', ', świetnie, a więc jesteś dzielnym rycerzem o wielkiej sile!', ),
    thief = new HeroesAll(1, 'Złodziej', 'thief', 'Złodziejem', 5, 7, 10, 4, 10, 'js/../grafika/thief.jpg', ', świetnie, a więc jesteś cwanym i przebiegłym rzezimieszkiem!'),
    medical = new HeroesAll(2, 'Medyk', 'medical', 'Medykiem', 8, 5, 6, 7, 10, 'js/../grafika/medic.jpg', ', świetnie, a więc jesteś mądrym i niosącym pomoc człowiekiem!'),
    wizard = new HeroesAll(3, 'Mag', 'Wizard', 'Magiem', 6, 7, 6, 10, 10, 'js/../grafika/mag.jpg', ', świetnie, a więc jesteś potężnym znającym wiele czarów magiem!')
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
    troll = new CardsAll('Troll', 5, 4, 5, 10, 'js/../grafika/troll.jpg', 'Jesteś w grocie, pod Twoimi stopami wala się mnóstwo kości. Odrzucasz jedną z czaszek, która odbija się z głuchym łoskotem do wnętrza jamy. Hałas budzi uśpionego stwora, nadchodzi Troll!'),
    mudMonster = new CardsAll('Błotny Potwór', 4, 6, 4, 10, 'js/../grafika/blotny_potwor.png', 'Znajdujesz się daleko poza miastem. Jaskinie, la sy, bagna i wstrętny mlaskający dźwięk. Patrzysz, a zza głazu wyłania się Błotny Potwór.'),
    vampire = new CardsAll('Wampir', 5, 6, 8, 10, 'js/../grafika/vampire.jpg', 'Znajdujesz się w opustoszałym domu, gdzie słyszysz płacz dziecka. Rozglądasz się uważnie po ciemnych pokojach aż nagle go dostrzegasz. Wampir!'),
    cyclops = new CardsAll('Cyklop', 7, 4, 4, 10, 'js/../grafika/cyklop.jpg', 'Idąc wąską przełęczą, o mało nie zabija Ciebie głaz. Podnosisz wzrok, a Twoim oczom ukazuje się jednooka bestia, to cyklop!'),
    gin = new CardsAll('Dżin', 9, 5, 8, 10, 'js/../grafika/gin.jpg', 'Czujesz jak żar leje się z nieba, idziesz resztkami sił. Nagle w zamieci piaskowej dostrzegasz majaczącą niebieską plamę, czy to pustynna oaza? Nie! To śmiertelnie niebezpieczny dżin!'),
    centur = new CardsAll('Centaur', 5, 8, 7, 10, 'js/../grafika/centaur.jpg', 'Wiedziałeś, że schodzenie z leśnego szlaku to był kiepski pomysł, jednak te jagody wyglądały tak smakowicie. Gdy wkładasz kolejny owoc do ust zagradza Tobie drogę majestatyczny centaur. Przygotuj się do walki.'),
    hellishHorse = new CardsAll('Piekielny Rumak', 5, 7, 6, 10, 'js/../grafika/hellishHorse.jpg', 'Sądzisz, że w życiu wiele już widziałeś dlatego rad jesteś, że nareszcie może odpocząć w tym pustym zagajniku. W momencie, gdy wyciągasz wygodnie nogi oparty o młodą brzózkę dochodzi Ciebie swąd spalenizny. Odwracasz się i dostrzegasz płonącego ogiera, to rumak samego diabła, to Piekielny Rumak! '),
    harpy = new CardsAll('Harpia', 6, 9, 7, 10, 'js/../grafika/harpy.jpg', 'Te tereny nie wyglądają przyjaźnie. Kilka sępów krąży nad Twoją głową już od dłuższego czasu, a noc nadchodzi coraz szybciej. Nagle słyszysz przerażający skowyt, a na policzku czujesz podmuch wiatru ostry niczym sztylet. Zaatakowała Ciebie harpia, uważaj jest przerażająco szybka.'),
    sirena = new CardsAll('Syrena', 9, 4, 8, 10, 'js/../grafika/siren.jpg', 'Pływając po bezkresnych oceanach odpierając co jakiś czas atak piratów, słyszysz piękny śpiew, który mami Ciebie i obezwładnia. O mało nie wypadasz poza burtę, w ostatniej chwili powstrzymuje Ciebie marynarz. Strzeż się, to syrena niosąca zgubę.'),
//    emptyRoom = new CardsAll('Pusty pokój', 0, 0, 0, 0, 'js/../grafika/treasure.jpg', 'Błądzisz już tak kilka godzin, żadnego wampira, licza, nawet pająka! Nic, kompletna posucha. Znudzony nic nierobieniem wchodzisz do rozwalającego się domu, znudzony siadasz na zakurzonym fotelu. W kącie dostrzegasz stojącą skrzynię ze zdobnymi okuciami. Jednym porządnym szarpnięciem otwierasz wieko skrzyni. Na Twoich ustach pojawia się uśmiech, to złoto i kilka innych cennych rzeczy. To będzie przyjemny wieczór w gospodzie Pod Bezgłowym Kogutem.')
]
/**magia**/
function SpellAll(spellId, name, mana, attack, defence, life, div) {
    this.spellId = spellId;
    this.name = name;
    this.mana = mana;
    this.attack = attack;
    this.defence = defence;
    this.life = life;
    this.div = div
}
var spell = [
    whirl = new SpellAll('whirl', 'wir zniszczenia', 2, 2, 0, 0, '<p><strong>wir zniszczenia </strong></p><img src="grafika/spellWhirl.jpg" id="' + this + '" onclick="atack(newObjectChooseHero, newObjectChooseCard, whirl)"><p>Zadaje przeciwnikowi 2pkt uszkodzenia, 2 mana</p>'),
    blackMagic = new SpellAll('blackMagic', 'przywołanie mocy', 4, 0, 0, 3, '<p><strong>przywołanie mocy</strong></p><img src="grafika/spellBlackMagic.jpg" id="' + this + '" onclick="atack(chooseHero, chooseMonster, blackMagic)"><p>Dodaje 3pkt do życia bohatera, 4 mana</p>'),
    nature = new SpellAll('nature', 'Uzdrowienie', 2, 0, 0, 2, '<p><strong>Uzdrownie</strong></p><img src="grafika/spellNature.jpg" id="' + this + '" onclick="atack(chooseHero, chooseMonster, nature)"><p>Dodaje 2pkt życia bohatera, 2 mana</p>'),
    hurt = new SpellAll('hurt', 'uszkodzenie', 2, 1, 0, 0, '<p><strong>uszkodzenie</strong></p><img src="grafika/spellEye.jpg" id="' + this + '" onclick="atack(chooseHero, chooseMonster, hurt)"><p>Uszkodź przeciwnika 1pkt, 2 mana</p>'),
    blackMagic2 = new SpellAll('blackMagic2', 'Pradawne Zło', 5, 5, 0, 0, '<p><strong>pradawne zło</strong></p><img src="grafika/spellBlackMagic2.jpg" id="' + this + '" onclick="atack(chooseHero, chooseMonster, blackMagic2)"><p>Zadaje przeciwnikowi 5pkt uszkodzenia, 5 mana</p>'),
    flash = new SpellAll('flash', 'piorun', 3, 2, 0, 0, '<p><strong>piorun</strong></p><img src="grafika/spellFlash.jpg" id="' + this + '" onclick="atack(chooseHero, chooseMonster, flash)"><p>Zadaje przeciwnikowi 2pkt uszkodzenia, 3 mana</p>')
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
    this.div = '<div id="' + this.id + '" style="background: url(' + this.srcImg + ')" onclick="' + this.onClickEvent + '" onmouseenter="' + this.enterEvent + '" onmouseleave="' + this.leaveEvent + '"><h3 id="' + this.textId + '">' + this.text + '</h3></div>'
}
var btnImg = [
    mission = new btnImg('mission', 'js/../grafika/mission.jpg', 'newMission(chooseHero)', 'showActText(id)', 'hideActText(id)', 'activeText0', 'nowa misja'),
    store = new btnImg('store', 'js/../grafika/shop.jpg', 'getStore()', 'showActText(id)', 'hideActText(id)', 'activeText1', 'sklep'),
    close = new btnImg('close', 'js/../grafika/door.jpg', 'closeFn()', 'showActText(id)', 'hideActText(id)', 'activeText2', 'wyjdź z gry'),
    attack = new btnImg('attack', 'js/../grafika/walcz.png', 'atack(newObjectChooseHero, newObjectChooseCard)', 'showActText(id)', 'hideActText(id)', 'activeText3', 'atakuj!'),
    spellBook = new btnImg('spellBook', 'js/../grafika/magic.png', 'spellBookFn()', 'showActText(id)', 'hideActText(id)', 'activeText4', 'księga zaklęć'),
    runAway = new btnImg('runAway', 'js/../grafika/uciekaj.png', 'runAwayFn()', 'showActText(id)', 'hideActText(id)', 'activeText5', 'uciekaj')
]

function requiredName(HeroesAll) {
    var myHero = HeroesAll;

    var name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('alertBox').innerHTML = '<h3>Chcesz mi być obcym? Podaj imię i będziemy mogli ruszać dalej.</h3><button " onclick="hideAlertBox()"><h3>ok</h3></button>';
        document.getElementById('alertBox').style.marginTop = '18%';
    } else {
        getName(myHero, name);
    }
}

function getName(myHero, name) {

    document.getElementById('alertBox').style.marginTop = '-1000px';

    document.getElementById('play').innerHTML = '<div id="play">' + heroAll[myHero.hid].divStage2 + '<div id="actionDiv"><h3 style="color:gold">' + name + ' ' + heroAll[myHero.hid].description + '</h3><p>Zacznijmy zabawę. Po prawej stronie masz menu dzięki któremu możesz wybrać swój kolejny krok, rozpocząć nową misję, zakupić cenne towary w sklepie (uwaga, sklep jest często zamknięty, jakiś remont czy coś...) lub skorzystać z drzwi i wyjść z gry.</p><p>Po lewej stronie masz opis swojego bohatera. Miej się na baczności, ponieważ z każdą kolejną przygodą Twoje umiejętności mogą się zmieniać.</p><img src="js/../grafika/forest.jpg" class="forestImg"></div><div id="actImgAll">' + mission.div + store.div + close.div + '</div></div>';

    chooseHero = myHero;

}
var chooseHero = '';
var chooseMonster = '';

function newMission(chooseHero) {
    /*action - pole rozgrywki <div class="col-sm-7" id="action"></div>
    actImgAll - boczne menu <div class="col-sm-2" id="actImgAll"></div>*/

    var cardNumber = Math.round(Math.random() * (cards.length - 1));

    chooseMonster = cards[cardNumber];
    newObjectChooseHero = JSON.parse(JSON.stringify(chooseHero));
    newObjectChooseCard = JSON.parse(JSON.stringify(chooseMonster));

    document.getElementById('actionDiv').style.display = 'none';
    document.getElementById('actImgAll').style.display = 'none';

    document.getElementById('fightDiv').style.display = 'block';
    document.getElementById('fightDiv').innerHTML = '<div id="fightDiv"><div id="aboutMonsterDiv"><h4>' + cards[cardNumber].story + '</h4><h3>Co robisz?</h3><div id="fightDescription"></div></div>   <div id="monsterSkills"><h4 style="letter-spacing:2px; color:gold">' + cards[cardNumber].title + '</h4><img src="' + cards[cardNumber].img + '" class="monsterImg"><p>obrona: ' + cards[cardNumber].defence + '</p><p>atak: ' + cards[cardNumber].attack + '</p><p>szybkość: ' + cards[cardNumber].speed + '</p><p id="monsterLife">życie: ' + cards[cardNumber].life + '</p></div><div id="actImgAllFight">' + attack.div + spellBook.div + runAway.div + '</div></div>'
}

function atack(newObjectChooseHero, newObjectChooseCard, SpellAll = '') {

    var heroDefence = newObjectChooseHero.defence;
    var heroAttack = newObjectChooseHero.attack
    var heroLife = newObjectChooseHero.life;
    var heroSpeed = newObjectChooseHero.speed;
    var heroMana = newObjectChooseHero.mana;

    var cardDefence = newObjectChooseCard.defence;
    var cardAttack = newObjectChooseCard.attack;
    var cardLife = newObjectChooseCard.life;
    var cardSpeed = newObjectChooseCard.speed;
    var cardTitle = newObjectChooseCard.title;

    var extraCardDamage = 0;
    var extraHeroDamage = 0;

    if (heroSpeed > cardSpeed) {
        extraHeroDamage = heroSpeed / cardSpeed;
    } else {
        extraCardDamage = cardSpeed / heroSpeed;
    }

    if (SpellAll == '') {

        var cardDamage = Math.round(Math.abs(cardDefence - heroAttack - extraHeroDamage));

        if (cardDamage == 0) {
            heroDamage = 2;
        }

        var newCardLife = cardLife - cardDamage;

        document.getElementById('fightDescription').innerHTML += '<p>Obrażenia zadane przez Ciebie ' + cardDamage + '.</p>';

    } else if (SpellAll != '') {
        var newHeroLife = heroLife;

        if (SpellAll.spellId == 'whirl' && heroMana >= SpellAll.mana) {
            closeSpellBook();
            var newCardLife = cardLife - SpellAll.attack;
            document.getElementById('fightDescription').innerHTML += '<p>Obrażenia zadane przez zaklęcie ' + SpellAll.spellId + ' + 2pkt do obrażenia ' + cardTitle;
            leftMana = heroMana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else if (SpellAll.spellId == 'blackMagic' && heroMana >= SpellAll.mana) {
            newCardLife = cardLife;
            heroLife = heroLife + SpellAll.life;
            document.getElementById('fightDescription').innerHTML += '<p>Dodatkowe pkt życia dzięki zaklęciu ' + SpellAll.spellId + ' + 3pkt do życia bohatera';
            closeSpellBook();
            leftMana = chooseHero.mana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else if (SpellAll.spellId == 'nature' && heroMana >= SpellAll.mana) {
            newCardLife = cardLife;
            heroLife = heroLife + SpellAll.life;
            document.getElementById('fightDescription').innerHTML += '<p>Dodatkowe pkt życia dzięki zaklęciu ' + SpellAll.spellId + ' + 4pkt do życia bohatera';
            closeSpellBook();
            leftMana = chooseHero.mana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else if (SpellAll.spellId == 'hurt' && heroMana >= SpellAll.mana) {
            var newCardLife = cardLife - SpellAll.attack;

            document.getElementById('fightDescription').innerHTML += '<p>Dodatkowe pkt życia dzięki zaklęciu ' + SpellAll.spellId + ' + 1pkt do życia bohatera';
            closeSpellBook();
            leftMana = chooseHero.mana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else if (SpellAll.spellId == 'blackMagic2' && heroMana >= SpellAll.mana) {
            var newCardLife = cardLife - SpellAll.attack;

            document.getElementById('fightDescription').innerHTML += '<p>Obrażenia zadane przez zaklęcie ' + SpellAll.spellId + ' + 5pkt do obrażenia ' + cardTitle;
            closeSpellBook();
            leftMana = chooseHero.mana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else if (SpellAll.spellId == 'flash' && heroMana >= SpellAll.mana) {
            var newCardLife = cardLife - SpellAll.attack;

            document.getElementById('fightDescription').innerHTML += '<p>Obrażenia zadane przez zaklęcie ' + SpellAll.spellId + ' + 3pkt do obrażenia ' + cardTitle;
            closeSpellBook();
            leftMana = chooseHero.mana - SpellAll.mana;
            document.getElementById('mana').innerHTML = '<p>mana: ' + leftMana + '</p>';
            newObjectChooseHero.mana = leftMana;

        } else {
            var newCardLife = cardLife;
            toLessMana();
        }
    }


    // potwor
    var heroDamage = Math.round(Math.abs(heroDefence - cardAttack - extraCardDamage));
    if (heroDamage == 0) {
        heroDamage = 2;
    }
    var newHeroLife = heroLife - heroDamage;
    newObjectChooseHero.life = newHeroLife;
    newObjectChooseCard.life = newCardLife;

    document.getElementById('fightDescription').innerHTML += '<p>Obrażenia zadane przez ' + cardTitle + 'a ' + heroDamage + '  </p>';
    document.getElementById('monsterLife').innerText = 'życie: ' + newObjectChooseCard.life;
    document.getElementById('heroLife').innerText = 'życie: ' + newObjectChooseHero.life;





    if (newCardLife <= 0) {
        document.getElementById('fightDescription').innerHTML += '<h3 style="color:gold">Wygrałeś!</h3>';
        var score = 'win';
        afterBattle(chooseHero, chooseMonster, score);
    } else if (newHeroLife <= 0) {
        document.getElementById('fightDescription').innerHTML += '<h3>Przegrałeś!</h3>';
        var score = 'loose';
        afterBattle(chooseHero, chooseMonster, score);
    }

}

function afterBattle(chooseHero, chooseMonster, score) {
    document.getElementById('fightDiv').style.display = 'none';
    if (score == 'win') {

        document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h2>Brawo! Wygrałeś! </h2><h3>To co kolejna misja czy zimny sok z feremntowanych owoców w sklepie?</h3></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';
    } else {
        document.getElementById('play').innerHTML = '<div class="col-md-11 col-sm-12" id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div class="col-sm-8" id="actionDiv"><h2>Przegrałeś! </h2><h3>Pójdziesz popłakać w kącie czy szykujesz się do kolejnej misji?</h3></div><div class="col-sm-4 col-md-2" id="actImgAll">' + mission.div + store.div + close.div + '</div></div></div>';
    }
}

function toLessMana() {
    closeSpellBook()
    document.getElementById('alertBox').style.marginTop = '5%';
    document.getElementById('alertBox').innerHTML = '<h3>Masz niewystarczającą ilość many, aby rzucić czar.</h3><h3>Pozostaje Tobie się tylko bronić!</h3><h4>Bądź czujny!</h4><button class="btn btn-danger" onclick="hideAlertBox()">ok!</button>';
}
// otwieranie księgi zaklęć
function spellBookFn() {
    document.getElementById('spellBookAlertBox').style.marginTop = '5%';
    document.getElementById('actImgAllFight').style.visibility = 'hidden';


    for (i = 0; i < spell.length - 3; i++) {
        document.getElementById('leftSideSpellBook').innerHTML += spell[i].div;
        //        
    };
    for (i = 3; i < spell.length; i++) {
        document.getElementById('spellRightSideSpellBook').innerHTML += spell[i].div;
    }

}
//zamykanie księgi zaklęć
function closeSpellBook() {
    document.getElementById('spellBookAlertBox').style.marginTop = '-1000px';
    document.getElementById('leftSideSpellBook').innerHTML = '<div></div>';
    document.getElementById('spellRightSideSpellBook').innerHTML = '<div></div>';
    document.getElementById('actImgAllFight').style.visibility = 'visible';
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
    document.getElementById('alertBox').style.marginTop = '-1000px';
}

function getStore() {
    document.getElementById('alertBox').style.marginTop = '5%';
    document.getElementById('alertBox').innerHTML = '<h2>Przepraszamy!</h2><h3>Sklep nieczynny</h3><h4>Nieznośnie górskie trolle napadły na sklepikarza parę dni temu. Ledwo się handlarz wykaraskał, a pojawił się smutny Ent i zabrał wszystko czego trolle nie rozkradły. Mówił coś o jakichś niespłaconych ratach czy co. Minie sporo czasu nim przyjadą karawany z nowymi towarami, a nasz sklepikarz poukłada wszystko na nowo. Wróć później</h4><button class="btn btn-danger" onclick="hideAlertBox()">ok!</button>';
}

function runAwayFn() {
    document.getElementById('fightDiv').style.display = 'none';
    document.getElementById('play').innerHTML = '<div id="actionDivAll"><div class="row">' + heroAll[chooseHero.hid].divStage2 + '<div id="actionDiv"><h2>Nie jest Tobie wstyd? Uciekłeś!</h2><h3>Pójdziesz popłakać w kącie czy szykujesz się do kolejnej misji?</h3></div><div id="actImgAll">' + mission.div + store.div + close.div + '</div></div>';
}

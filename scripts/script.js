document.querySelector('html').setAttribute('lang', 'en');

let metaUTF8 = document.createElement('meta');
    metaUTF8.setAttribute('charset', 'UTF-8');

let metaHttp = document.createElement('meta');
    metaHttp.setAttribute('http-equiv','X-UA-Compatible');
    metaHttp.setAttribute('content','IE=edge');

let metaView = document.createElement('meta');
    metaView.setAttribute('name','viewport');
    metaView.setAttribute('content','width=device-width, initial-scale=1.0');

let metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name','author');
    metaAuthor.setAttribute('content','Dzianis Yudenka');

let title = document.createElement('title');
    title.innerHTML = 'Call to Action';

let favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('href', 'img/icoclosed.png');
    
document.head.appendChild(metaUTF8);
document.head.appendChild(metaHttp);
document.head.appendChild(metaView);
document.head.appendChild(metaAuthor);
document.head.appendChild(title);
document.head.appendChild(favicon);

let div0 = document.createElement('div');
    div0.classList.add('app');

document.body.appendChild(div0);    

let div1 = document.createElement('div');
    div1.classList.add('container');

div0.appendChild(div1);    

let header = document.createElement('header');
    header.classList.add('header');

div1.appendChild(header);

let div2 = document.createElement('div');
    div2.classList.add('header__title');

header.appendChild(div2);

let h1 = document.createElement('h1');
    h1.classList.add('header__name');
    h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
    p1.classList.add('header__sub-text');
    p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

div2.appendChild(h1);
div2.appendChild(p1);

let main = document.createElement('main');
    main.classList.add('main');

div1.appendChild(main);

let divMain = document.createElement('div');
    divMain.classList.add('main__items');

main.appendChild(divMain);

let divItem = document.createElement('div');
    divItem.classList.add('main__item');

divMain.appendChild(divItem);

let divSup = document.createElement('div');
    divSup.classList.add('main__sup_title');
    divSup.innerHTML = 'FREELANCER';

let mainH2 = document.createElement('h2');
    mainH2.classList.add('main__title');
    mainH2.innerHTML = 'Initially designed to';

let divSub = document.createElement('div');
    divSub.classList.add('main__sub_title');
    divSub.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let button = document.createElement('button');
    button.classList.add('main__button');
    button.innerHTML = 'START HERE';

divItem.appendChild(divSup);
divItem.appendChild(mainH2);
divItem.appendChild(divSub);
divItem.appendChild(button);

let divItem1 = divItem.cloneNode(true);
    divItem1.querySelector('div').innerHTML = 'STUDIO';

divMain.appendChild(divItem1);

let style = document.createElement('style');

style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@300;400;700&family=Open+Sans&display=swap');

        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #E5E5E5;
            font-family: 'Open Sans', sans-serif;
            color: #9FA3A7;
        }

        .container {
            width: 90%;
            max-width: 1280px;
            margin: 0 auto;
            background-color: white;
            padding: 120px 0;
        }

        .header__title {
            text-align: center;
        }

        .header__name {
            font-family: 'Arvo', serif;
            font-weight: 400;
            font-size: 36px;
            line-height: 48px;
            color: #212121;
        }

        .header__sub-text {
            font-size: 14px;
            line-height: 26px;
            padding-top: 10px;
            padding-bottom: 50px;
        }

        .main__items {
            display: flex;
            justify-content: center;
        }

        .main__item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            height: 480px;
            padding: 80px 0;
            box-sizing: border-box;
            text-align: center;
            border-radius: 8px 0 0 8px;
        }

        .main__item:nth-child(1) {
            border-top: 1px solid #E8E9ED;
            border-left: 1px solid #E8E9ED;
            border-bottom: 1px solid #E8E9ED;
        }

        .main__item:nth-child(2) {
            background-color: #8F75BE;
            border-top: 1px solid transparent;
            border-right: 1px solid transparent;
            border-bottom: 1px solid transparent;
            border-radius:  0 8px 8px 0 ;
            color: #FFFFFF;
        }

        .main__sup_title {
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 2.4px;
        }

        .main__item:nth-child(2) .main__sup_title {
            color: #FFC80A;
        }

        .main__title {
            font-family: 'Arvo', serif;
            font-weight: normal;
            font-size: 36px;
            line-height: 46px;
            max-width: 210px;
        }

        .main__item:nth-child(1) .main__title {
            color: #212121;
        }

        .main__sub_title {
            font-size: 12px;
            line-height: 22px;
            max-width: 210px;
        }

        .main__button {
            width: 147px;
            height: 48px;
            border: 3px solid #FFC80A;
            border-radius: 25px;
            background: none;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: bold;
            line-height: 15px;
            letter-spacing: 2.4px;
            cursor: pointer;
            margin-top: 40px;
        }

        .main__item:nth-child(1) .main__button:hover {
            background: #8F75BE;
            color:#FFFFFF;
        }

        .main__item:nth-child(2) .main__button {
            color:#FFFFFF;
        }

        .main__item:nth-child(2) .main__button:hover {
            background: #ffffff; 
            color:#212121;
        }
    `;

document.head.appendChild(style);
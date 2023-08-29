const AboutUsSide = document.querySelector('#about-us');
const BorderRight = document.querySelector('#boder-right');

console.log(BorderRight)
BorderRight.style.height = `${AboutUsSide.offsetHeight}px`



function CreatTextSide(img , title , text){
    const TextSide = document.createElement('div');
    TextSide.className = 'textside';
    const Title = document.createElement('h2');
    Title.innerHTML = title;
    const Label = document.createElement('label');
    Label.className = 'showicon-side'
    Label.style = '--x:82px;'
    const Image = document.createElement('img');
    Image.src = img;
    const Line = document.createElement('div');
    Line.id = 'line'
    const Span = document.createElement('span');
    Span.innerHTML = text;


    AboutUsSide.appendChild(TextSide);
    TextSide.appendChild(Title);
    TextSide.appendChild(Label);
    Label.appendChild(Image);
    TextSide.appendChild(Line);
    TextSide.appendChild(Span);
    BorderRight.style.height = `${AboutUsSide.offsetHeight}px`

}


CreatTextSide(
    '/Image/expirience.svg' , 'سلام' , 'تیسنتینس تینتس نیتن ستنیت ستینت سنیتنست نیتن ستینتس نیت نستینت سنیت نستینستی نست ینست ینست نیتسن یتسنت ینست نیت سن یتنست نست ینست ینستی :|'
)
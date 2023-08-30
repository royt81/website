


const background = document.getElementById('background');
const container = document.getElementById('container');
const sideBarUl = document.getElementsByClassName('sideBarList')[0];
const myPic = document.getElementById('myPic');
const content = document.getElementById('content');
const myName = document.getElementById('myName');

const image = document.createElement('img');
image.className = 'myPic'
image.src = './images/me.png'

myPic.appendChild(image)

myPic.style.backgroundImage = "url('./images/me.png')"

myPic.addEventListener('click', ()=>{
    background.style.backgroundImage = "url('./images/BG06.jpg')"
    content.style.display = 'none'

})

const aboutMe = document.createElement('button');
aboutMe.className = 'sideBarButton';
aboutMe.innerText = 'About Me';
aboutMe.addEventListener('click', ()=>{
    myName.style.display = 'none'

    background.style.backgroundImage = "url('./images/BG028.jpg')"
    content.innerHTML = ''
    content.innerText =  `
    a Berlin-based, 
    happily married, 
    self-thought web designer 
    and programmer.`
    content.className = 'aboutMe';
    content.style.display = 'flex';
    
});
sideBarUl.appendChild(aboutMe)

const gallery = document.createElement('button');
gallery.className = 'sideBarButton';
gallery.innerText = 'Gallery';
gallery.addEventListener('click', ()=>{
    myName.style.display = 'none'

    background.style.backgroundImage = "url('./images/BG026.jpg')"
    content.innerHTML = ''


    const gidisLighthouseA = document.createElement('a')
    gidisLighthouseA.href = 'http://www.gidislighthouse.com/'

    const gidisLighthouse = document.createElement('h6')
    gidisLighthouse.innerText =  "Gidi's Lighthouse"
    
    gidisLighthouseA.appendChild(gidisLighthouse)
    
    content.appendChild(gidisLighthouseA)
    content.className = 'gallery';
    content.style.display = 'flex';
    
});
sideBarUl.appendChild(gallery)


const youTube = document.createElement('button');
youTube.className = 'sideBarButton';
youTube.innerText = 'YouTube';
youTube.addEventListener('click', ()=>{
    myName.style.display = 'none'
    background.style.backgroundImage = "url('./images/BG04.jpg')"
    content.innerHTML = ''
    content.style.display = 'flex';

    const playerDiv = document.createElement('div');
    playerDiv.id = 'player';
    const playerContainer = document.createElement('div');
    playerContainer.id = 'playerContainer';

    const playerIframe = document.createElement('iframe');
    playerIframe.id = 'playerIframe'
    playerIframe.width = '640';
    playerIframe.height = '390';
    playerIframe.src = 'https://www.youtube.com/embed/Om72mvbXZmI'; 
    playerIframe.setAttribute('allowfullscreen', '');
    playerIframe.setAttribute('allow', 'autoplay; encrypted-media');
    playerDiv.appendChild(playerIframe);

    playerContainer.appendChild(playerDiv);
    content.appendChild(playerContainer);

    const text = document.createElement('div');
    text.className = 'card'
    text.innerText = 'a video introduction for a POS system for restaurants. Created with Electron'

    content.appendChild(text)
});
sideBarUl.appendChild(youTube)


const getInContact = document.createElement('button');
getInContact.className = 'sideBarButton';
getInContact.innerText = 'Contact';
getInContact.addEventListener('click', ()=>{

    myName.style.display = 'none'

    background.style.backgroundImage = "url('./images/BG025.jpg')"
    content.innerHTML = ''
    content.style.display = 'flex'

    const contactList = document.createElement('div');
    contactList.id = 'getInContact';

    const email = document.createElement('h2')
    email.innerText =`Email:
     roytate.berlin@gmail.com`

    const linkedinA = document.createElement('a');
    linkedinA.href = 'https://www.linkedin.com/in/roy-tate-is-on-line'

    const linkedin = document.createElement('h2');
    linkedin.innerText = 'Linkedin'
    linkedinA.appendChild(linkedin)

    const gitHubA = document.createElement('a');
    gitHubA.href = 'https://www.github.com/royt81'

    const github = document.createElement('h2');
    github.innerText = 'Github'
    gitHubA.appendChild(github)

    const stackOverflowA = document.createElement('a');
    stackOverflowA.href = 'https://www.stackoverflow.com/users/20268824/roy-tate'

    const stackOverflow = document.createElement('h2');
    stackOverflow.innerText = 'Stack Overflow'
    stackOverflowA.appendChild(stackOverflow)


    contactList.appendChild(email)
    contactList.appendChild(linkedinA)
    contactList.appendChild(gitHubA)
    contactList.appendChild(stackOverflowA)


    content.appendChild(contactList)
});
sideBarUl.appendChild(getInContact)







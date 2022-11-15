const chooseimage = document.getElementById("URL")
const toptext = document.getElementById("TopText")
const bottomtext = document.getElementById("BottomText")
const submitbtn = document.getElementById("submit")

document.addEventListener('DOMContentLoaded', function () {
    let memeform = document.getElementById("NewMemeForm");
    let MemeList = document.getElementById("MemeList");
    
    memeform = this.addEventListener("submit", function(e) {
        e.preventDefault();

        let newMeme = document.createElement("div");
        newMeme.className = 'meme-container'
        newMeme.innerHTML = "<img id='meme-image' src = "+chooseimage.value+">" + 
        "<div id='top-text'> "+toptext.value+"  </div>" +
        "<div id='bottom-text'> "+bottomtext.value+"  </div>"
        
        let removebutton = document.createElement("button");
        removebutton.id = 'removebutton';
        removebutton.innerText = 'X';        
        removebutton.addEventListener("click", deletememe) 
        function deletememe(e) {
            newMeme.innerHTML = ''
        }

        MemeList.appendChild(newMeme);
        newMeme.appendChild(removebutton);

        memeform.reset();
        });   

});
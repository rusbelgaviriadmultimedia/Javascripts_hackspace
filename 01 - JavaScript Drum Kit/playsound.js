/* *function playsound(clave){
    var sound_key=clave.getAttribute("data-key");
    alert("the" + clave.innerHTML + sound_key + ".");

};*/
//window.addEventListener('type: DomString', callback: addEventListener, capture?: boolean)
window.addEventListener('keydowm', function (e){
    const audio = document.querySelector('audio[data-key=${e.keyCode}]');
        if(!audio) return; //stop the function from running all together
        audio.currentTime = 0;// rewind to the start
        audio.play();
        
});


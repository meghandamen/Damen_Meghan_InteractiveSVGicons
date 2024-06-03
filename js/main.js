console.log("this file is linked")

const icons =document.querySelectorAll("#icons #icon-container")
console.log(icons);

function logId() {
    console.log(this.id);
}

icons.forEach(function(icons){
    icon.aaddEventLinsener("click", logId);
})
var counter = 20;

function introPg() {
    var x = document.getElementById("introPg");
    x.style.display = "block";  
    x.style.zIndex = ++counter;
    console.log(counter);
}

function openAbout() {
    document.getElementById("aboutTextContainer").style.display = "block";
    document.getElementById("minesweeper").style.display = "none"
}

function openMS() {
    document.getElementById("minesweeper").style.display = "block";
    document.getElementById("aboutTextContainer").style.display = "none"
}

function closePg() {
    var x = document.getElementById("introPg");
    x.style.display = "none";  
}

function showFolders() {
    console.log("hello... folders should be appearing");
    document.getElementById("folderContainer").style.display = "block";
    
}

function openGameplayPg() {
    var x = document.getElementById("gameplayPg");
    x.style.display = "block"
    x.style.zIndex = ++counter;
    console.log(counter);
}

function closeGameplayPg() {
    var x = document.getElementById("gameplayPg");
    x.style.display = "none"
}

function openHistory() {
    document.getElementById("historyPg").style.display = "block"
    x.style.zIndex = ++counter;
    console.log(counter);
}

function closeHistory() {
    document.getElementById("historyPg").style.display = "none"
}

function openEighties() {
    var x = document.getElementById("eighties");
    x.style.display = "block";
    document.getElementById("nineties").style.display = "none"
    document.getElementById("twoThousands").style.display = "none"

}

function openNineties() {
    var x = document.getElementById("nineties");
    x.style.display = "block";  
    document.getElementById("eighties").style.display = "none"
    document.getElementById("twoThousands").style.display = "none"
}

function openTwoThousands() {
    var x = document.getElementById("twoThousands");
    x.style.display = "block";  
    document.getElementById("eighties").style.display = "none"
    document.getElementById("nineties").style.display = "none"
}

function openVariantsPg() {
    var x = document.getElementById("variantsPg");
    x.style.display = "block";
    x.style.zIndex = ++counter;
    console.log(counter);
}

function closeVariantsPg() {
    document.getElementById("variantsPg").style.display = "none";
}

function openOverveiw() {
    document.getElementById("variantsOverview").style.display = "block";
    document.getElementById("variantsImgs").style.display = "none"
    x.style.zIndex = ++counter;
    console.log(counter);
}

function openVariants() {
    document.getElementById("variantsOverview").style.display = "none";
    document.getElementById("variantsImgs").style.display = "block"
}

function openCompetitivePlayPg() {
    var x = document.getElementById("competitivePlayPg");
    x.style.display = "block";
    x.style.zIndex = ++counter;
    console.log(counter);
}

function openWorldRecordVideo() {
    window.open('https://youtu.be/GrZCWx0fnfc?si=vhKB3hNqumj1BgRt', '_blank');
}

function closeCompetitivePlayPg() {
    document.getElementById("competitivePlayPg").style.display = "none";
}

function openComputationalComplexityPg() {
    var x = document.getElementById("computationalComplexityPg");
    x.style.display = "block";
    x.style.zIndex = ++counter;
    console.log(counter);
}

function openComplexityVideo() {
    window.open('https://youtu.be/ycPDDnQh2qE?si=08OIsIDdMM6oI4RK', '_blank');
}

function closeComputationalComplexityPg() {
    document.getElementById("computationalComplexityPg").style.display = "none";
}

function openReferences() {
    var x = document.getElementById("referencePg");
    x.style.display = "block";
    x.style.zIndex = ++counter;
    console.log(counter);
}

function closeReferences() {
    var x = document.getElementById("referencePg");
    x.style.display = "none";
    x.style.zIndex = ++counter;
    console.log(counter);
}



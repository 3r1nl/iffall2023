function introPg() {
    var x = document.getElementById("introPg");
    x.style.display = "block";  
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
}

function closeGameplayPg() {
    var x = document.getElementById("gameplayPg");
    x.style.display = "none"
}

function openHistory() {
    document.getElementById("historyPg").style.display = "block"
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
    document.getElementById("variantsPg").style.display = "block";
}

function closeVariantsPg() {
    document.getElementById("variantsPg").style.display = "none";
}

function openOverveiw() {
    document.getElementById("variantsOverview").style.display = "block";
    document.getElementById("variantsImgs").style.display = "none"
}

function openVariants() {
    document.getElementById("variantsOverview").style.display = "none";
    document.getElementById("variantsImgs").style.display = "block"
}

function openCompetitivePlayPg() {
    document.getElementById("competitivePlayPg").style.display = "block";
}

function closeCompetitivePlayPg() {
    document.getElementById("competitivePlayPg").style.display = "none";
}

function openComputationalComplexityPg() {
    document.getElementById("computationalComplexityPg").style.display = "block";
}

function closeComputationalComplexityPg() {
    document.getElementById("computationalComplexityPg").style.display = "none";
}



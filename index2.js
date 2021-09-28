async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

const carouselText = [
    { text: "Hardworking", color: "red" },
    { text: "Eager to Learn", color: "orange" },
    { text: "Consistent", color: "yellow" }
]

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}

carousel(carouselText, "#sentence");

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 0.7 * $(window).height()) {
        $("#go-to-top").addClass('body-navbar');
        $("#go-to-top").removeClass('not-visible');
    } else {
        $("#navbar").removeClass('body-navbar');
        $("#go-to-top").addClass('not-visible');
    }
});

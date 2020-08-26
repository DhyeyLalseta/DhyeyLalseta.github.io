window.addEventListener('load', () => {
    console.log("hey :) i know the page looks really boring rn but i'm constantly working on making it better. if you have any suggestions feel free to email me or message me on linkedin, the direct links are within the footer. thank you for checking out my page!");
    console.log("also shout out to aradhyab.me for giving me copy inspiration for my website.");
    document.getElementById('nav-button').addEventListener('click', () => {
        console.log("my apologies this button doesn't do anything yet ;(, but it will soon. one day i will hopefully understand how frontend works. i'm better at python anyways smh");
    });

    const typed = new Typed("#typed", {
        strings: ["", "software engineer", "software e...", "software engineer"],
        cursorChar: '',
        typeSpeed: 100,
        backSpeed: 300,
    });

    const dottyBoiImg = document.querySelector(".dotty-boi-img");
    new BreathingHalftone(dottyBoiImg, {
        dotSize: 1 / 160,
        dotSizeThreshold: 0.01,
        isAdditive: true,
        initVelocity: 0.7,
        oscPeriod: 2,
        oscAmplitude: 0.2,
        channels: ['green', 'red', 'lum'],
        friction: 0.2,
        hoverDiameter: 0.4,
        hoverForce: 0.01,
        activeDiameter: 0.5,
        activeForce: 0.03
    });
});
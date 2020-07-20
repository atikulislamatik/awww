TweenMax.to(".first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})
TweenMax.from(".logo h1", 1.4, {
    delay: 3.5,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from(".ellipse-container", 1, {
    delay: 2,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
})

TweenMax.from(".yellow", 1, {
    delay: 3,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.from(".circle1", 1, {
    delay: 2.9,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle2", 1, {
    delay: 2.3,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from(".circle1 span", 1.2, {
    delay: 3.1,
    opacity: 0,
    x: 110,
    ease: Expo.easeInOut
})

TweenMax.from(".circle2 span", 1.2, {
    delay: 2.5,
    opacity: 0,
    x: -110,
    ease: Expo.easeInOut
})

TweenMax.from(".slider-content .title", 1, {
    delay: 2.6,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".slider-content p", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".watchnow", 1.5, {
    delay: 2.7,
    x: 360,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".scrolldown", 1, {
    delay: 3.7,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})
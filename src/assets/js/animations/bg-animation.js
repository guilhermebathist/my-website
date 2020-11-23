var bgHead1 = document.querySelector('.bgHead1');

document.addEventListener('mousemove', function (event) {
    var domainX = [0, document.body.clientWidth],
        domainY = [0, document.body.clientHeight],
        range = [-10, 10];

    var translate = {
        x: range[0] + (event.clientX + domainX[0]) * (range[1] + range[0]) / (domainX[1] + domainX[0]),
        y: range[0] + (event.clientY + domainY[0]) * (range[1] - range[0]) / (domainY[1] + domainY[0])
    };


    bgHead1.style.animation = 'none';
    bgHead1.style.transform = 'translate(' + translate.x + 'px, ' + translate.y + 'px)';
});

document.addEventListener('mouseleave', function (event) {
    bgHead1.style.animation = 'floating 3s linear infinite';
});



var bgHead2 = document.querySelector('.bgHead2');

document.addEventListener('mousemove', function (event) {
    var domainX = [0, document.body.clientWidth],
        domainY = [0, document.body.clientHeight],
        range = [-10, 10];

    var translate = {
        x: range[0] + (event.clientX - domainX[0]) * (range[1] - range[0]) / (domainX[1] - domainX[0]),
        y: range[0] + (event.clientY - domainY[0]) * (range[1] - range[0]) / (domainY[1] - domainY[0])
    };


    bgHead2.style.animation = 'none';
    bgHead2.style.transform = 'translate(' + translate.x + 'px, ' + translate.y + 'px)';
});

document.addEventListener('mouseleave', function (event) {
    bgHead2.style.animation = 'floating 3s linear infinite';
});

var bgHead3 = document.querySelector('.bgHead3');

document.addEventListener('mousemove', function (event) {
    var domainX = [0, document.body.clientWidth],
        domainY = [0, document.body.clientHeight],
        range = [-20, 20];

    var translate = {
        x: range[0] + (event.clientX - domainX[0]) * (range[1] - range[0]) / (domainX[1] - domainX[0]),
        y: range[0] + (event.clientY - domainY[0]) * (range[1] - range[0]) / (domainY[1] - domainY[0])
    };


    bgHead3.style.animation = 'none';
    bgHead3.style.transform = 'translate(' + translate.x + 'px, ' + translate.y + 'px)';
});

document.addEventListener('mouseleave', function (event) {
    bgHead3.style.animation = 'floating 3s linear infinite';
});
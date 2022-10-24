function whatTimeIsIt() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

    setInterval(whatTimeIsIt, 1000 );
    whatTimeIsIt();


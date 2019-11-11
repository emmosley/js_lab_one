let play = prompt("Do you want to play?", "type yes or no")

if (play === 'yes') {
    let username = prompt ("Name your character")
    let grantHP = 10
    let playerHP = 40
    let numberOfWins = 0
    let grantLoses = 0
    while(playerHP > 0 && numberOfWins < 3){ 
      randomNumber = Math.floor(Math.random() + 1); 
        grantHP -= randomNumber
        playerHP -= randomNumber
    //print user points left
    console.log(`${username} has ${playerHP} health points left.`);
    console.log(`Grant the Mighty Chicken has ${grantHP} health points left.`);
    //if grant loses game, adds one loss and one win to player starts grant over at 10
      if (grantHP <= 0) {
        grantLoses++;
        numberOfWins++;
        grantHP = 10
        console.log(`Grant has been defeated and ${username} has ${numberOfWins} wins`);
      } else if (grantLoses < 3 && playerHP === 0) {
        console.log("Grant wins the battle!")
      };

    if (grantLoses === 3 && playerHP >= 0) {
        console.log(`${username} wins the battle`)
     };
    }}
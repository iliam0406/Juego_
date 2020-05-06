var option = ['tijera', 'papel', 'piedra', 'lagarto', 'spock'];
var game = option[Math.floor(Math.random() * option.length)];
var user = prompt('INGRESE: Tijera, Papel, Piedra, Lagarto o Spock');


// var pos = option.indexOf(user);




if(game == 'tijera' && user.toLowerCase() == 'papel'){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Tijera corta Papel');
}else if(game == 'papel' && user.toLowerCase() == 'piedra' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Papel tapa Piedra');
}else if(game == 'piedra' && user.toLowerCase() == 'lagarto' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Piedra aplasta Lagarto');

}else if(game == 'lagarto' && user.toLowerCase() == 'spock' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Lagarto envenena a Spock');
}else if(game == 'spock' && user.toLowerCase() == 'tijera' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Spock rompe Tijera');
}else if(game == 'tijera' && user.toLowerCase() == 'lagarto' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Tijera decapita Lagarto');
}else if(game == 'lagarto' && user.toLowerCase() == 'papel' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Lagarto devora Papel');
}else if(game == 'papel' && user.toLowerCase() == 'spock' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Papel desautoriza a Spock');
}else if(game == 'spock' && user.toLowerCase() == 'piedra' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Spock vaporiza piedra');
}else if(game == 'piedra' && user.toLowerCase() == 'tijera' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Perdiste Piedra aplasta a Tijera');
}else if(game == 'papel' && user.toLowerCase() == 'tijera' ){ //ganaste
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);  
    console.log('Ganaste Tijera corta Papel');
}else if(game == 'piedra' && user.toLowerCase() == 'papel' ){ 
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);  
    console.log('Ganaste Papel tapa a Piedra');
}else if(game == 'lagarto' && user.toLowerCase() == 'piedra' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Piedra aplasta Lagarto');
}else if(game == 'spock' && user.toLowerCase() == 'lagarto' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Lagarto envenena a Spock');
}else if(game == 'tijera' && user.toLowerCase() == 'spock' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Spock rompe Tijera');
}else if(game == 'lagarto' && user.toLowerCase() == 'tijera' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Tijera decapita Lagarto');
}else if(game == 'papel' && user.toLowerCase() == 'lagarto' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Lagarto devora Papel');
}else if(game == 'spock' && user.toLowerCase() == 'papel' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Papel desautoriza a Spock');
}else if(game == 'piedra' && user.toLowerCase() == 'spock' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Spock vaporiza piedra');
}else if(game == 'tijera' && user.toLowerCase() == 'piedra' ){
    console.log('Usted jugó ' + user);
    console.log('y yo jugué ' + game);
    console.log('Ganaste Piedra aplasta a Tijera');
}else if(user != game){
    alert('¿¿¿  QUÉ ES ESO ???, solo permtimos Tijera, Papel, Piedra, Lagarto o Spock');
}else{
    console.log('Empatados, repetir juego')
}




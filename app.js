var friends = ['Alexandra', 'Alex', 'Carolyn', 'Adam', 'Roger']
var locations = ['Disney World', 'Disneyland','Six Flags','Knotts Berry Farm','Mountain Creek','Windham','Thunder Ridge','Big Bear','Mammoth Mountain' ,'Killington']
var weapons = ['sword', 'dagger', 'knife', 'spear', 'axe', 'spike', 'hammer', 'dart', 'javelin', 'blade', 'crossbow', 'rifle', 'pistol', 'machine gun', 'bazooka', 'bayonet', 'arrow', 'machete', 'tank', 'rocket']


for (var i = 0; i < 100; i++){
    var h3 = $('<h3> Accusation ' + i + '</h3>')
    .click(closeThis(i));
    $('body').append(h3)
}

function closeThis(numToRemember){
    return function (){
        console.log('Accusation ' + numToRemember + ': I accuse ' + friends[numToRemember % friends.length] + ', with the ' + weapons[numToRemember % weapons.length] + ' in ' + locations[numToRemember % locations.length] + ' !')
    }
}

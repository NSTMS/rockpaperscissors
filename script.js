let game = document.getElementById("random")
let right_counter = document.getElementById("right")
let left_counter = document.getElementById("left")
let wynik = document.getElementById("answer")
let draws = document.getElementById("draw")

let comp_points = 0;
let your_points = 0;
let how_many_draws = 0;


random.innerHTML ="ROZPOCZNIJ GRĘ!"
left_counter.innerHTML = comp_points;
right_counter.innerHTML = your_points;
draws.innerHTML = how_many_draws;


function play(player_choice)
{

   

    let comp_choices = ['KAMIEŃ','PAPIER','NOŻYCE']
    let comp_turn = comp_choices[Math.floor(Math.random()*3)]
    comp_turn = comp_choices[Math.floor(Math.random()*3)]
    console.log(comp_turn)

    random.innerHTML ="KOMPUTER WYBRAŁ: " + comp_turn;
  

    if(comp_turn == player_choice)
    {
        wynik.innerText = "Remis!"
        how_many_draws++;
        draws.innerHTML = how_many_draws;

    }
    else{
        if((player_choice == 'KAMIEŃ' && comp_turn == 'PAPIER' )|| (player_choice == 'PAPIER' && comp_turn == 'NOŻYCE')||(player_choice == 'NOŻYCE' && comp_turn =='KAMIEŃ'))
        {
            wynik.innerText = "Komputer zdobywa punkt!"
            comp_points++;
            left_counter.innerHTML = comp_points;

        }
        else{
            your_points++;
            right_counter.innerHTML = your_points;
            wynik.innerText = "Zdobywasz punkt!"
        }
    }

}


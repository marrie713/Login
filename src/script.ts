    let conta : number = 0;

    function teste(){
   
        let usuario : HTMLInputElement | null = 
        document.querySelector('#usuario');
        let senha : HTMLInputElement | null = 
        document.querySelector('#senha');

        if(usuario?.value == "AlunosSESI2023" && senha?.value == "devsistemas"){

            window.location.href = "index.html";
        }

  
        else if(usuario?.value != "AlunoSESI2023" && senha?.value != "devsistemas"){

            alert("usuario ou senha incorreta");
            conta++;
             
        }
        else if(conta == 5){

            window.location.href = "index1.html";
        }
    }

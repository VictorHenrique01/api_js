async function viacep(cep) {
    let api = await fetch("https://viacep.com.br/ws/"+cep+"/json/");

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta);
    }
    
}

let cep = "02840080"
viacep(cep);
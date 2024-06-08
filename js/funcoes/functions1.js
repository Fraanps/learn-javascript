// Função com tarefas

function saleStatus(){
    console.log('Approved')
}

saleStatus()

// função com parâmetro (pode ser mais de um valor)
function saleStatus2(status, total){
    console.log(`Transaction ${status} and Total amount: $ ${total}`)
}

saleStatus2('Approved', 138.31) // passando o argumento

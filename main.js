$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules:{
        nome:{
            required:true
        },
        telefone:{
            required:false,
            minlength: 15
        },
        email:{
            required:true,
            email: true
        },
        mensagem:{
            required:true
        }
    },
    messages:{
        nome: '<span class = "error">Por favor, digite seu nome</span>',
        telefone: '<span class= "error">Por favor, digite seu celular (apenas números)</span>',
        email: '<span class = "error">Por favor, digite seu e-mail</span>',
        mensagem: '<span class = "error">Por favor, deixe sua mensagem</span>'
    },
    
    submitHandler: function(form){
        alert('Obrigado pelo contato. Em breve, retornaremos!')
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids()
        if (camposIncorretos){
            alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s) ou incompleto(s)`)
        }
    }
})
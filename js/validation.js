// $(document).ready(function(){

//   $("#login").validate({
//     errorClass: "my-error-class",
//     validClass: "my-valid-class",
//     rules: {
//       lcnome: {
//         required: true,
//       },
//       lcsenha: {
//         required: true
//       }
//     },
//     messages: {
//       lcnome: {
//         required: "Campo obrigatorio!"
//       },
//       lcsenha: {
//         required: "Campo obrigatorio!"
//       }
//     },
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
//   $("#btnLogin").click(function() {
//     $("#login").submit();
//   });
// });



$(document).ready(function() {
    		
  $("#frmCadastro").validate({
    errorClass: "my-error-class",
    validClass: "my-valid-class",
    rules: {
      cnome: {
      required: true,
      minlength: 3,
      },
    cemail:{
      required: true
      },
      ccpf: {
      required: true,
      minlength: [11]
      },
      cCep: {
      required: true,
      minlength: [8]
      },
      cpass: {
        required: true,
        rangelength: [4,10]
      },
      cpassc: {
        required: true,
        equalTo: "#cpass"
      }
    },
    messages: {
      cnome: {
      required: "Informe seu nome.",
      minlength: "Mínimo de 3 caracteres"
      },
      cemail: {
      required: "Informe seu Email."
      },
      ccpf: {
      required: "Informe seu CPF.",
      minlength: "Favor informar os 11 digitos!"
      },
      cCep: {
      required: "Informe seu CEP.",
      minlength: "Favor informar os 8 digitos!"
      },
      cpass: {
        required: "Digite a senha",
        rangelength: "A senha deve contar entre 4 e 10 caracteres"
      },
      cpassc: {
        required: "Repita a senha",
        equalTo: "Senha diferente"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  $("#btnCadastro").click(function() {
    $("#frmCadastro").submit();
  });
});
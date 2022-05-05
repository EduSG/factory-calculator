function criaCalduadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotao();
            this.cliqueEnter();
        },

        cliqueBotao(){
             document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) this.numeroNoDisplay(el.value);
                if(el.classList.contains('btn-clear')) this.limpaTudo();
                if(el.classList.contains('btn-del')) this.limpaUmNumero();
                if(el.classList.contains('btn-eql')) this.fazConta();
             });
        },

        cliqueEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) this.fazConta();
            });
        },

        numeroNoDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
            //ta bugado :/
        },

        limpaTudo() {
            this.display.value = '';
        },

        limpaUmNumero() {
            this.display.value = this.display.value.slice(0, -1);
        },

        fazConta(){
            try {
                const conta = eval(this.display.value);
          
                if(!conta) {
                  alert('Conta inválida');
                  return;
                }
          
                this.display.value = conta;
              } catch(e) {
                alert('Conta inválida');
                return;
              }
        }
        
    };
}

const calculadora = criaCalduadora();
calculadora.inicia();

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
            this.document.addEventListener('keypress', e => {
                if(e.keyCode === 13) this.fazConta();
            });
        },

        numeroNoDisplay(valor) {
            this.display.value += valor;
            tihs.display.focus();
            //ta bugado :/
        },

        limpaTudo() {
            this.display.value = '';
        },

        limpaUmNumero() {
            this.display.value = this.display.value.slice(0, -1);
        },

        fazConta(){
            try{
                this.display.value = eval(this.display.value);
            }catch(e){
                alert('tente uma operacao valida')
            }
        }
        
    };
}

const calculadora = criaCalduadora();
calculadora.inicia();

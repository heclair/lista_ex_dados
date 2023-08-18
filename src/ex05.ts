//P.1.5. Escreva um programa, em TypeScript, que solicite que o usuário digite duas palavras e diga qual delas aparece antes da outra no dicionário. O programa não deve solicitar nenhuma 

class Dicionario {
    c: string;
    d: string;
    
    constructor(c: string, d: string) {
      this.c = c;
      this.d = d;
    }

    print(){
        if (this.c<this.d){
            console.log(`Palavra ${this.c} é anterior a ${this.d}`);
        }
        else{
            console.log(`Palavra ${this.d} é anterior a ${this.c}`);
        }
    }
    
}

const teste3 = new Dicionario("amor","arroz");
teste3.print();
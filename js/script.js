function datos(nom,em,m,i){
    this.nom=nom;
    this.em=em;
    this.m=m;
    this.i=i;
}
let clientes = [];

function credito() {
    let nombre=document.getElementById("txtNombre").value;
    let email=document.getElementById("txtEmail").value;
    let capital=document.getElementById("txtCapital").value;
    let tiempo=document.getElementById("txtTiempo").value;
    //alert(nombre+" "+email+" "+capital+" "+tiempo);

    //variable de unidad de tiempo de un periodo
    let n=12; //mensual
    //variable de dinero 
    let CI=0; //interés compuesto
    let monto=0;
    /*
    formula interes compuesto 
    CI=C*(1+r/n)^n*t -->monto
    i=CI-C --> interes 
    **********************
    C--> Capital
    r--> tasa de interes
    n=12 --> mensual (intervalo de tiempo)
    t-->unidad de tiempo
    */

    if(nombre=="" || email=="" || capital=="" || tiempo==""){// si los campos estan vacios
        alert("Los campos no pueden quedar vacios");
    }else{
        if(tiempo<5){
            alert("El tiempo de interes es 5 años o más");
        } else if(tiempo==5){ //si es a 5 años es el 10% de interres mensual
            monto=(capital*Math.pow((1+(0.1/n)), (n*tiempo))).toFixed(2);
            CI=(monto-capital).toFixed(2);
            if(monto<=25000){
                alert("Crédito aceptado");
                let info=new datos(nombre,email,monto,CI);
                clientes.push(info);
                mostrarInformacion();
            }else{
                alert("Crédito no es aceptado");
            }
        }else{//si es a más de 5años es el 22% de interres mensual
            monto=(capital*Math.pow((1+(0.22/n)), (n*tiempo))).toFixed(2);
            CI=(monto-capital).toFixed(2);
            if(monto<=25000){
                alert("Crédito aceptado");
                let info=new datos(nombre,email,CI,monto);
                clientes.push(info);
                mostrarInformacion();
            }else{
                alert("Crédito no es aceptado");
            }
        }
    }
    
}
function mostrarInformacion(){
    let lista='';
    for(let i=0; i<clientes.length; i++){
        lista+= 'Cliente: ' + clientes[i].nom +
          ' email: ' + clientes[i].em +'\n'+ 
          ' Monto: $' + clientes[i].m +'\n'+
          ' interes: $' + clientes[i].i + '\n';
      }
      alert(lista);
}
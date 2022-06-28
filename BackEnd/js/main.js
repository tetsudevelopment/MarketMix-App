var app = new Vue({
  el: "#app",
  data() {
    return {
      dataLogin: [
        {
          name: "Brayan",
          id: 1, //1 Administrador
          pass: 1234,
        },
        {
          name: "Oscar",
          id: 2, //1 Secretario
          pass: 1234,
        },
        {
          name: "Jhon",
          id: 3, //1 Vendedor
          pass: 1234,
        },
        {
          name: "Omar",
          id: 4, //1 ensamblador
          pass: 1234,
        },
      ],
      dataAdmin: [
        {
          idAdmin: 1,
          name: "Fernando Herrera",
          nameCharge: "Secretario(a)",
          baseSalary: 1000000,
        },
        {
          idAdmin: 2,
          name: "Jhon Mircha",
          nameCharge: "Vendedor(a)",
          baseSalary: 2000000,
        },
        {
          idAdmin: 3,
          name: "Yokoi Kenyi",
          nameCharge: "Ensamblador(a)",
          baseSalary: 3000000,
          maxShoes: 5,
          maxSneakers: 2,
        },
      ],
      nameUser: "",
      viewTable: 1,
      dataInvoce: [
        {
          idAdmin: 1,
          nameCharge: "Secretario(a)",
          name: "Fernando Herrera",
          baseSalary: 1000000,
          extraHours: 0,
          priceExtra: 0,
          total: 0,
        },
        {
          idAdmin: 2,
          nameCharge: "Vendedor(a)",
          name: "Jhon Mircha",
          baseSalary: 2000000,
          saleShoes: 0,
          saleSneakers: 0,
          commission: 0,
          total: 0,
          sub: 117172,
        },
        {
          idAdmin: 3,
          nameCharge: "Ensamblador(a)",
          name: "Yokoi Kenyi",
          baseSalary: 3000000,
          extraHours: 0,
          priceExtra: 0,
          joinShoes: 0,
          sub: 117172,
          joinSneakers: 0,
          son: 0,
          priceSon: 0,
          total: 0,
        },
      ], //Tabla del admin
      dataRegistro: [],
      baseSalary: 0, //salario base
      maxShoes: 0, //ensamblador-admin
      maxSneakers: 0, //ensamblador-admin
      saleShoes: 0, //vendedor
      commission: 0,
      saleSneakers: 0, //vendedor
      joinShoes: 0, //ensamblador
      joinSneakers: 0, //ensamblador
      son: 0, //ensamblador
      priceExtra: 0, //valor horas extras
      extraHours: 0, //horas extras
      totalExtra: 0, //total extra
      totalSettlement: 0, // total liquidacion
      watchMain: 1, //vista principal
      watchAdmin: 0, // vista del Admin
      watchSons: 0, // Vista a pregunta tiene hijos?
      pass: "1234", //contraseña
      id: 0, //usuarios
      idAdmin: 0, // usuarios de admin
      watchTable: 0,
      watchTableInvoce: 0,
    };
  },

  methods: {
    salir: function () {
      this.baseSalary = 0;
      this.watchMain = 0;
      this.watchAdmin = 0;
      (this.watchSons = 0), (this.id = 0);
      this.pass = "1234";
      this.extraHours = 0;
      this.saleShoes = 0;
      this.saleSneakers = 0; //vendedor
      this.joinShoes = 0; //ensamblador
      this.joinSneakers = 0; //ensamblador
      this.son = 0; //ensamblador
      this.watchTable = 0;
    },
    login: function () {
      const dataLogin = this.dataLogin.find((element) => {
        const id = this.id;
        const pass = this.pass;
        if (id == 1) {
          if (id == element.id && pass == element.pass)
            return (this.watchMain = 1);
        } else if (id == 2) {
          if (id == element.id && pass == element.pass)
            return (this.watchMain = 2);
        } else if (id == 3) {
          if (id == element.id && pass == element.pass)
            return (this.watchMain = 3);
        } else if (id == 4) {
          if (id == element.id && pass == element.pass)
            return (this.watchMain = 4);
        } else {
          return alert("Los datos no han sido agregados correctamente");
        }
      });
      // console.log(this.watch);
      console.log(dataLogin);
    },
    //operaciones
    //botones
    admin: function () {
      this.dataAdmin.forEach((element) => {
        if (this.watchAdmin == 1 && element.idAdmin === 1) {
          this.baseSalary = element.baseSalary;
        } else if (this.watchAdmin == 2 && element.idAdmin === 2) {
          this.baseSalary = element.baseSalary;
        } else if (this.watchAdmin == 3 && element.idAdmin === 3) {
          this.baseSalary = element.baseSalary;
          this.maxShoes = element.maxShoes;
          this.maxSneakers = element.maxSneakers;
        }
      });
      if (this.watchAdmin == 1) return (this.watchAdmin = 1);
      if (this.watchAdmin == 2) return (this.watchAdmin = 2);
      if (this.watchAdmin == 3) return (this.watchAdmin = 3);
    },
    sons: function () {
      const watchSons = parseInt(this.watchSons);
      if (watchSons === 1) return (this.watchSons = 1);
      if (watchSons === 2) return (this.watchSons = 2);
      if (watchSons === 3) return (this.watchSons = 3);
    },
    save: function () {
      //save admin
      if (this.watchMain == 1) {
        const idAdmin = this.watchAdmin;
        let indexInvoice = this.dataInvoce.findIndex(
          (element) => element.idAdmin == idAdmin
        );
        let elementIndex = this.dataAdmin.findIndex(
          (element) => element.idAdmin == idAdmin
        );
        if (idAdmin == 1) {
          if (indexInvoice == -1) {
            this.dataAdmin[elementIndex].baseSalary = parseInt(this.baseSalary);
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          } else {
            this.dataInvoce[indexInvoice].baseSalary = parseInt(
              this.baseSalary
            );
            this.dataAdmin[elementIndex].baseSalary = parseInt(this.baseSalary);
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          }
        } else if (idAdmin == 2) {
          if (indexInvoice == -1) {
            this.dataAdmin[elementIndex].baseSalary = parseInt(this.baseSalary);
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          } else {
            this.dataAdmin[elementIndex].baseSalary = parseInt(this.baseSalary);
            this.dataInvoce[indexInvoice].baseSalary = parseInt(
              this.baseSalary
            );
            this.dataInvoce[indexInvoice].commission= parseInt(this.commission)
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          }
        } else if (idAdmin == 3) {
          if (indexInvoice == -1) {
            this.dataAdmin[elementIndex].baseSalary = this.baseSalary;
            this.dataAdmin[elementIndex].maxShoes = this.maxShoes;
            this.dataAdmin[elementIndex].maxSneakers = this.maxSneakers;
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          } else {
            this.dataAdmin[elementIndex].baseSalary = this.baseSalary;
            this.dataAdmin[elementIndex].maxShoes = this.maxShoes;
            this.dataAdmin[elementIndex].maxSneakers = this.maxSneakers;
            this.dataInvoce[indexInvoice].baseSalary = this.baseSalary;
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          }
        } else {
          alert("Seleccione el cargo que desea modificar");
        }
        //save secretaria
      } //save Secretaria
      else if (this.watchMain == 2) {
        let indexAdmin = this.dataAdmin.findIndex((obj) => obj.idAdmin == 1);
        let indexInvoice = this.dataInvoce.findIndex((obj) => obj.idAdmin == 1);
        console.log(indexInvoice);
        if (indexInvoice == -1) {
          console.log("Entro al if");
          this.dataInvoce.push({
            idAdmin: this.dataAdmin[indexAdmin].idAdmin,
            name: this.dataAdmin[indexAdmin].name,
            nameCharge: this.dataAdmin[indexAdmin].nameCharge,
            baseSalary: this.dataAdmin[indexAdmin].baseSalary,
            extraHours: this.extraHours,
            priceExtra: 0,
            total: 0,
          });
          alert("Datos Guardados Correctamente");
        } else {
          console.log("entro al else");
          this.dataInvoce[indexInvoice].extraHours = this.extraHours;
          alert("Datos Guardados Correctamente");
        }
      } //save Vendedor
      else if (this.watchMain == 3) {
        let indexAdmin = this.dataAdmin.findIndex((obj) => obj.idAdmin == 2);
        let indexInvoice = this.dataInvoce.findIndex((obj) => obj.idAdmin == 2);
        if (indexInvoice == -1) {
          this.dataInvoce.push({
            idAdmin: this.dataAdmin[indexAdmin].idAdmin,
            name: this.dataAdmin[indexAdmin].name,
            nameCharge: this.dataAdmin[indexAdmin].nameCharge,
            baseSalary: this.dataAdmin[indexAdmin].baseSalary,
            saleShoes: parseInt(this.saleShoes),
            saleSneakers: parseInt(this.saleSneakers),
            commission: 0,
            total: 0,
            sub: 117172,
          });
          alert("Datos Guardados Correctamente");
        } else {
          this.dataInvoce[indexInvoice].saleShoes = this.saleShoes;
          this.dataInvoce[indexInvoice].saleSneakers = this.saleSneakers;
          alert("Datos Guardados Correctamente");
        }
      } //save Ensamblador
      else if (this.watchMain == 4) {
        let indexAdmin = this.dataAdmin.findIndex((obj) => obj.idAdmin == 3);
        let indexInvoice = this.dataInvoce.findIndex((obj) => obj.idAdmin == 3);
        if (indexInvoice == -1) {
          let dataAdmin = this.dataAdmin[indexAdmin];
          if (
            this.joinShoes > dataAdmin.maxShoes ||
            this.joinSneakers > dataAdmin.maxSneakers
          ) {
            alert(
              `Ensamble maximo de zapatos ${dataAdmin.maxShoes} y ensamble maximo de zapatillas ${dataAdmin.maxSneakers} Ingrese los valores nuevamente`
            );
          } else {
            this.dataInvoce.push({
              idAdmin: this.dataAdmin[indexAdmin].idAdmin,
              name: this.dataAdmin[indexAdmin].name,
              nameCharge: this.dataAdmin[indexAdmin].nameCharge,
              baseSalary: this.dataAdmin[indexAdmin].baseSalary,
              extraHours: parseInt(this.extraHours),
              priceExtra: 0,
              joinShoes: parseInt(this.joinShoes),
              sub: 117172,
              joinSneakers: parseInt(this.joinSneakers),
              son: parseInt(this.son),
              priceSon: 0,
              total: 0,
            });
            alert("Datos Guardados Correctamente");
          }
        } else {
          let dataAdmin = this.dataAdmin[indexAdmin];
          if (
            this.joinShoes > dataAdmin.maxShoes ||
            this.joinSneakers > dataAdmin.maxSneakers
          ) {
            alert(
              `Ensamble maximo de zapatos ${dataAdmin.maxShoes} y ensamble maximo de zapatillas ${dataAdmin.maxSneakers} Ingrese los valores nuevamente`
            );
          } else {
            this.dataInvoce[indexInvoice].extraHours = parseInt(
              this.extraHours
            );
            this.dataInvoce[indexInvoice].joinShoes = parseInt(this.joinShoes);
            this.dataInvoce[indexInvoice].joinSneakers = parseInt(
              this.joinSneakers
            );
            this.dataInvoce[indexInvoice].son = parseInt(this.son);
            alert('Datos Guardados Correctamente');
          }
        }
      } else {
        alert("Error");
      }
    },
    detalle(id) {
      if (id == 1) {
        this.watchTableInvoce = 1;
      } else if (id == 2) {
        this.watchTableInvoce = 2;
      } else {
        this.watchTableInvoce = 3;
      }
    },
    x() {
      this.watchTable = 0;
    },
    registro() {
      this.dataInvoce.forEach((element) => {
        if (element.idAdmin == 1) {
          let valorHora = parseInt(element.baseSalary) / 168;
          let precioExtra = Math.round(valorHora) * 1.8;
          precioExtra = Math.round(precioExtra);
          element.priceExtra = precioExtra;
          element.total= element.baseSalary +(precioExtra*element.extraHours)
        } else if (element.idAdmin == 2) {
          let commi = parseInt(element.commission);
          let salarioCommi= parseInt(element.baseSalary)
          let ventas= parseInt(element.saleSneakers)+ parseInt(element.saleShoes)
          if (ventas > 5000000) {
            commi = commi + 10
            commi= commi/100
            salarioCommi = salarioCommi * parseInt(commi);
          } else if (ventas > 10000000) {
            commi = parseInt(commi) + 20;
            commi = parseInt(commi) / 100;
            salarioCommi = salarioCommi * parseInt(commi);
          } else {
            commi = commi;
            salarioCommi = salarioCommi * (parseInt(commi)/100);
          }
          element.total = Math.round(parseInt(element.baseSalary) + parseInt(salarioCommi) + parseInt(element.sub));
        } else if (element.idAdmin == 3) {
          let son = parseInt(element.son);
          let extraHours = parseInt(element.extraHours);
          let valorHora= parseInt(element.baseSalary)/168
          let priceExtra = (valorHora * (220 / 100)) + valorHora;
          let valorExtraTotal = extraHours * priceExtra;
          let priceShoes = 300;
          let priceSneakers = 200;
          let joinShoes = parseInt(element.joinShoes);
          let joinSneakers = parseInt(element.joinSneakers);
          let sub = parseInt(element.sub)
          // Hijos
          if (son == 1) {
              console.log('if de hijos');
              element.priceSon = 80000;
          } else if (son > 1) {
            console.log('else ig de hijos');
              element.priceSon = 60000;
          } else {
            console.log('else de hijos');
              element.priceSon = 0;
            }
          // zapatos
          if (joinShoes > 1000) {
            let commiShoes = priceShoes * (10 / 100)
            priceShoes= commiShoes+priceShoes
          } else if (joinShoes > 2000) {
            let commiShoes = priceShoes * (20 / 100);
            priceShoes = commiShoes + priceShoes;
          } else {
            priceShoes = priceShoes;
          }

          // Zapatillas
          if (joinSneakers>1700) {
            let commiSneakers = priceSneakers * (15 / 100)
            priceSneakers = priceSneakers + commiSneakers;
          } else if (joinSneakers > 3000) {
            let commiSneakers = priceSneakers * (30 / 100);
            priceSneakers = priceSneakers + commiSneakers;
          } else {
            priceSneakers = priceSneakers;
          }
          let priceSon = parseInt(element.priceSon);
          element.total= Math.round(parseInt(element.baseSalary)+(priceShoes*joinShoes)+(priceSneakers*joinSneakers)+valorExtraTotal+sub+(son*priceSon))
        } else {
          console.log(error);
        }
      });
      this.watchTable = 1;
    }
  },
}); 

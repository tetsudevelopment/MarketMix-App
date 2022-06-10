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
          nameCharge: "Secretaria",
          baseSalary: 1000000,
        },
        {
          idAdmin: 2,
          nameCharge: "Vendedor",
          baseSalary: 2000000,
          commission: 10,
        },
        {
          idAdmin: 3,
          nameCharge: "Ensamblador",
          baseSalary: 3000000,
          maxShoes: 5,
          maxSneakers: 2,
        },
      ],
      dataInvoce:[],
      baseSalary: 0, //salario base
      commission: 0, //vendedor-admin
      maxShoes: 0, //ensamblador-admin
      maxSneakers: 0, //ensamblador-admin
      saleShoes: 0, //vendedor
      saleSneakers: 0, //vendedor
      joinShoes: 0, //ensamblador
      joinSneakers: 0, //ensamblador
      son: 0, //ensamblador
      priceExtra:0,//valor horas extras
      extraHours: 0, //horas extras
      totalExtra: 0,//total extra
      totalSettlement:0,// total liquidacion
      watchMain: 0, //vista principal
      watchAdmin: 0, // vista del Admin
      watchSons: 0, // Vista a pregunta tiene hijos?
      pass: "1234", //contraseña
      id: 0, //usuarios
      idAdmin: 0, // usuarios de admin
    };
  },

  methods: {
    getName: function (data) {
      this.dataLoginata.forEach(element => {
        return element.name
      });
    },
    salir: function () {
      this.baseSalary = 0;
      this.watchMain = 0;
      this.watchAdmin = 0;
      this.watchSons= 0,
      this.id = 0;
      this.pass = "1234";
      this.extraHours = 0;
      this.saleShoes = 0;
      this.saleSneakers = 0; //vendedor
      this.joinShoes = 0; //ensamblador
      this.joinSneakers= 0; //ensamblador
      this.son= 0; //ensamblador
    },
    login: function () {
      const dataLogin = this.dataLogin.forEach((element) => {
        const id = parseInt(this.id);
        const pass = parseInt(this.pass);
        if (id === 1) {
          if (id === element.id && pass === element.pass)
            return (this.watchMain = 1);
        } else if (id === 2) {
          if (id === element.id && pass === element.pass)
            return this.watchMain = 2;
        } else if (id === 3) {
          if (id === element.id && pass === element.pass)
            return (this.watchMain = 3);
        } else if (id === 4) {
          if (id === element.id && pass === element.pass)
            return (this.watchMain = 4);
        } else {
          console.log("error");
        }
      });
      // console.log(this.watch);
      console.log(dataLogin);
    },
    //operaciones
    //botones
    admin: function () {
       const watchAdmin = parseInt(this.watchAdmin);
       const dataAdmin = this.dataAdmin.forEach((element) => {
         if (watchAdmin ===1 && element.idAdmin===1) { 
           this.baseSalary = element.baseSalary
         }
         else if (watchAdmin === 2 && element.idAdmin === 2) {
           this.baseSalary = element.baseSalary;
           this.commission= element.commission
         } else if (watchAdmin === 3 && element.idAdmin === 3) {
           this.baseSalary = element.baseSalary;
           this.maxShoes = element.maxShoes;
           this.maxSneakers = element.maxSneakers;
         }
       });
      if (watchAdmin === 1) return (this.watchAdmin = 1);
      if (watchAdmin === 2) return (this.watchAdmin = 2);
      if (watchAdmin === 3) return (this.watchAdmin = 3);
    },
    sons: function () {
      const watchSons = parseInt(this.watchSons);
      if (watchSons === 1) return (this.watchSons = 1);
      if (watchSons === 2) return (this.watchSons = 2);
      if (watchSons === 3) return (this.watchSons = 3);
    },
    save: function () {
      const id = parseInt(this.id)
      //save admin
      if (id === 1) {
        const idAdmin = parseInt(this.watchAdmin)
          if (idAdmin === 1) {
            let elementIndex = this.dataAdmin.findIndex((obj) => obj.idAdmin === 1);
            this.dataAdmin[elementIndex].baseSalary = this.baseSalary;
            console.log(this.dataAdmin);
            alert('Datos guardador correctamente');
            this.watchAdmin = 0;
          } else if (idAdmin === 2) {
            let elementIndex = this.dataAdmin.findIndex((obj) => obj.idAdmin === 2);
            this.dataAdmin[elementIndex].baseSalary = this.baseSalary;
            this.dataAdmin[elementIndex].commission = this.commission;
            console.log(this.dataAdmin);
            console.log("vendedor");
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          } else if (idAdmin === 3) {
            let elementIndex = this.dataAdmin.findIndex((obj) => obj.idAdmin === 3);
            this.dataAdmin[elementIndex].baseSalary = this.baseSalary;
            this.dataAdmin[elementIndex].maxShoes = this.maxShoes;
            this.dataAdmin[elementIndex].maxSneakers = this.maxSneakers;
            console.log(this.dataAdmin);
            console.log("Ensamblador");
            alert("Datos guardador correctamente");
            this.watchAdmin = 0;
          } else {
            alert("Seleccione el cargo que desea modificar");
          }
        
        //save secretaria
      } else if (id === 2) {
        const dataAdmin = this.dataAdmin.forEach((element) => {
          if (element.idAdmin === 1) {
            this.baseSalary = parseInt(element.baseSalary);
            this.priceExtra = this.baseSalary / 240;
            this.totalExtra = this.priceExtra * this.extraHours;
            this.totalExtra = Math.round(this.totalExtra)
            this.totalSettlement= this.totalExtra+ this.baseSalary
            console.log('Horas extras ' + this.extraHours + ' Salario base ' + this.baseSalary + ' Precio hora ' + this.priceExtra + ' Precio multiplicado ' + this.totalExtra);
            this.dataLogin.forEach((element) => {
              if (id === element.id) {
                let nameUser = element.name;
                // console.log('Nombre ' + nameUser + ' Id: ' + idUser);
                this.dataInvoce.push({
                  name: nameUser,
                  nameCharge: "Secretario(a)",
                  extraHours: this.extraHours,
                  baseSalary: this.baseSalary,
                  priceExtra: this.priceExtra,
                  totalSettlement: this.totalSettlement,
                });
                console.log(this.dataInvoce);
              }
              
            });
          } else {
            console.log("Error");
          }
        });
        //save vendedor
      } else if (id === 3) {
        alert("Vendedor");
        //save ensamblador
      } else if (id === 4) {
        alert("Ensamblador");
      } else {
        alert('Error')
      }

    },
  },
}); 

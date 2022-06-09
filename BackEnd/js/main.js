var app = new Vue({
  el: "#app",
  data() {
    return {
      data: [
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
          name: "Secretaria",
          baseSalary: 1000000,
        },
        {
          idAdmin: 2,
          name: "Vendedor",
          baseSalary: 2000000,
          commission: 10,
        },
        {
          idAdmin: 3,
          name: "Ensamblador",
          baseSalary: 3000000,
          maxShoes: 0,
          maxSneakers: 0,
        },
      ],
      baseSalary: 0, //salario base
      commission: 0, //vendedor-admin
      maxShoes: 0, //ensamblador-admin
      maxSneakers: 0, //ensamblador-admin
      saleShoes: 0, //vendedor
      saleSneakers: 0, //vendedor
      joinShoes: 0, //ensamblador
      joinSneakers: 0, //ensamblador
      son: 0, //ensamblador
      extraHours: 0, //horas extras
      watchMain: 0, //vista principal
      watchAdmin: 0, // vista del Admin
      watchSons: 0, // Vista a pregunta tiene hijos?
      pass: "1234", //contraseña
      id: 0, //usuarios
      idAdmin: 0, // usuarios de admin
    };
  },

  methods: {
    salir: function () {
      this.watchMain = 0;
      this.watchAdmin = 0;
      this.watchSons= 0,
      this.id = 0;
      this.pass = "1234";
    },
    login: function () {
      const data = this.data.forEach((element) => {
        const id = parseInt(this.id);
        const pass = parseInt(this.pass);
        if (id === 1) {
          if (id === element.id && pass === element.pass)
            return (this.watchMain = 1);
        } else if (id === 2) {
          if (id === element.id && pass === element.pass)
            return (this.watchMain = 2);
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
      console.log(data);
    },
    //operaciones
    

    //botones
    admin: function () {
      const watchAdmin = parseInt(this.watchAdmin);
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
      if (id === 1) {
        const idAdmin = parseInt(this.watchAdmin)
        const dataAdmin = this.dataAdmin.forEach((element) => {
          if (idAdmin === element.idAdmin) {
            const baseSalary = element.baseSalary;
            console.log(baseSalary);
            return this.baseSalary= baseSalary
          } 
        })
        
        if (idAdmin === 1) {
          alert("Secretaria");
        } else if (idAdmin === 2) {
          alert("Vendedor");
        } else if (idAdmin === 3) {
          alert("Ensamblador");
        } else {
          alert('Seleccione el cargo que desea modificar')
        }
      } else if (id === 2) {
        alert("Secretaria");
      } else if (id === 3) {
        alert("Vendedor");
      } else if (id === 4) {
        alert("Ensamblador");
      } else {
        alert('Error')
      }

    },
  },
}); 

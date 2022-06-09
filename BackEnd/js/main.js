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
      baseSalary:0,
      extraHours: 0, //horas extras
      watchMain: 0, //vista principal
      watchAdmin: 0,// vista del Admin
      watchSons: 0,// Vista a pregunta tiene hijos?
      pass: "1234", //contraseña
      id: 0,
      idAdmin: 0,
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
      this.watchAdmin = 0;
    },
  },
}); 

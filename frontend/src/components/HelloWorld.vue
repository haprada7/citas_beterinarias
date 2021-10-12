<template>
  <div class="hello">
    <v-text-field label="Nombre" v-model="nombre"></v-text-field>
    <v-text-field label="Propietario" v-model="propietario"></v-text-field>
    <v-text-field label="Telefono" v-model="telefono"></v-text-field>
    <v-text-field label="Fecha" v-model="fecha"></v-text-field>
    <v-text-field label="Hora" v-model="hora"></v-text-field>
    <v-text-field label="Sintoma" v-model="sintoma"></v-text-field>
    <v-btn elevation="2">Enviar</v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data: {
    nombre:"",
    propietario:"",
    telefono:"",
    fecha:"",
    hora:"",
    sintoma:"",
  },
  methods: {
    postear(){
        var payload = { nombre: this.nombre, propietario: this.propietario, telefono: this.telefono, fecha:this.fecha, hora:this.hora, sintoma:this.sintoma };
      axios({
        url: "/postear",
        method: "POST",
        data: payload,
      })
        .then((resp) => {
          console.log(resp.data);
          this.citas = resp.data.citas;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

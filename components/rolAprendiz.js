export default {
    name: 'apren',
    template: /*html*/`
    <div v-if="config.rolselec == 'aprendiz'" >
        <button v-if="config.selectores.estudiantes == false" @click="config.selectores.estudiantes = true "> registrarse</button>
        
        <form v-else>
        <h1> registro de estudiantes</h1>
                    <input type="text" v-model="config.registros.estudiantes.nombre" placeholder="nombre">
                    <input type="number"  v-model="config.registros.estudiantes.telefono" placeholder="telefono">
                    <input type="text" v-model="config.registros.estudiantes.emali" placeholder="@-email">
                    <input type="text" v-model="config.registros.estudiantes.direccion" placeholder="direccion">
                    <input type="number" v-model="config.registros.estudiantes.nivel" placeholder="estracto">
                    <input type="text" v-model="config.registros.estudiantes.transporte" placeholder="medio de transporte">
                    <button @click="addestud"> agregar</button>
        </form>
    </div>
    `,
    props: {
        config: Object,
    },
        
}
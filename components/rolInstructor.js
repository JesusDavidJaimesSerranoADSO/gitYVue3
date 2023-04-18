export default{
    name:'inst',
    template: /*html*/`
    <div v-if="config.rolselec == 'instructor'" >
        <button v-if="config.selectores.Campus == false" @click="config.selectores.Campus = true "> Campus</button>
        <div v-show="config.selectores.Campus">
        <h1>campus</h1>
            <form>
                <input type="text" v-model="config.registros.Campus.nombre" placeholder="nombre">
                <input type="text" v-model="config.registros.Campus.sede" placeholder="sede">
                <input type="number" v-model="config.registros.Campus.telefono" placeholder="telefono">
                <input type="text" v-model="config.registros.Campus.direccion" placeholder="direccion">
                <button> agregar</button>
            </form>
        </div>

        <button v-if="config.selectores.profesores == false" @click="config.selectores.profesores = true "> profesores</button>
        <div v-show="config.selectores.profesores">
                <h1>profesores</h1>
                <form>
                    <input type="text" v-model="config.registros.profesores.nombre" placeholder="nombre">
                    <input type="number" v-model="config.registros.profesores.telefono" placeholder="telefono">
                    <select v-model="config.registros.profesores.tec" placeholder="tecnologia">
                        <option disabled value="">Please select one</option>
                        <option v-for="(items, index) in config.propiedades.tecno" > {{items.nombre}} </option>
                    </select>
                    <button > agregar</button>
                </form>
                
        </div>

        <button v-if="config.selectores.estudiantes == false" @click="config.selectores.estudiantes = true ">estudiantes</button>
        <div v-show="config.selectores.estudiantes">
                <h1>estudiantes</h1>
                <form>
                    <input type="text" v-model="config.registros.estudiantes.nombre" placeholder="nombre">
                    <input type="number" v-model="config.registros.estudiantes.telefono" placeholder="telefono">
                    <input type="text" v-model="config.registros.estudiantes.emali" placeholder="@-email">
                    <input type="text" v-model="config.registros.estudiantes.direccion" placeholder="direccion">
                    <input type="number" v-model="config.registros.estudiantes.nivel" placeholder="estracto">
                    <input type="text" v-model="config.registros.estudiantes.transporte" placeholder="medio de transporte">
                    <button> agregar</button>
                </form>
            </div>

            <button v-if="config.selectores.niveles == false" @click="config.selectores.niveles = true ">niveles</button>
            <div v-show="config.selectores.niveles">
                <h1>requisitos </h1>
                <form>
                    <input type="text" v-model="config.registros.niveles.preReq" placeholder="pre requisitos">
                    <select v-model="config.registros.niveles.tecno" placeholder="tecnologia">
                        <option disabled value="">Please select one</option>
                        <option v-for="(items, index) in config.propiedades.tecno">{{items.nombre}}</option>
                    </select>
                    <label>obligasa</label>
                    <input type="radio" value="obligasa" name="btnradio" v-model="config.registros.niveles.eleccion">
                    <label>libre</label>
                    <input type="radio" value="libre" name="btnradio" v-model="config.registros.niveles.eleccion">
                    <button> agregar</button>
                </form>
            </div>

            <button v-if="config.selectores.tecnologías == false" @click="config.selectores.tecnologías = true ">tecnologías</button>
            <div v-show="config.selectores.tecnologías">
                <h1>tecnologías</h1>
                <form>
                    <input type="text" v-model="config.registros.tecnologías.nombre" placeholder="nombre de la tecnologia">
                    <input type="number" v-model="config.registros.tecnologías.nCred" placeholder="numero de creditos">
                    <h3>-- nodalidad -</h3>
                    <label>presencial</label>
                    <input type="radio" value="presencial" name="btnradio" v-model="config.registros.tecnologías.modalidad">
                    <label>virtual</label>
                    <input type="radio" value="virtual" name="btnradio" v-model="config.registros.tecnologías.modalidad">
                    <h3 style="display: inline-block;">-- pruebas de seleccion -</h3>
                    <label>si</label>
                    <input type="radio" value="si" name="btnp" v-model="config.registros.tecnologías.prueba">
                    <label>no</label>
                    <input type="radio" value="no" name="btnp" v-model="config.registros.tecnologías.prueba">
                    <button></button>
                </form>
            </div>

            <button v-if="config.selectores.teams == false" @click="config.selectores.teams = true ">teams</button>
            <div v-show="config.selectores.teams">
                <h1>teams</h1>
                <form>
                    <input type="text" v-model="config.registros.teams.nteams" placeholder="nombre">
                    <input type="date" v-model="config.registros.teams.fecha">
                    <input type="time" v-model="config.registros.teams.hora">
                    <input type="number" v-model="config.registros.teams.salon" placeholder="numero de salon">
                    <button> agregar</button>
                </form>
            </div>
    </div>
    `,
    props:{
        config: Object
    }
}
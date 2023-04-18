export default {
    data() {
        return {
            config: {
                roles: ["aprendiz", "instructor"],
                rolselec: "",
                selectores: { Campus: false, profesores: false, estudiantes: false, niveles: false, tecnologías: false, teams: false },
                registros: {
                    Campus: { nombre: "", sede: "", telefono: "", direccion: "" },
                    profesores: { nombre: "", telefono: "", tec: "" },
                    estudiantes: { nombre: "", telefono: "", emali: "", nivel: "", direccion: "", transporte: "" },
                    niveles: { preReq: "", tecno: "", eleccion: "" },
                    tecnologías: { nombre: "", modalidad: "", prueba: "", nCred: "" },
                    teams: { nteams: "", hora: "", fecha: "", salon: "" }
                },
                propiedades: {
                    campus: [
                        { nombre: "carpentecos", sede: 'Bucaramanga', telefono: 111222333, direccion: 'p35 pj ss' },
                        { nombre: "arenales", sede: 'Bogotá', telefono: 987654321, direccion: 'jdsk34 54' },
                        { nombre: "hosland", sede: 'Medellín ', telefono: 888777444, direccion: 'ppds77 - 23' },
                        { nombre: "pascalia", sede: 'México ', telefono: 6665646, direccion: 'pppdjk' }],
                    profesores: [],
                    estudiantes: [],
                    niveles: [{ preReq: 'bachillerato', tecno: 'programacion', eleccion: 'obligasa' }],
                    tecno: [
                        { nombre: 'programacion', modalidad: 'presencial', prueba: 'si', nCred: "5" },
                        { nombre: 'matematicas', modalidad: 'presencial', prueba: 'si', nCred: "3" }],
                    teams: []
                }
            }
        }
    },
    


}
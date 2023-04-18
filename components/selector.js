export default{
    name: 'selector',
    template: /* html */`
    <label>seleccione su rol </label>
    <select v-model="config.rolselec">
        <option disabled value=""> Please select one</option>
        <option v-for="(items, index) in config.roles" v-text="items"></option>
    </select>
    `,
    props:{
        config: Object
    }
}
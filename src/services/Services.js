class Services{
    constructor(){
        this.arrayProductos=[]
    }

    getAll(){
        return this.arrayProductos
    }
    getById(id){
        return this.arrayProductos.find(e=>e.id===id)||{error:"producto no encontrado"}
    }
    add(objeto){
        this.arrayProductos.push(objeto)
        return this.arrayProductos
    }
    put(id, objeto){
        let indice=this.arrayProductos.findIndex(e=>e.id===id)
        this.arrayProductos[indice]=objeto
        return this.arrayProductos[id]
    }
    deleteById(id){
        this.arrayProductos=this.arrayProductos.filter(e=>e.id!==id)
        return(id)
    }
}

module.exports = {Services}
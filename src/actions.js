import { firebaseApp } from './firebase'
import firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseApp) //obtiene la cadena e coneccion

export const getCollection = async (collection)=>{
    const result={statusResponse:false, data:null, error:null}
    try {
        const data= await db.collection(collection).get()
        const arrayData=data.docs.map(doc => ({id:doc.id,...doc.data()}))
        result.statusResponse=true
        result.data =arrayData
    } catch (error) {
        result.error=error
    }
    return result
}

export const addDocument = async(collection,data) => {
    const result = {statusResponse :false,data:null,error:null}
    try {
        const response =await db.collection(collection).add(data)
        result.data={id:response.id}
        result.statusResponse=true
    } catch (error) {
        result.error=error
    }
    return result
}

export const getDocument = async(collection,id)=>{
    const result ={statusResponse:false,data:null,error:null}
    try {
        const response = await db.collection(collection).doc(id).get()
        result.data={id:response.id, ...response.data()}
        result.statusResponse=true
        
    } catch (error) {
        result.error=error
    }
    return result
}

export const updateDocument = async(collection,id,data)=>{ //se pasa la coleccion, el id y la data que se va actualizar al metodo updateDocument
    const result ={statusResponse:false,error:null} //,data:null: se quita por que no va devolver data simplemente lo actualiza
    try {
        await db.collection(collection).doc(id).update(data)
        //db: base de datos | 
        //collection: llama la coleccion con parametro collection | 
        //doc: documento con parametro id | 
        //update: metodo que le vamos a pasar con el parametro data      
        result.statusResponse=true
    } catch (error) {
        result.error=error
    }
    return result
}
export const deleteDocument = async(collection,id)=>{ //se pasa la coleccion, el id que se va eliminar
    const result ={statusResponse:false,error:null} //despues de eliminar nos da una respuesta 
    try {
        await db.collection(collection).doc(id).delete()
        //db: base de datos | 
        //collection: llama la coleccion con parametro collection | 
        //doc: documento con parametro id | 
        //delete: metodo que le vamos a pasar      
        result.statusResponse=true
    } catch (error) {
        result.error=error
    }
    return result
}
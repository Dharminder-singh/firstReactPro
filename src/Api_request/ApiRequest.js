const ApiRequest = async (url = '', requestType = null , errmsg = null) =>{
    try{
        const respones = await fetch(url , requestType)
        if(!respones.ok) throw Error('Reload again')
    }catch(err){
        errmsg = err.message;
    }finally{
        return errmsg;
    }
}

export default ApiRequest

export class datastorage{

    sessionstorageSet(x:any){
      sessionStorage.setItem("SigninData",JSON.stringify(x))
    }
}
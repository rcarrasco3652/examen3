agregarNuevoNodo(nodo){
    if(this._inicio == null){
     this._inicio = nodo;
    }else{
         if(nodo.prioridad>this._inicio.prioridad){
             nodo.siguiente = this._inicio;
             this._inicio = nodo;
         }else{
              _agregarNuevoNodo(nodo, this._inicio);
         }
     }
 }
 _agregarNodo(nodo, viejo){
    if(nodo.prioridad>viejo.prioridad){
         nodo.siguiente = viejo;
         let r = this._inicio;
         while(r.siguiente != viejo){
             r=r.siguiente;
         }
         r.siguiente=nodo;
    }else{
        if(viejo.siguiente==null){
            viejo.siguiente=nodo;
        }else{
            _agregarNodo(nodo, viejo.siguiente)
        }
    }
 }
const Airplane = {
    init:function(name){
        this.name = name;
        this.isFlying = false;
        return this;
    },
    takeOff: function(){
        if(!this.isFlying){
            this.isFlying = true;
            
        }
            },
    land: function(){
        if(this.isFlying){
          this.isFlying = false;
          
        }
        
    }
}
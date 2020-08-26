var _obj = {
    fname:"Justine",
    lname:"Caneza"
}

var vm =  new Vue({
    el:'#vue_det',
    data: _obj,
    methods:{
        mydetails:function(){
            console.log(this);
            return "I am " + this.firstname + " " + this.lastname;
        }
    }
})
console.log(vm.fname);
console.log(vm.data);   
console.log(vm.$data.fname);

var Component = Vue.extend({
    data: function(){
        return _obj;
    }
})
var xcomponentInstance = new Component();
console.log(xcomponentInstance.fname);
console.log(xcomponentInstance.$data)
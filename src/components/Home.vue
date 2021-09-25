<template>
  <div class="">
   <div>
        <div class="inp">
           <span><font-awesome-icon class="fa-search" icon="search" /></span>
           <input v-model="search" @input='here' placeholder="Search ">
        </div>
    </div>
    <div class="sect">
      <h1 class='heading'>Events : </h1>
      <span class="numEvent"> {{this.Resource.length}}</span>
    </div>
  <div class="row">
  <div class="column m-2" v-for="(item,index) of this.Resource" :key="index">
    <div class="card">
      <div class="details" align='left'>
      <img :src='item.img' class="imgsize"/>
      <h3 class="itemname">{{item.name}}</h3>
      <p class="itemdate">{{item.date}}</p>
      <p class="itemticket">Ticket available {{item.TicketAvailable}}</p>
      </div>
      <div class="btnElement">
      <button class="hide" @click="handle(item.name,item.date,item.TicketAvailable)">
        <font-awesome-icon class="fa fa-cart" icon="cart-plus"/>Book Event</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import json from '../data.json'
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
   ...mapState({
     Oderedlist:state=>state.Oderedlist,
     Resource:state=>state.Resource
   })
  },
  props: {
    msg: String
  },
  data() {
    return {
      search:'',  
    }
  },
  methods: {
    handle(name,date,ticket){
      this.$store.state.Oderedlist=[]
      this.Oderedlist.push({name:name,date:date,ticket:ticket})
      console.log(name,date,ticket,this.Resource)
      this.$router.push('/bookevent')
    },
    here(){
          console.log(this.search);
          if(this.search!=""){
           this.$store.state.Resource = this.Resource.filter((items)=>{
             return items.name.toLowerCase().match(this.search)
           })
          }else{
             this.$store.state.Resource = json.users
          }
       },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading{
  margin-left: 4%;
  float: left;
}
.numEvent{
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;

}
.sect{
  overflow: hidden;
}
/* Float four columns side by side */
.column {
  float: left;
  width: 30%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {margin:0 5%;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  background-color: #f1f1f1;
}
.m-2{
  margin-top: 2%;
  margin-bottom: 2%;
}
.itemdate{
  float: left;
}
.itemticket{
float:right;
 display: block;
}
.imgsize{
  width:100%;
}
.hide{
  text-align: center;
  margin-left: 30%;
  font-size: 20px;
}
.hide:hover{
  color: red;
}
.inp{
  margin-left: auto;
  position: relative; 
  text-align: center;
}
.inp input { 
   margin-top: 1%;
   width: 40%;
   text-indent: 10px;
   font-size: 20px;
   font-family:  FontAwesome, sans-serif;
}
.inp .fa-search { 
  position: absolute;
  cursor: pointer;
  top: 20px;
  left: 68%;
  font-size: 15px;
}
@media screen and (max-width: 950px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .card{
    height: 160px;
  }
  .imgsize{
    float: left;
    width:50%;
    height: 150px;

  }
  .itemdate{
   float: none;
  }
.itemticket{
float: none;
 }
 .details{
   float: left;
 }
 .btnElement{
     margin-left: 90%;
     margin-top: 60px;
 }
 .hide{
   font-size: 0;
 }
 .fa { font-size: initial;}
 .inp input { 
         width: 60%;  
    }
.inp .fa-search { 
  top: 16px;
  left: 76%;
}
}
/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
   .imgsize{
    float: left;
    width:0%;
  }
   .itemdate{
   float: none;
  }
.itemticket{
 float: none;
 }
 .hide{
   font-size: 0;
 }
 .details{
   float: left;
   width: 50%;
 }
 .btnElement{
     margin-left: 80%;
     margin-top: 60px;
 }
 .fa { font-size: initial; }
 .inp input { 
         width: 60%;  
    }
    .inp .fa-search { 
    top: 12px;
    left: 74%;
 }
}
</style>

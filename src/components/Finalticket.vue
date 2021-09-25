<template lang="">
    <div class="card">
       <p class="text">You have booked <strong class="textspan">{{totalattendee}}</strong><strong class="text"> tickets</strong> for</p>
       <hr/>
       <p class="title">{{Oderedlist[0].name}}</p>
        <p class="text">{{Oderedlist[0].date}}</p>
        <hr>
        <input type="submit" value="Make Payment" @click.prevent="checkout">
        <input type="reset" class="warning" value="Back to Booking" @click="goback">
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default { 
    props:{
       totalattendee:Number
    },
    computed:{
        ...mapState({
            Resource:state=>state.Resource,
            Oderedlist:state=>state.Oderedlist
        })
    },
    methods: {
        checkout(){
            this.Resource.map((item)=>{
                if(item.name==this.Oderedlist[0].name){
                    item.TicketAvailable = item.TicketAvailable - this.totalattendee
                }
            })
            alert("Booked")
            this.$router.push('/')
        },
        goback(){
            this.$emit('close')
        }
    },
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 10px;
  margin: 6% 34% 0 34%;
  background-color: #f1f1f1;
}
.text{
    color: black;
    text-align: center;
}
.textspan{
    text-align: center;
    color: #df7c4f;
}
.title{
    color: black;
    text-align: center;
    font-size: 150%;
    text-decoration: black;
}
input[type=submit]{
  background-color: #df7c4f;
  border: none;
  color: white;
  width: 49%;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
input[type=reset]{
  border: 2px solid #df7c4f;
  width: 49%;
  background-color: white;
  color: black;
  padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
  cursor: pointer;
}
</style>
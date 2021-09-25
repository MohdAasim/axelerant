<template>
    <div>
      <finalticket v-if="booked" @close="close" :totalattendee='totalattendee'/>
        <div class="card" v-else>
            <div class="deatailcard">
                <h2>{{Oderedlist[0].name}}</h2>
                <p>{{Oderedlist[0].date}}</p>
                <p>{{Oderedlist[0].ticket}}</p>
            </div>
           <form>
             <div v-if="showmsg" class="alert card" role="alert">
                 {{msg}}
             </div>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" @input="getinput" placeholder="FirstName LastName" v-model="name">
                <label for="Email">Email</label>
                <input type="email" id="email" name="Email" @input="getinput" placeholder="Email" v-model="email" >
                <label for="Phone">Phone</label>
                <input type="number" id="phone" name="Phone" @input="getinput" placeholder="Phone" v-model="phone">
                <label for="Phone">Attendees</label>
                <div v-for="n,index in totalattendee" :key="index">
                <label align='left'>{{n}}</label>
                <input type="text" id="Attendee" @input="getinput" v-model="attendent[index]" name="Attendee1" placeholder="FirstName LastName">
                </div>    
                <button class="attendee" @click.prevent="attendee">+Add an Attendee</button>
                <hr/>
                <input type="submit" value="Submit" @click.prevent="bookticket">
                <input type="reset" class="warning" value="Cancel" @click="cancel">
                </form>
        </div>           
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Finalticket from './Finalticket.vue'
export default {
  components:{
   Finalticket
  },
  computed:{
   ...mapState({
      Oderedlist:state=>state.Oderedlist
   })
  },
  data() {
    return {
      totalattendee:1,
      name:"",
      email:"",
      phone:"",
      attendent:[],
      booked:false,
      msg:"",
      showmsg:false
    }
  },
    methods: {
      getinput(){
        this.showmsg=false;
        this.msg=''
      },
      attendee(){
        this.totalattendee = this.totalattendee + 1 
      },
      cancel(){
        this.$store.state.Oderedlist = []
        this.$router.push('/')
      },
      bookticket(){   
          if(this.name==""){
            this.showmsg = true;
            this.msg="Please enter the name"
          }
          else if(this.email=="" || !this.email.includes('@')||!this.email.includes('.')){
             this.showmsg = true;
            this.msg="Please enter valid email"
          }
          else if(this.phone=="" || this.phone.length!=10){
             this.showmsg = true;
          this.msg="Please enter valid phone number"
          }
          else if(this.attendent.length>=0){
            for(let i = 0;i<this.totalattendee;i++){
              if(this.attendent[i]===undefined){
                 this.showmsg = true;
               this.msg=`Please also enter the name of attendent${i+1}`
              }else if(this.attendent[this.totalattendee-1]){
                this.booked=true
              }
            }          
          }
      },
      close(){
        this.booked=false
      }
    },

}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 10px;
  margin: 3% 20% 0 20%;
  background-color: #f1f1f1;
}
.deatailcard{
    text-align: center;
}
h2{
    margin-top: 0px;
    margin-bottom: 0px;
}
p{
    margin-top: 0px;
    margin-bottom: 0px;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
#Attendee{
    width:90%;
    padding: 12px 20px;
    margin: 8px 3px 20px 8%;
    box-sizing: border-box;
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
.warning{
  border-color: #df7c4f;
  color: orange;
}
.attendee{
  border: 0px;
  margin-left: 85%;
  color: #df7c4f;
  text-decoration: none;
  cursor: pointer;
}
.warning:hover {
  background: #df7c4f;
  color: white;
}
.alert{
  color: darkred;
  text-align: center;
  font-size: 20px;
}
</style>

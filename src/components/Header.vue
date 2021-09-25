<template >
    <div class="topnav" id="myTopnav">
    <router-link to="/" class="active ml-auto">
    <img src="logo_axelerant.png" >
    </router-link>
     <router-link to="/" class="mr-auto">
    <a href="#news" class="mr-auto">Logout</a>
    </router-link>
     <router-link to="/" class="mr-auto">
    <a href="#contact" class="mr-auto">Help</a>
    </router-link>
    <router-link to="/" class="mr-auto">
    <a href="#about"  active>Events</a>
    </router-link>
     <router-link to="/" class="mr-auto">
    <a href="#about" class="mr-auto">Dashboard</a>
    </router-link>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
    <font-awesome-icon class="fa-bars" icon="bars"/>
  </a>
</div>
</template>
<script>
export default {
    methods: {
        myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
       }
    },
}
</script>
<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav .ml-auto {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a{
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 27px; 
}

/* Change the color of links on hover */
.topnav .ml-auto:hover {
  text-decoration: underline;
   /* background-color: rgb(114, 226, 114); */
  color: black;
}
.topnav a:hover {
   text-decoration: underline;
  /* background-color: #ddd; */
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  color: green;
}
.ml-auto{
    margin-left: auto;
}
/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
@media screen and (max-width: 950px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
   .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

</style>
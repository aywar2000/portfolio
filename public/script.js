console.log("aloha");

// function canVas() {
//   var canvas = document.getElementById("canv");
//   console.log("cancas!", canvas);
//   const ctx = canvas.getContext("2d");
//   ctx.beginPath();
//   ctx.strokeStyle = "rgb(58, 255, 58)";
//   ctx.lineWidth = 5;
//   ctx.shadowOffsetX = 3;
//   ctx.shadowOffsetY = 3;
//   ctx.shadowBlur = 10;
//   ctx.shadowColor = "rgb(58, 255, 58)";
//   ctx.stroke();
//   //sa beginpath počinje
//   ctx.beginPath();
//   ctx.moveTo(100, 0);
//   ctx.lineTo(0, 200);
//   ctx.moveTo(100, 0);
//   ctx.lineTo(200, 200);
//   ctx.moveTo(100, 0);
//   ctx.lineTo(400, 400);
//   ctx.lineTo(0, 200);
//   ctx.stroke();
//   //završava
// }
// canVas();

// Vue.component("komponenta-proba", {
//   template: "#template-prvi",
//   props: ["title"],
//   data: function () {
//     return {
//       heading: "PROJECTS",
//     };
//   },
// });

Vue.component("projects-modal", {
  template: "#projects",
  props: ["id", "title", "directory", "description"],
  data: function () {
    //DODAO SVE IZ IMGBOARD
    return {
      id,
      title,
      directory,
      description,
    };
  },

  methods: {
    openModal: function (e) {
      console.log("click happens");
      //console.log("propzz", this.props);
      this.$emit("openModal");
    },
    closeModal: function (e) {
      console.log(
        "closeModal runs and about to emit an event from the component!!!!!!"
      );
      this.$emit("close");
    },
  },
});

new Vue({
  el: "#main",
  // components: {
  //   "projects-modal": projects-modal
  // }
  data: {
    // openModal: true,
    projects: [
      {
        id: 1,
        title: "connect4",
        directory: "connect4-new",
        description:
          "a simple web version of 'connect four' game. Two colors, two players, four tokens in line needed to win",
      },

      {
        id: 2,
        title: "pane",
        directory: "pane",
        description:
          "dynamic, interactive and visually attractive element for every website",
      },

      {
        id: 3,
        title: "spiced website",
        directory: "spiced-web",
        description: "website for spiced academy",
      },

      {
        id: 4,
        title: "spotify",
        directory: "spotify",
        description:
          "a search engine for music artists and albums utilizing spotify's API",
      },
    ],
    // checkForSomething: 10,
    // sayGreeting: "hello",
  },
  mounted: function () {
    console.log("props: ", this.id, this.title);

    // console.log("mounted!!!!");
    // console.log('this: ',this);
    // console.log("this.name", this.name);
    console.log("this.cities before axios request: ", this.cities);
    console.log("this before axios request: ", this);
    var self = this;
    axios.get("/cities").then(function (response) {
      console.log("response", response);
      console.log("self: ", self);
      console.log("this inside then: ", this);
      console.log("this.cities inside then: ", this.cities);
      // this.cities = response.data;
      self.cities = response.data;
    });
  },
  methods: {
    openModal: function (e) {
      console.log("click");
      this.openModal = !this.openModal;
    },

    emphasize: function (e) {
      console.log("bogamievoga");
      e.target.style.textDecoration = "underline";
    },
    closeMePlease: function () {
      console.log(
        "closeMePlease in the instance / parent is running! This was emitted from the component"
      );
      // this is where you want to update data to close the modal - set id to null
    },
  },
});

// var context = document.getElementById("canv").getContext("2d");

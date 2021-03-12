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

Vue.component("komponenta-about", {
  template: "#template-prvi",
  props: ["title"],
  showAbout: false,
  data: function () {
    return {
      heading: "ej",
    };
  },
});

Vue.component("projects-modal", {
  template: "#projects",
  click: Boolean,
  props: ["id", "title", "directory", "description"],
  // openModal: true,
  data: function () {
    return {
      projects: [],
    };
  },
  // mounted: function getProjects() {
  //   var self = this;
  //   axios.get("/projects").then(function (response) {
  //     console.log("response", response);
  //     console.log("self: ", self);
  //     // console.log("this inside then: ", this);
  //     console.log("this.projects inside then: ", this.projects);
  //     self.projects = response.data;
  //   });
  // },
  methods: {
    openModal: function (e) {
      console.log("click happens");
      //console.log("propzz", this.props);
      this.$emit("click");
    },
    closeModal: function (e) {
      console.log("zatvorio");
      this.$emit("close");
    },
  },
});

new Vue({
  el: "#main",
  data: {
    title: ["da original tru rastafaraj"],
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
  },
  mounted: function getProjects() {
    var self = this;
    axios.get("/projects").then(function (response) {
      console.log("response", response);
      console.log("self: ", self);
      // console.log("this inside then: ", this);
      console.log("this.projects inside then: ", this.projects);
      self.projects = response.data;
    });
  },
  methods: {
    openModal: function () {
      console.log("click");
      // this.openModal = !this.openModal;
    },

    closeModal: function () {
      console.log("from component to main");
      id: null;
    },
  },
});

// var context = document.getElementById("canv").getContext("2d");

console.log("aloha");

function canVas() {
  var canvas = document.getElementById("canv");
  console.log("cancas!", canvas);
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 3;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgb(58, 255, 58)";
  ctx.stroke();
  //sa beginpath počinje
  //glavna
  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(170, 200);
  ctx.moveTo(300, 0);
  ctx.lineTo(370, 200);
  ctx.moveTo(300, 0);
  ctx.lineTo(450, 200);
  ctx.lineTo(0, 200);
  ctx.stroke();
  //završava
  //lijevo
  ctx.beginPath();
  ctx.moveTo(130, 100);
  ctx.lineTo(50, 200);
  ctx.moveTo(130, 100);
  ctx.lineTo(180, 180);
  ctx.moveTo(130, 100);
  ctx.lineTo(170, 222);
  ctx.stroke();
  //mjesec
  ctx.beginPath();
  ctx.moveTo(130, 500);
  ctx.lineTo(50, 450);
  ctx.beginPath();
  ctx.arc(55, 55, 30, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.stroke();
  //desna
  ctx.beginPath();
  ctx.moveTo(500, 50);
  ctx.lineTo(420, 162);
  ctx.moveTo(500, 50);
  ctx.lineTo(590, 200);
  ctx.moveTo(500, 50);
  ctx.lineTo(600, 160);
  ctx.stroke();
}
canVas();

Vue.component("komponenta-about", {
  template: "#template-prvi",
  props: ["title"],

  data: function () {
    return {
      showAbout: false,
      heading: "tu nema ničega",
    };
  },
});

Vue.component("projects-modal", {
  template: "#projects",
  props: ["id", "title", "directory", "description"],
  data: function () {
    return {
      showModal: false,
      projects: [],
    };
  },
  mounted: function () {
    this.getProjects();
  },

  methods: {
    openModal(e) {
      this.$emit(click, (openModal = true));
    },

    getProjects() {
      var self = this;
      axios.get("/projects").then(function (response) {
        console.log("response", response);
        console.log("self: ", self);
        // console.log("this inside then: ", this);
        console.log("this.projects inside then: ", this.projects);
        self.projects = response.data;
      });
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
    showAbout: false,
    //openModal: false,
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
    openModal: function (e) {
      openModal: true;
      console.log("click happens");
      //console.log("propzz", this.props);
      //this.$emit("open-modal");
    },

    closeModal: function () {
      console.log("from component to main");
      id: null;
    },
    closeModalMain: function () {
      this.projects = null;
      location.hash = "0";
    },
  },
});

// var context = document.getElementById("canv").getContext("2d");

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
  props: ["titles"],
  data: function () {
    return {
      title: "PROJECTS",
    };
  },
  mounted: function () {
    console.log("data: ", this.data);
  },
  methods: {
    openModal: function (e) {
      console.log("click happens");
    },
    closeModal: function () {
      // console.log("closeModal runs and about to emit an event from the component!!!!!!");
      this.$emit("close");
    },
  },
});

new Vue({
  el: "#main",
  data: {
    titles: [
      {
        id: 1,
        title: "ABOUT ME",
      },
      {
        id: 2,
        title: "PROJECTS",
      },
      {
        id: 3,
        title: "CONTACT",
      },
    ],
    // projects: [
    //   {
    //     id: 1,
    //     title: "PROJECTS",
    //     img: URL(),
    //     desc: "",
    //   },
    //   {
    //     id: 2,
    //     title: "PROJECTS",
    //     img: URL(),
    //     desc: "",
    //   },
    //   {
    //     id: 3,
    //     title: "PROJECTS",
    //     img: URL(),
    //     desc: "",
    //   },
    //   {
    //     id: 4,
    //     title: "PROJECTS",
    //     img: URL(),
    //     desc: "",
    //   },
    // ],
    // checkForSomething: 10,
    // sayGreeting: "hello",
  },
  methods: {
    openModal: function (e) {
      console.log("click happens");
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

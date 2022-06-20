document.querySelector(".company__input").value = "Apple";

document
  .querySelector(".drop__down__func")
  .addEventListener("click", function () {
    const state = document.querySelector(".card__open").style.display;
    if (state === "") {
      document.querySelector(".card__open").style.display = "block";
    } else if (state == "block") {
      document.querySelector(".card__open").style.display = "";
    }
  });

// =====CHARTS===============================================================

let myChart = document.getElementById("myChart").getContext("2d");
let lineChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        label: "Price Range",
        data: [450, 700, 540, 830, 300, 1255, 110, 620, 650],
        backgroundColor: "#3FE6D1",
        borderColor: "#3FE6D1",
        hoverBorderWidth: 3,
        hoverBorderColor: "blue",
        tension: 0.4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
// ===========================Chart Info===================================================

const arr = ["Line graph", "Candle stick", "Graph name"];

arr.forEach((item, i, arr) => {
  // console.log(item);
  const node = document.createElement("li");
  if (i === 0) {
    node.className = "graph__lineGraph";
  }
  const textnode = document.createTextNode(item);
  node.appendChild(textnode);
  document.getElementById("testingToInject").appendChild(node);
});

const arr2 = ["1D", "5D", "1M", "3M", "6M", "YTD", "1Y", "5Y", "ALL"];

arr2.forEach((item, i) => {
  const node = document.createElement("li");
  if (i === 0) {
    node.className = "active__day";
  }
  const textnode = document.createTextNode(item);
  node.appendChild(textnode);
  document.getElementById("testingToInjectTwo").appendChild(node);
});

// ================tabel data===========================

const tabelHeadarr = [
  "Last Traded Price",
  "Previous Closing Price",
  "Overall Market Capitalization",
  "52 Week High",
  "52 Week Low",
  "Last Day Volume",
];

const tradedOnPrice = ["$520", "$512", "$198 M", "$530", "$489", "53834"];

const idkF = ["Last Traded Price", "$520"];

// ==================creating table======================using javaScript===

const value = "$520";
let headerName = "";
let variable = "";
for (
  let i = 1;
  i <= 6;
  i++ //es6 var, let , const used
) {
  if (i == 1) {
    headerName = "Last Traded Price";
    variable = "One";
  } else if (i == 2) {
    headerName = "Previous Closing Price";
    variable = "Two";
  } else if (i == 3) {
    headerName = "Overall Market Capitalization";
    variable = "Three";
  } else if (i == 4) {
    headerName = "52 Week High";
    variable = "Four";
  } else if (i == 5) {
    headerName = "52 Weel Low";
    variable = "Five";
  } else {
    headerName = "Last Day Volume";
    variable = "Six";
  }
  createTabel(headerName); // here hoisting concept is done;
}

function createTabel(headerName) {
  for (let i = 1; i <= 6; i++) {
    let node = document.createElement("div"); 
    if (i == 1) {
      var textnode = document.createTextNode(headerName);
      node.className = "header__tabel";
    }
    // else
    // {
    //   var textnode = document.createTextNode(value);
    //   node.className = "body__tabel";
    // }
    else if (i !== 1 && (i == 3 || i == 5)) {
      var textnode = document.createTextNode(value);
      node.className = "body__tabel apply__gray";
    } else {
      var textnode = document.createTextNode(value);
      node.className = "body__tabel";
    }

    node.appendChild(textnode);

    document.getElementById("column" + `${variable}`).appendChild(node); // javaScript Template Literals;
  }
}

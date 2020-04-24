var currentIndex = 0,
  PatientName = document.getElementById("PatientName"),
  detectionType = document.getElementById("detectionType"),
  detectionPrice = document.getElementById("detectionPrice"),
  drname = document.getElementById("drname"),
  remarks = document.getElementById("Remarks"),
  addBtn = document.getElementById("addBtn"),
  addBtn = document.getElementById("addBtn"),
  patientList;
//-------------------------------------------------------------\\

if (localStorage.getItem("myPatinet") == null) {
  patientList = [];
} else {
  patientList = JSON.parse(localStorage.getItem("myPatinet"));
  disliayPatinets();
}
// (function checkDataName() {
// nameRejex = /^[a-z]{3,15} |[a-z]{3,15} |[a-z]{3,15}$/;
//   PatientName.addEventListener("keyup", function () {
//     if (nameRejex.test(PatientName.value) == false) {
//       PatientName.classList.add("is-invalid");
//       PatientName.classList.remove("is-valid");
//       addBtn.disabled = "true";
//     } else {
//       PatientName.classList.add("is-valid");
//       PatientName.classList.remove("is-invalid");
//       addBtn.removeAttribute("disabled");
//     }
//   });
// })();

function addPatinet() {
  if (addBtn.innerHTML == "Record") {
    var Patinet = {
      name: PatientName.value,
      type: detectionType.value,
      price: detectionPrice.value,
      dr: drname.value,
      remarks: remarks.value,
    };
    patientList.push(Patinet);
    localStorage.setItem("myPatinet", JSON.stringify(patientList));
    disliayPatinets();
    claerForm();
    addBtn.innerHTML = "Record";
  } else {
    var Patinet = {
      name: PatientName.value,
      type: detectionType.value,
      price: detectionPrice.value,
      dr: drname.value,
      remarks: remarks.value,
    };
    patientList[currentIndex] = Patinet;
    localStorage.setItem("myPatinet", JSON.stringify(patientList));
    disliayPatinets();
    claerForm();
    addBtn.innerHTML = "Record";
  }
}
function disliayPatinets() {
  var box = "";
  for (var i = 0; i < patientList.length; i++) {
    box +=
      `<tr><td>` +
      i +
      `</td>
      <td>` +
      patientList[i].name +
      `</td>
    <td> ` +
      patientList[i].type +
      `</td>
    <td> ` +
      patientList[i].price +
      `</td>
    <td> ` +
      patientList[i].dr +
      `</td>
    <td> ` +
      patientList[i].remarks +
      `</td>
      <td><button onclick="upDatePatinet(` +
      i +
      `)" class="btn btn-warning shadows">Update</button></td>
      <td><button onclick="deletePatinet(` +
      i +
      `)" class="btn btn-danger shadows">Delete</button></td> </tr>`;
  }
  document.getElementById("tableBody").innerHTML = box;
}
function searchProudct(term) {
  var box = "";
  for (i = 0; i < patientList.length; i++) {
    if (patientList[i].name.includes(term.trim()) == true) {
      box +=
        `<tr><td>` +
        i +
        `</td>
      <td>` +
        patientList[i].name +
        `</td>
    <td> ` +
        patientList[i].type +
        `</td>
    <td> ` +
        patientList[i].price +
        `</td>
    <td> ` +
        patientList[i].dr +
        `</td>
    <td> ` +
        patientList[i].remarks +
        `</td>
        <td><button onclick="upDatePatinet(` +
        i +
        `)" class="btn btn-warning">Update</button></td>
        <td><button onclick="deletePatinet(` +
        i +
        `)" class="btn btn-danger">Delete</button></td></tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = box;
}

function deletePatinet(index) {
  patientList.splice(index, 1);
  localStorage.setItem("myPatinet", JSON.stringify(patientList));
  disliayPatinets();
}
function claerForm() {
  var Patinet = {
    name: (PatientName.value = ""),
    type: (detectionType.value = ""),
    price: (detectionPrice.value = ""),
    dr: (drname.value = ""),
    remarks: (remarks.value = ""),
  };
}

function upDatePatinet(index) {
  currentIndex = index;
  PatientName.value = patientList[index].name;
  detectionType.value = patientList[index].type;
  detectionPrice.value = patientList[index].price;
  drname.value = patientList[index].dr;
  remarks.value = patientList[index].remarks;

  addBtn.innerHTML = "Update";
}

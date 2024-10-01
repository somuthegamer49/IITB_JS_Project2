// Data Begins
let chemicals = [
  {
    Chemical_name: "Ammonium Persulfate",
    Vender: "LG Chem",
    Density: 3525.92,
    Viscosity: 60.63,
    Packaging: "Bag",
    Pack_size: 100.0,
    Unit: "kg",
    Quantity: 6495.18,
  },
  {
    Chemical_name: "Caustic Potash",
    Vender: "Formosa",
    Density: 3172.15,
    Viscosity: 48.22,
    Packaging: "Bag",
    Pack_size: 100.0,
    Unit: "kg",
    Quantity: 8751.9,
  },
  {
    Chemical_name: "Dimethylaminopropylamino ",
    Vender: "LG Chem",
    Density: 8435.37,
    Viscosity: 12.62,
    Packaging: "Barrel",
    Pack_size: 75.0,
    Unit: "L",
    Quantity: 5964.91,
  },
  {
    Chemical_name: "Mono Amonium Phosphate",
    Vender: "Sinopec",
    Density: 1597.65,
    Viscosity: 76.51,
    Packaging: "Bag",
    Pack_size: 165.0,
    Unit: "kg",
    Quantity: 8183.73,
  },
  {
    Chemical_name: "Ferric Nitrate",
    Vender: "DowDuPont",
    Density: 364.04,
    Viscosity: 14.9,
    Packaging: "Bag",
    Pack_size: 185.0,
    Unit: "kg",
    Quantity: 4154.33,
  },
  {
    Chemical_name: "n-Pentane",
    Vender: "Sinopec",
    Density: 4535.26,
    Viscosity: 66.76,
    Packaging: "N/A",
    Pack_size: 0,
    Unit: "t",
    Quantity: 6272.34,
  },
  {
    Chemical_name: "Glycol Ehther PM",
    Vender: "LG Chem",
    Density: 6495.18,
    Viscosity: 72.12,
    Packaging: "Bag",
    Pack_size: 258.0,
    Unit: "kg",
    Quantity: 8749.54,
  },
  {
    Chemical_name: "Hydrochloric Acid",
    Vender: "Sun Pharma",
    Density: 6542.92,
    Viscosity: 60.63,
    Packaging: "Barrel",
    Pack_size: 11.22,
    Unit: "L",
    Quantity: 6495.18,
  },
  {
    Chemical_name: "Ethanol",
    Vender: "Tata Chemicals",
    Density: 7895.54,
    Viscosity: 60.63,
    Packaging: "N/A",
    Pack_size: 89.22,
    Unit: "kg",
    Quantity: 1453.25,
  },
  {
    Chemical_name: "Sodium Carbonate",
    Vender: "NCC",
    Density: 3256.18,
    Viscosity: 55.22,
    Packaging: "Barrel",
    Pack_size: 245.1,
    Unit: "kg",
    Quantity: 7774.12,
  },
  {
    Chemical_name: "Sulfuric Acid",
    Vender: "Formosa",
    Density: 5678.91,
    Viscosity: 42.23,
    Packaging: "Bag",
    Pack_size: 689.45,
    Unit: "t",
    Quantity: 2353.15,
  },
  {
    Chemical_name: "Ethylene",
    Vender: "Pidilite Industries",
    Density: 1572.89,
    Viscosity: 88.23,
    Packaging: "Bag",
    Pack_size: 325.11,
    Unit: "kg",
    Quantity: 1111.22,
  },
  {
    Chemical_name: "Benzene",
    Vender: "Aarti Industries",
    Density: 2354.33,
    Viscosity: 22.11,
    Packaging: "Bag",
    Pack_size: 145.12,
    Unit: "L",
    Quantity: 5590.45,
  },
  {
    Chemical_name: "Anisol",
    Vender: "BASF India Limited",
    Density: 5367.47,
    Viscosity: 24.23,
    Packaging: "Barrel",
    Pack_size: 564.54,
    Unit: "kg",
    Quantity: 6749.11,
  },
  {
    Chemical_name: "Phosphoric Acid",
    Vender: "Pidilite Industries",
    Density: 5930.68,
    Viscosity: 56.63,
    Packaging: "Barrel",
    Pack_size: 123.12,
    Unit: "t",
    Quantity: 3948.29,
  },
];
let chemicals2 = chemicals;
// Data Ends

// Program Starts

let tablebody = document.querySelector(".table-chem tbody");

// Table manipulation
let flag2 = false;
let flagedit = false;
let editInd;
let flagadd = false;
let saveObj2 = {};
// Add data functionality and validations
const addData = () => {
  flagadd = true;
  let row = document.createElement("tr");
  let chem_check = document.createElement("td");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let chem_ind = document.createElement("td");
  let chem_name = document.createElement("td");
  let chem_vendor = document.createElement("td");
  let chem_density = document.createElement("td");
  let chem_viscosity = document.createElement("td");
  let chem_packaging = document.createElement("td");
  let chem_packsize = document.createElement("td");
  let chem_unit = document.createElement("td");
  let chem_quantity = document.createElement("td");

  chem_check.append(checkbox);

  row.append(chem_check);
  row.append(chemicals.length + 1);
  row.append(chem_name);
  row.append(chem_vendor);
  row.append(chem_density);
  row.append(chem_viscosity);
  row.append(chem_packaging);
  row.append(chem_packsize);
  row.append(chem_unit);
  row.append(chem_quantity);

  if (!flag2) {
    tablebody.append(row);
    flag2 = !flag2;
  }
  chem_check.contentEditable = false;
  chem_ind.contentEditable = false;
  chem_name.contentEditable = true;
  chem_vendor.contentEditable = true;
  chem_density.contentEditable = true;
  chem_viscosity.contentEditable = true;
  chem_packaging.contentEditable = true;
  chem_packsize.contentEditable = true;
  chem_unit.contentEditable = true;
  chem_quantity.contentEditable = true;
};

// Save button logic and validations
const saveData = () => {
  let saveObj = {
    Chemical_name: String,
    Vender: String,
    Density: Number,
    Viscosity: Number,
    Packaging: String,
    Pack_size: Number,
    Unit: String,
    Quantity: Number,
  };
  editData()
  let flag = false;
  for (var i = chemicals.length, row; (row = tablebody.rows[i]); i++) {
    for (var j = 1, col; (col = row.cells[j]); j++) {
      if (col.innerText === "") {
        col.style.border = "1px solid red";
        flag = true;
      } else {
        if (j == 1) {
          if (!isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Chemical_name = col.innerText;
          }
        }
        if (j == 2) {
          if (!isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Vender = col.innerText;
          }
        }
        if (j == 3) {
          if (isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Density = col.innerText;
          }
        }
        if (j == 4) {
          if (isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Viscosity = col.innerText;
          }
        }
        if (j == 5) {
          if (!isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Packaging = col.innerText;
          }
        }
        if (j == 6) {
          if (isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Pack_size = col.innerText;
          }
        }
        if (j == 7) {
          if (!isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Unit = col.innerText;
          }
        }
        if (j == 8) {
          if (isNaN(Number(col.innerText))) {
            col.style.border = "1px solid red";
            flag = true;
          } else {
            saveObj.Quantity = col.innerText;
          }
        }
      }
      if (!flag) {
        col.style.border = "none";
        col.contentEditable = false;
        col.style.textAlign = "center";
      }
    }
  }
  if (flagedit) {
    chemicals[editInd] = saveObj2;
    flagedit = false;
    tablebody.innerHTML = "";
    mapData();
  } else if (!flag && flagadd) {
    chemicals.push(saveObj);
    flag2 = false;
    flagadd = false;
    tablebody.innerHTML = "";
    mapData();
  }
};

// Delete Functionality

const deleteData = () => {
  let arr = [];
  for (var i = 0, row; (row = tablebody.rows[i]); i++) {
    col = row.cells[0];
    if (col.childNodes[0].checked) {
      arr.push(i);
    }
  }
  let arr2 = [];
  chemicals.forEach((data, ind) => {
    arr.forEach((val) => {
      if (ind === val) {
        arr2.push(data);
      }
    });
  });
  chemicals.forEach((data, ind) => {
    arr2.forEach((data2) => {
      if (
        data.Chemical_name === data2.Chemical_name &&
        data.Density === data2.Density &&
        data.Pack_size === data2.Pack_size &&
        data.Packaging === data2.Packaging &&
        data.Quantity === data2.Quantity &&
        data.Unit === data2.Unit &&
        data.Vender === data2.Vender &&
        data.Viscosity === data2.Viscosity
      ) {
        chemicals.splice(ind, 1);
      }
    });
  });
};

// Refresh Funtionality
const refreshData = () => {
  tablebody.innerHTML = "";
  mapData();
};

// Sort the data
let sortChemName = false;
let sortVendor = false;
let sortDensity = false;
let sortViscosity = false;
let sortPakage = false;
let sortPack = false;
let sortUnit = false;
let sortQuant = false;
const sortData = (e) => {
  if (e.target.innerText === "Chemical Name") {
    sortChemName = !sortChemName;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortChemName) {
        if (a.Chemical_name < b.Chemical_name) {
          return -1;
        } else if (a.Chemical_name > b.Chemical_name) {
          return 1;
        } else {
          return 0;
        }
      } else if (!sortChemName) {
        if (a.Chemical_name > b.Chemical_name) {
          return -1;
        } else if (a.Chemical_name < b.Chemical_name) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    mapData();
  }
  if (e.target.innerText === "Vendor") {
    sortVendor = !sortVendor;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortVendor) {
        if (a.Vender < b.Vender) {
          return -1;
        } else if (a.Vender > b.Vender) {
          return 1;
        } else {
          return 0;
        }
      } else if (!sortVendor) {
        if (a.Vender > b.Vender) {
          return -1;
        } else if (a.Vender < b.Vender) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    mapData();
  }
  if (e.target.innerText === "Density") {
    sortDensity = !sortDensity;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortDensity) {
        return a.Density - b.Density;
      } else if (!sortDensity) {
        return b.Density - a.Density;
      }
    });
    mapData();
  }
  if (e.target.innerText === "Viscosity") {
    sortViscosity = !sortViscosity;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortViscosity) {
        return a.Viscosity - b.Viscosity;
      } else if (!sortViscosity) {
        return b.Viscosity - a.Viscosity;
      }
    });
    mapData();
  }
  if (e.target.innerText === "Packaging") {
    sortPakage = !sortPakage;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortPakage) {
        if (a.Packaging < b.Packaging) {
          return -1;
        } else if (a.Packaging > b.Packaging) {
          return 1;
        } else {
          return 0;
        }
      } else if (!sortPakage) {
        if (a.Packaging > b.Packaging) {
          return -1;
        } else if (a.Packaging < b.Packaging) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    mapData();
  }
  if (e.target.innerText === "Pack Size") {
    sortPack = !sortPack;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortPack) {
        return a.Pack_size - b.Pack_size;
      } else if (!sortPack) {
        return b.Pack_size - a.Pack_size;
      }
    });
    mapData();
  }
  if (e.target.innerText === "Unit") {
    sortUnit = !sortUnit;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortUnit) {
        if (a.Unit < b.Unit) {
          return -1;
        } else if (a.Unit > b.Unit) {
          return 1;
        } else {
          return 0;
        }
      } else if (!sortUnit) {
        if (a.Unit > b.Unit) {
          return -1;
        } else if (a.Unit < b.Unit) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    mapData();
  }
  if (e.target.innerText === "Quantity") {
    sortQuant = !sortQuant;
    tablebody.innerHTML = "";
    chemicals.sort((a, b) => {
      if (sortQuant) {
        return a.Quantity - b.Quantity;
      } else if (!sortQuant) {
        return b.Quantity - a.Quantity;
      }
    });
    mapData();
  }
};

// Move Up and Move Down Functionality

const moveUp = () => {
  for (var i = 0, row; (row = tablebody.rows[i]); i++) {
    col = row.cells[0];
    if (col.childNodes[0].checked) {
      if (row.previousSibling) {
        tablebody.insertBefore(row, row.previousSibling);
      }
    }
  }
};

const moveDown = () => {
  for (var i = chemicals.length - 1, row; (row = tablebody.rows[i]); i--) {
    col = row.cells[0];
    if (col.childNodes[0].checked) {
      if (row.nextSibling) {
        (row.nextElementSibling);
        tablebody.insertBefore(row.nextSibling, row);
      }
    }
  }
};

// Search Functionality

const searchData = (e) => {
  let arr = [];
  let val = e.target.value;
  chemicals.forEach((data) => {
    let searchflag = false;
    if (
      data.Chemical_name.toLocaleLowerCase().includes(
        val.toLocaleLowerCase()
      ) ||
      String(data.Density)
        .toLocaleLowerCase()
        .includes(val.toLocaleLowerCase()) ||
      String(data.Pack_size)
        .toLocaleLowerCase()
        .includes(val.toLocaleLowerCase()) ||
      data.Packaging.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
      String(data.Quantity)
        .toLocaleLowerCase()
        .includes(val.toLocaleLowerCase()) ||
      data.Unit.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
      data.Vender.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
      String(data.Viscosity)
        .toLocaleLowerCase()
        .includes(val.toLocaleLowerCase())
    ) {
      (data);
      arr.push(data);
      chemicals = arr;
    }
  });
  tablebody.innerHTML = "";
  mapData();
  chemicals = chemicals2;
};

// Edit Functionality

const editData = () => {
  let saveO = {
    Chemical_name: String,
    Vender: String,
    Density: Number,
    Viscosity: Number,
    Packaging: String,
    Pack_size: Number,
    Unit: String,
    Quantity: Number,
  };
  for (var i = 0, row; (row = tablebody.rows[i]); i++) {
    col = row.cells[0];
    if (col.childNodes[0].checked) {
      chemind = row.cells[1].innerText;
      chemname = row.cells[2];
      chemvendor = row.cells[3];
      chemdensity = row.cells[4];
      chemvisc = row.cells[5];
      chempakage = row.cells[6];
      chempaksize = row.cells[7];
      chemunit = row.cells[8];
      chemquant = row.cells[9];
      row.addEventListener("click", () => {
        (chemname);
        chemname.contentEditable = true;
        chemvendor.contentEditable = true;
        chemdensity.contentEditable = true;
        chemvisc.contentEditable = true;
        chempakage.contentEditable = true;
        chempaksize.contentEditable = true;
        chemunit.contentEditable = true;
        chemquant.contentEditable = true;
        flagedit = true;
        editInd = Number(chemind) - 1;
        (editInd);
      });
      if (chemname === "") {
        chemname.style.border = "1px solid red";
        flagedit = false;
      }
      if (chemvendor === "") {
        chemvendor.style.border = "1px solid red";
        flagedit = false;
      }
      if (chemdensity === "") {
        chemdensity.style.bordr = "1px solid red";
        flagedit = false;
      }
      if (chemvisc === "") {
        chemvisc.style.border = "1px solid red";
        flagedit = false;
      }
      if (chempakage === "") {
        chempakage.style.border = "1px solid red";
        flagedit = false;
      }
      if (chemunit === "") {
        chemunit.style.border = "1px solid red";
        flagedit = false;
      }
      if (chemquant === "") {
        chemquant.style.border = "1px solid red";
        flagedit = false;
      }
      if (chempaksize === "") {
        chempaksize.style.border = "1px solid red";
        flagedit = false;
      }
      if (!isNaN(Number(chemname.innerText))) {
        chemname.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemname.style.border = "none";
        saveO.Chemical_name = String(chemname.innerText);
        flagedit = true;
      }
      if (!isNaN(Number(chemvendor.innerText))) {
        chemvendor.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemvendor.style.border = "none";
        saveO.Vender = String(chemvendor.innerText);
        flagedit = true;
      }
      if (isNaN(Number(chemdensity.innerText))) {
        chemdensity.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemdensity.style.border = "none";
        saveO.Density = Number(chemdensity.innerText);
        flagedit = true;
      }
      if (isNaN(Number(chemvisc.innerText))) {
        chemvisc.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemvisc.style.border = "none";
        saveO.Viscosity = Number(chemvisc.innerText);
        flagedit = true;
      }
      if (!isNaN(Number(chempakage.innerText))) {
        chempakage.style.border = "1px solid red";
        flagedit = false;
      } else {
        chempakage.style.border = "none";
        saveO.Packaging = String(chempakage.innerText);
        flagedit = true;
      }
      if (isNaN(Number(chempaksize.innerText))) {
        chempaksize.style.border = "1px solid red";
        flagedit = false;
      } else {
        chempaksize.style.border = "none";
        saveO.Pack_size = Number(chempaksize.innerText);
        flagedit = true;
      }
      if (!isNaN(Number(chemunit.innerText))) {
        chemunit.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemunit.style.border = "none";
        saveO.Unit = String(chemunit.innerText);
        flagedit = true;
      }
      if (isNaN(Number(chemquant.innerText))) {
        chemquant.style.border = "1px solid red";
        flagedit = false;
      } else {
        chemquant.style.border = "none";
        saveO.Quantity = Number(chemquant.innerText);
        flagedit = true;
      }
      for (let [key, val] of Object.entries(saveO)) {
        if (typeof(val) === "function") {
          if(key==="Chemical_name"){
            chemname.style.border='1px solid red'
          }
          if(key==="Density"){
            chemdensity.style.border='1px solid red'
          }
          if(key==="Viscosity"){
            chemvisc.style.border='1px solid red'
          }
          if(key==="Unit"){
            chemunit.style.border='1px solid red'
          }
          if(key==="Quantity"){
            chemquant.style.border='1px solid red'
          }
          if(key==="Vender"){
            chemvendor.style.border='1px solid red'
          }
          if(key==="Packaging"){
            chempakage.style.border='1px solid red'
          }
          if(key==="Pack_size"){
            chempaksize.style.border='1px solid red'
          }
          flagedit = false;
        } else {
          saveObj2 = saveO;
        }
      }
    }
  }
  
};
document.addEventListener("click", () => {
  editData();
});
// Mapping data to table
let mapData = () => {
  chemicals.forEach((data, ind) => {
    let row = document.createElement("tr");
    let chem_check = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let chem_ind = document.createElement("td");
    let chem_name = document.createElement("td");
    let chem_vendor = document.createElement("td");
    let chem_density = document.createElement("td");
    let chem_viscosity = document.createElement("td");
    let chem_packaging = document.createElement("td");
    let chem_packsize = document.createElement("td");
    let chem_unit = document.createElement("td");
    let chem_quantity = document.createElement("td");

    chem_check.append(checkbox);
    chem_ind.textContent = String(ind + 1);
    chem_name.textContent = data.Chemical_name;
    chem_vendor.textContent = data.Vender;
    chem_density.textContent = data.Density;
    chem_viscosity.textContent = data.Viscosity;
    chem_packaging.textContent = data.Packaging;
    chem_packsize.textContent = data.Pack_size;
    chem_unit.textContent = data.Unit;
    chem_quantity.textContent = data.Quantity;

    row.append(chem_check);
    row.append(chem_ind);
    row.append(chem_name);
    row.append(chem_vendor);
    row.append(chem_density);
    row.append(chem_viscosity);
    row.append(chem_packaging);
    row.append(chem_packsize);
    row.append(chem_unit);
    row.append(chem_quantity);
    tablebody.append(row);
  });
};
mapData();

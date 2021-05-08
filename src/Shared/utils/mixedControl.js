import { languageIDGet } from "./language/languageIDGet";
import defaultImg from "../../Assets/images/default/defaultImg.jpg";

// null olan verileri kontrol edip boş atıyor veya character vererek doldurabiliriz.
export function nullControl(params, character) {
  if (!params && typeof params !== "number") {
    return character || "";
  } else {
    return params;
  }
}

// null olan verileri kontrol edip (-) atıyor 2 veriyi aynı anda bakıyor
export function doubleNullControlHyphen(valueOne, valueTwo) {
  return nullControl(valueOne, "-") + " / " + nullControl(valueTwo, "-");
}

// resim url düzeltip boyutunu ayarlıyor
export function imagesReplace(imgURl, size) {
  if (imgURl && !size) {
    return imgURl.replace(/{size}/, "original");
  } else if (imgURl && size) {
    return imgURl.replace(/{size}/, size);
  } else {
    return defaultImg;
  }
}

// random değer üretiyor

export const randomId = () => {
  return Math.random().toString(36).substring(2, 100);
};

// gönderilen data içerisinde dil uygun veriyi bulup döndürüyor // name istenilen objenin ismi
export function GetI18n(data, name) {
  const languageID = languageIDGet();

  let findData = null;
  let dataI18n = null;

  for (var prop in data) {
    if (prop.toLocaleLowerCase().indexOf("i18n") > -1) {
      dataI18n = data[prop];
      break;
    }
  }

  if (dataI18n) {
    findData = dataI18n.find((element) => {
      return element.languageID === languageID;
    });
  }

  return dataI18n && dataI18n.length !== 0
    ? findData
      ? findData[name]
        ? findData[name]
        : data[name]
        ? data[name]
        : ""
      : dataI18n[0][name]
      ? dataI18n[0][name]
      : data[name]
      ? data[name]
      : ""
    : data[name]
    ? data[name]
    : "";
}

// email formatında olup olmadığını control ediyor
export function validateEmail(email) {
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// belirli yıllar arasını array dönme selectbox gibi
// 2000 number değer yollanır ve günümüze kadar döner.
export const yearSelectBox = (startDate) => {
  const newDate = new Date();
  const thisYear = newDate.getFullYear();
  const arrayDate = [{ id: startDate, name: startDate }];
  for (let index = startDate; index < thisYear; index++) {
    arrayDate.unshift({ id: arrayDate[0].id + 1, name: arrayDate[0].id + 1 });
  }
  return arrayDate;
};

// ilk harfi büyütme
export const firstUpperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

//sayıları sıralama
// size = "small" / "big"
export function sortOrderNumber(data, prop, size = "big") {
  if (data && prop) {
    const newSortData = data.sort(function (a, b) {
      if (size === "big") return b[prop] - a[prop];
      else return a[prop] - b[prop];
    });

    return newSortData;
  } else {
    return [];
  }
}

//string sıralama
// size = "small" / "big"
export function sortOrderString(data, prop, size = "small") {
  if (data && prop) {
    const newSortData = data.sort(function (a, b) {
      const nameA = a[prop]?.toLocaleLowerCase();
      const nameB = b[prop]?.toLocaleLowerCase();

      if (size === "small") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      }

      return 0;
    });

    return newSortData;
  } else {
    return [];
  }
}

//find yapıyor
export function findData(data, propOne, value) {
  if (data && propOne && value) {
    return data.find((item) => {
      return (
        String(item[propOne])?.toLocaleLowerCase() ===
        String(value).toLocaleLowerCase()
      );
    });
  }
  return false;
}

//filter yapıyor
//equals eşit olanları döndürmak için true yollanmalı
export function filterData(data, propOne, value, equals) {
  if (data && propOne && value) {
    return data.filter((item) => {
      if (equals) {
        return (
          String(item[propOne])?.toLocaleLowerCase() ===
          String(value).toLocaleLowerCase()
        );
      }
      return (
        String(item[propOne])?.toLocaleLowerCase() !==
        String(value).toLocaleLowerCase()
      );
    });
  }
  return false;
}

// menti istenilen karakter kadar kısaltma
// hyphenActive = çizgi atmasına kara veriyor
export function shortenText(text, length, hyphenActive) {
  if (length && text?.length >= length) {
    return text.substring(0, length) + "...";
  }

  return text ? text : hyphenActive ? "-" : "";
}

// blanck ile sayfa açıyor
export function windowOpenBlank(url) {
  if (url) {
    window.open(
      url,
      "_blank",
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
    );
  }
}

// sayı yuvarlama
//count yuvarlanan sayı miktarı
export function numberPow(number, count) {
  if (number && count) {
    return Number(number.toFixed(count));
  }
  return number;
}

//telefon numarası gibi formatların içerisindeki karakterleri temizliyor
// export function characterClear(value, time) {
//   if (value) {
//     return value.replace(/[^0-9]+/g, "");
//   }
//   return null;
// }

// para birimini formatlıyor
// export function formatMyMoney(price) {
//   var currency_symbol = "₺";

//   var formattedOutput = new Intl.NumberFormat("tr-TR", {
//     style: "currency",
//     currency: "TRY",
//     minimumFractionDigits: 2,
//   });

//   return formattedOutput.format(price).replace(currency_symbol, "");
// }

// file name göre icon dönüyor
// export function fileIconControl(fileName) {
//   const newFileName = fileName.toLowerCase();
//   if (newFileName) {
//     if (newFileName.indexOf("txt") > 0) {
//       return "icon-txt";
//     } else if (newFileName.indexOf("doc") > 0) {
//       return "icon-file-rtf";
//     } else if (
//       newFileName.indexOf("xlsx") > 0 ||
//       newFileName.indexOf("xls") > 0
//     ) {
//       return "icon-file-xls";
//     } else if (
//       newFileName.indexOf("jpg") > 0 ||
//       newFileName.indexOf("png") > 0 ||
//       newFileName.indexOf("gif") > 0 ||
//       newFileName.indexOf("jpeg") > 0 ||
//       newFileName.indexOf("jpe") > 0
//     ) {
//       return "icon-file-img";
//     } else if (
//       newFileName.indexOf("pptx") > 0 ||
//       newFileName.indexOf("ppt") > 0
//     ) {
//       return "icon-file-ppt";
//     } else if (newFileName.indexOf("pdf") > 0) {
//       return "icon-file-pdf2";
//     } else {
//       return "icon-file-empty";
//     }
//   } else {
//     return "icon-file-empty";
//   }
// }

// hangi platfrom üzerinden açılmış onu dönüyor
// functionName > "ios" ,"android" igii
// export function browserControl(functionName) {
//   var isMobile = {
//     android: function () {
//       return navigator.userAgent.match(/Android/i);
//     },
//     blackBerry: function () {
//       return navigator.userAgent.match(/BlackBerry/i);
//     },
//     ios: function () {
//       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     opera: function () {
//       return navigator.userAgent.match(/Opera Mini/i);
//     },
//     windows: function () {
//       return (
//         navigator.userAgent.match(/IEMobile/i) ||
//         navigator.userAgent.match(/WPDesktop/i)
//       );
//     },
//     any: function () {
//       return (
//         isMobile.Android() ||
//         isMobile.BlackBerry() ||
//         isMobile.iOS() ||
//         isMobile.Opera() ||
//         isMobile.Windows()
//       );
//     },
//   };
//   return isMobile[functionName]();
// }

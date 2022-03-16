// window.LZD = window.LZD || {};
// window.LZD.updateBreadcrumb = function (list) {
//   if (!list || !list instanceof Array) {
//     return;
//   }
//   var parentNode = document.getElementById('J_breadcrumb');
//   while (parentNode.hasChildNodes()) {
//     parentNode.removeChild(parentNode.firstChild);
//   }
//   var size = list.length;
//   for (var i = 0; i < size; i++) {
//     var item = list[i];
//     var liNode = document.createElement("li");
//     liNode.className = 'breadcrumb_item';
//     if (i === size - 1) {
//       liNode.innerHTML = '<span class="breadcrumb_item_text">' +
//         '<span class="breadcrumb_item_anchor breadcrumb_item_anchor_last">' + item.title + '</span>' +
//         '</span>';
//     } else {
//       liNode.innerHTML = '<span class="breadcrumb_item_text">' +
//         '<a title="' + item.title + '" href="' + item.url + '" class="breadcrumb_item_anchor">' +
//         '<span>' + item.title + '</span>' +
//         '</a>' +
//         '<div class="breadcrumb_right_arrow"></div>' +
//         '</span>';
//     }
//     parentNode.appendChild(liNode);
//   }
//   var breadcrumbListNode = document.getElementById('J_breadcrumb_list');
//   var cls = breadcrumbListNode.className;
//   if (size === 0) {
//     if (cls.indexOf('breadcrumb_list_empty') < 0) {
//       breadcrumbListNode.className = 'breadcrumb_list_empty';
//     }
//   } else {
//     breadcrumbListNode.className = 'breadcrumb_list';
//   }
// }

function selectOnlyThis(id) {
  for (var i = 1; i <= 2; i++) {
    if (
      "delivery_Check" + i === id &&
      document.getElementById("delivery_Check" + i).checked === true
    ) {
      document.getElementById("delivery_Check" + i).checked = true;
    } else {
      document.getElementById("delivery_Check" + i).checked = false;
    }
  }
}

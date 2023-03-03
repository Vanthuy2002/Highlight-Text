let data = [
  "How to learn English",
  "How to learn Programming",
  "The best way to learn TailwindCSS",
  "Five ways to study CSS",
  "How to code Javascript",
  "The best way to learn ReactJs",
  "Start fulture with learn Font-end",
];
let dropdownList = document.querySelector(".dropdown-list");

//render views UI
function render(list) {
  let output = list.map((item) => {
    return `<div class="dropdown-item">${item}</div>`;
  });
  dropdownList.innerHTML = output.join("");
}
render(data);
let items = document.querySelectorAll(".dropdown-item");
let input = dropdownList.previousElementSibling;

//logic
input.addEventListener("input", (e) => {
  //gán biến filter bằng chuỗi value trong input, set thành in thường
  let filter = e.target.value;
  filter.toLowerCase();

  [...items].forEach((item) => {
    let text = item.textContent;

    //khai báo bien index để tìm kiếm index của chuỗi filter trong chuỗi text;
    let index = text.toLowerCase().indexOf(filter);

    //Nếu index >= 0 , indexOf nếu tìm được sẽ trả về index, không tìm được trả về -1;
    //Và(hoặc) bắt đầu từ ký tự đầu tiên trong chuỗi filter

    if (index >= 0 || text.toLowerCase().startsWith(filter.charAt(0))) {
      item.innerHTML = `${text.substring(
        0,
        index
      )}<span class="primary">${text.substring(
        index,
        index + filter.length
      )}</span>${text.substring(index + filter.length)}`;
    }
  });
});

/*
1. cắt text từ 0 đến index tìm được;
2. Thêm phần tử span để highlight chuỗi cắt ra từ index bước 1 đến độ dài của giá trị nhập vào
3. Cắt toàn bộ phần còn lại từ index bước 2 đến hết
*/

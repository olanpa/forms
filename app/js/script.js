window.onload = function () {
    var list_item, parent, str, info;

    list_item = document.getElementsByClassName("helpkinds__item");
    parent = document.querySelector("#change"),
        str = 'helpkinds__item--active';
    info = document.getElementsByClassName("helpkind_item_info");

    parent.onclick = function (e) {
        var item = e.target;
        if (item !== parent) {
            while (item.tagName !== "LI") {
                item = item.parentNode;
            }
            if (!item.classList.contains(str)) {
                item.classList.add(str);
                var j;
                for (var i = 0; i < 4; i++) {
                    if (item !== list_item[i] && list_item[i].classList.contains(str)) {
                        list_item[i].classList.remove(str);
                        info[i].style.display = 'none';
                        info[i].classList.remove('active');
                    }
                    if (item == list_item[i]) {
                        j = i;
                    }
                }
                info[j].classList.add('active');
                info[j].style.display='flex';
            }
        }
    }
}
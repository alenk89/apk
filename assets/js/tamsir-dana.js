
function getData(cat, nameCat) {

    if ($("#nomoHp").val().length < 6) {
        $("#foralert").show()
        $("#foralert").html(`
    <small class="animate__animated animate__fadeIn text-danger" style="font-size: 11px;font-style: normal;">
        <p>Masukan Nomor Hp dengan benar</p>
    </small>
    `)
        return false
    } else {
        $("#foralert").hide()
    }
    $("#ttl").html(nameCat)
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk?token=${bigApi}&category=${cat}&auth_token=${bigTkn}&page=1`,
        dataType: "json",
        beforeSend: function () {
            $("#for-ld2").show()
            $("#bigDataReg").html(load)
        },
        success: function (response) {
            $("#for-ld2").hide()
            $("#for-ld").hide()

            if (response.data == null) {
                $("#bigDataReg").html(dataNull)
            } else {
                if (response.data.length > 10) {
                    getNext(cat, 2, nameCat)
                }
                $("#bigDataReg").html(`<div class="dataProduk reg animate__animated animate__fadeIn"></div>`)
                looping(response.data, nameCat)
            }
        }
    });
}

function getNext(cat, pages, nameCat) {
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk?token=${bigApi}&category=${cat}&auth_token=${bigTkn}&page=${pages}`,
        dataType: "json",
        success: function (response) {
            if (response.data == null) {
                $("#bigDataReg").html(dataNull)
            } else {
                if (response.data.length > 11) {
                    var nx = parseInt(pages) + parseInt(1)
                    getNext(cat, nx, nameCat)
                }
                looping(response.data, nameCat)
            }
        }
    });
}

function looping(data, nameCat) {

    $.each(data, function (i, v) {
        $(".reg").append(`
                <div class="p-2 c-produk mb-2 animate__animated animate__zoomIn" data-bs-toggle="offcanvas" data-bs-target="#Id2" aria-controls="Id2" onclick="detail('${v.title}', '${v.harga}', '${v.short_url}')">
                <div class="row">
                  <div class="col-3 model">
                    <img src="https://i.ibb.co/F88DvvR/dana.png" alt="" class="icons">
                  </div>
                  <div class="col-9 style-harga">
                    <p class="produk-nama">${v.title}</p>
                    <p class="produk-brand">${nameCat}</p>
                    <p class="harganya">${v.harga}</p>
                  </div>
                </div>
              </div>
              </div>
              `)
    });
}

function detail(namaproduk, harga, produk) {
    var numb = $("#nomoHp").val()
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk_detail?token=${bigApi}&produk=/produk/${produk}&auth_token=${bigTkn}`,
        dataType: "json",
        success: function (response) {
            $("#prod").html(namaproduk)
            $("#prc").html(harga)
            $("#numb").html(numb)
            $("#desc").html(response.data.description)
            $("#btnBli").attr("href", urlTko + "/produk/" + produk + "?catatan=" + numb)
        }
    });
}

function getDataCust(wall) {
    var id = $("#nomoHp").val()
    var token = 'e5771acb669df2b'
    if (wall == 'null') {
        $("#nama").hide()
        $("#nm").hide()
    } else {
        $("#nama").show()
        $("#nm").show()
        $.ajax({
            type: "GET",
            url: `https://cekid.solusimedia.my.id/api/ewallet/${wall}/?hp=${id}&key=${token}`,
            dataType: "json",
            success: function (response) {
                if (response.status == 200) {
                    $("#nama").html(response.name)
                    $("#user").html(response.name)
                } else {
                    $("#nama").html(response.error_msg)
                    $("#user").html(response.error_msg)
                }
            }
        })
    }
}

function clr(content) {
    var num = $("#nomoHp").val()
    if (content == 'default') {
        content = 'Silahkan Masukan No. Tujuan'
        $(".reg").remove()
        $(".tf").remove()
        $(".masa").remove()
        $("#bigDataReg").html(`
    <div id="for-ld" class="container text-center">
        <div class="loader"></div>
        <div class="for-load">
            <div class="col-3">
                <img src="https://i.ibb.co/F88DvvR/dana.png" alt="" style="width: 90px;margin-bottom: 10px;">
            </div>
            <p >
                ${content}
            </p>
        </div>
    </div>
    `)
        $("#for-ld").show()
    } else {
        if (num == 08) {
            $(".reg").remove()
            $(".tf").remove()
            $(".masa").remove()
            $("#bigDataReg").html(`<div id="for-ld" class="container text-center">
        <span class="loader"></span>
        <p class="for-load">Silahkan Klik Disini Untuk Melihat Produk, Atau Pilih Menu Kategori</p>
    </div>`)
        } else {
            content = 'Silahkan Masukan No. HandPhone Terlebih Dahulu'
        }
    }
}
clr('default')


$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("section .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

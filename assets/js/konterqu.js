var url = "https://bankfilegsm.my.id/api/produk_pulsa.php?kategori=";
var link = "https://konterq.jualan.me/";
var aktivasi = "KonterQu";
var keywoard = document.getElementById('player');
var load = document.getElementById('load');
var oprator = document.getElementById('nickname');
var salah = document.getElementById('tidak_valid');
var nick_tampil = document.getElementById('nick');
var validasi = "";


function ubah() {
    var x = keywoard.value.substr(0, 3);
    if (x == "+62") {
        keywoard.value = keywoard.value.replace('+62', '0')
    }
    gas()
}

function gas() {

    if (keywoard.value.length < 6 || keywoard.value.length > 11) {
        var x = keywoard.value.substr(0, 4);
        var y = keywoard.value.substr(4, 1);

        if (keywoard.value.length < 4) {
            keywoard.classList.add('is-invalid');
            keywoard.classList.remove('is-valid');
            salah.innerText = "Masukan 6-13 Digit Nomor Handphone";
            $('#produk_diamond').empty();
            $('#produk').empty();
            $('#rol').append(`Ketikan Nomor Tujuan`)
            $('#produk').append(`<option id="" value="">Pilih Produk</option>`);
            // telkomsel
        } else if (x == 0811 || x == 0812 || x == 0813 || x == 0821 || x == 0822 || x == 0852 || x == 0853 || x == 0823 || x == 0851) {
            if (x == 0851 && y == 5 || x == 0851 && y == 6 || x == 0851 && y == 7) {

                keywoard.classList.remove('is-invalid');
                keywoard.classList.add('is-valid');
                oprator.innerHTML = 
                `
                    <img src='https://i.ibb.co/GWL8Ctp/byu.png' width='25' height='25'>
                    <span class='byu'>
                        <strong>ByU</strong>
                    </span >
                `
                $('#produk').empty();
                $('#produk').append(`
    <option id="" value="">Pulsa By U</option>

    `)
                tampil_produk("", "");

            } else {
                keywoard.classList.remove('is-invalid');
                keywoard.classList.add('is-valid');
                oprator.innerHTML =
                    `
                    <img src='https://i.ibb.co/sg0G3ZC/tsel.png' width='25' height='25'>
                    <span class='tsel'><strong>TELKOMSEL</strong></span >
                `
                $('#produk').empty();
                $('#produk').append(`
    <option id="" value="">Telkomsel</option>
    `)
                tampil_produk("pulsa-telkomsel-429096", "1");
            }
            // Indosat
        } else if (x == 0814 || x == 0815 || x == 0816 || x == 0855 || x == 0856 || x == 0857 || x == 0858) {
            keywoard.classList.remove('is-invalid');
            keywoard.classList.add('is-valid');
            oprator.innerHTML =
                `
                    <img src='https://i.ibb.co/JqgkRSQ/indosat.png' width='25' height='25'>
                    <span class='indosat'><strong>INDOSAT</strong></span >
                `
            $('#produk').empty();
            $('#produk').append(`
    <option id="" value="">Pulsa Indosat</option>

    `)
            tampil_produk("pulsa-indosat-430637", "2");
        }
        // Tri
        else if (x == 0895 || x == 0896 || x == 0897 || x == 0898 || x == 0899) {
            keywoard.classList.remove('is-invalid');
            keywoard.classList.add('is-valid');
            oprator.innerHTML =
                `
                    <img src='https://i.ibb.co/ccmXGsx/three.png' width='25' height='25'>
                    <span class='tree'><strong>THREE</strong></span >
                `
            $('#produk').empty();
            $('#produk').append(`
    <option id="" value="">Pulsa Three</option>

    `)
            tampil_produk("pulsa-tree-434459", "3");
        }
        // Axis
        else if (x == 0838 || x == 0831 || x == 0832 || x == 0833) {
            keywoard.classList.remove('is-invalid');
            keywoard.classList.add('is-valid');
            oprator.innerHTML =
                `
                    <img src='https://i.ibb.co/Tc88ZDZ/axis.png' width='25' height='25'>
                    <span class='axis'><strong>AXIS</strong></span >
                `
            $('#produk').empty();
            $('#produk').append(`
    <option id="" value="">Pulsa Axis</option>

    `)
            tampil_produk("pulsa-axis-434458", "4");
        }
        // XL
        else if (x == 0818 || x == 0817 || x == 0819 || x == 0859 || x == 0877 || x == 0878) {
            keywoard.classList.remove('is-invalid');
            keywoard.classList.add('is-valid');
            oprator.innerHTML =
                `
                    <img src='https://i.ibb.co/jLMTpNM/xl.png' width='25' height='25'>
                    <span class='xl'><strong>XL AXIATA</strong></span >
                `
            $('#produk').empty();
            $('#produk').append(`
    <option id="" value="">Pulsa XL</option>

    `)
            tampil_produk("pulsa-xl-430635", "5");
        }
        // Smartfreen
        else if (x == 0881 || x == 0882 || x == 0883 || x == 0884 || x == 0885 || x == 0886 || x == 0887 || x == 0888 || x == 0889) {
            keywoard.classList.remove('is-invalid');
            keywoard.classList.add('is-valid');
            oprator.innerHTML =
                `
                    <img src='https://i.ibb.co/myjJkY7/smartfreen.png' width='25' height='25'>
                    <span class='smartfreen'><strong>SMARTFREEN</strong></span >
                `
            $('#produk').empty();
            $('#produk').append(`
    <option id="" value="">Pulsa Smartfreen</option>

    `)
            tampil_produk("#", "6");
        }
    }
};

// klik diamond dan member
function pindah(id, togle, produk1, produk2) {
    var tombol = document.getElementById(id);
    var togle = document.getElementById(togle);
    var produk1 = document.getElementById(produk1);
    var produk2 = document.getElementById(produk2);
    tombol.classList.add('klik');
    togle.classList.remove('klik');
    produk2.classList.add('d-none');
    produk1.classList.remove('d-none')
}

// Tampilan Produk
function tampil_produk(kategori, ket) {
    Loading();
    $.getJSON(url + kategori + '&ket=' + ket + '&link=' + link + '&token=' + aktivasi, function (data) {

        if (data != null) {
            $('#produk_diamond').empty();
            for (let i = 0; i < data.length; i++) {
                var nama = data[i]['Judul'];
                var id_produk = data[i]['link'];
                var harga = data[i]['harga'];
                $('#produk_diamond').append(`
    <div class="produk base shadow-sm d-flex mb-2">
        <div class="col-2 d-flex align-items-center" onclick="klik(\'` + harga + `\',\'` + nama + `\',\'` + id_produk + `\')">
            <div class="">
                <img src="https://i.ibb.co/LJjsBgR/Pulsa-reguler.png" alt="pulsa" style="width:60px;justify-content: center;">
            </div>
        </div>
        <div class="col-10 ml-5" onclick="klik(\'` + harga + `\',\'` + nama + `\',\'` + id_produk + `\')">
            <div class="d-flex flex-column ml-5" onmouseenter="document.getElementById('`+ id_produk + `').style='color:white'" onmouseleave="document.getElementById('` + id_produk + `').style='color:#19A7CE'">
                <span class="" id="`+ id_produk + `">
                    <b>` + nama + `</b>
                </span>
                <span style="margin-top: -3px;">
                    Pulsa Reguler
                </span>
                <span class="text-dark fw-bolder" style="margin-top: -3px;">
                    `+ harga + `
                </span>
            </div>
        </div>
    </div>

    `)
            }

        } else {
            $('#produk_diamond').empty();
            $('#produk_diamond').append(` <div class="d-flex justify-content-center " style="margin-top:50%" id="rol">
        Tidak Ada produk
    </div>`)
        }

    });

}

function klik(harga, nama, value) {
    var catatan = document.getElementById("player").value;
    var topup = document.getElementById('produk');
    ss = topup.options[topup.selectedIndex].innerText;
    if (catatan.length < 8) {
        keywoard.classList.add('is-invalid');
    }

    else {
        document.getElementById('kl').click();
        document.getElementById('nick').innerText = ss;
        document.getElementById("id1").value = value;
        document.getElementById("catatan").value = catatan;
        document.getElementById("web").value = link;
        document.getElementById("kode").value = aktivasi;
        document.getElementById("player1").innerHTML = catatan;
        document.getElementById('produkk').innerText = nama;
        document.getElementById('hargaa').innerText = harga;
        document.getElementById('total').innerText = harga;
    }
};

function Loading() {
    $('#produk_diamond').empty();
    $('#produk_diamond').append(`
    <div class="d-flex justify-content-center " style="margin-top:50%" id="rol">
        <div class="loader" role="status">
            <img src="https://i.ibb.co/d2dyYrw/wait.gif" alt="loading" style="width:120px" >
        </div>
    </div>
    `)
}

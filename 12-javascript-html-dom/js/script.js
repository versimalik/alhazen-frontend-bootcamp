function validateForm(){
    let kirim = document.forms["submitForm"]["namadepan"].value;
    if (kirim == ""){
        alert("Harus diisi dong");
        return false;
    }
}

function ubahWarna(){
    anotherColor = styele.color = "black"
    let judul = document.getElementById("judul")
    if(judul.style.color == "blue"){
        document.getElementById("judul").style.color = "red"
    }
    else{
        document.getElementById("judul").style.color = anotherColor
    }

}
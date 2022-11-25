$(document).ready(function(){
    // $("#btnAlert").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     $("#divAlert").removeClass("d-none");
    //     const nama = $("#inputNama").val();
    //     $("#textAlert").html("Terimakasih " + nama + " sudah resend email");
    // });

    // $("#btnClose").click(function(){
    //     $("#divAlert").addClass("d-none");
    // }); 

    $("#img1").click(function(e){
        e.preventDefault();
        const img1 = $("#img1").attr("src");
        $("#imgParent").attr("src", img1);
        $("#imgParent").css("height", "500px");
    });

    $("#img2").click(function(e){
        e.preventDefault();
        const img2 = $("#img2").attr("src");
        $("#imgParent").attr("src", img2);
        $("#imgParent").css("height", "500px");
    });

    $("#img3").click(function(e){
        e.preventDefault();
        const img3 = $("#img3").attr("src");
        $("#imgParent").attr("src", img3);
        $("#imgParent").css("height", "500px");
    });

    $("#img4").click(function(e){
        e.preventDefault();
        const img4 = $("#img4").attr("src");
        $("#imgParent").attr("src", img4);
        $("#imgParent").css("height", "500px");
    });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input1 = $("#input1").val();
    //     $("#p1").html("Nama depan anda adalah " + input1); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input2 = $("#input2").val();
    //     $("#p2").html("Nomor Hanphone anda adalah " + input2); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input3 = $("#input3").val();
    //     $("#p3").html("Nama belakang anda adalah " + input3); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input4 = $("#input4").val();
    //     $("#p4").html("Nama kota anda adalah " + input4); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input5 = $("#input5").val();
    //     $("#p5").html("Email anda adalah " + input5); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input6 = $("#input6").val();
    //     $("#p6").html("Postal kode anda adalah " + input6); 
    // });

    // $("#btnSubmit").click(function(){
    //     event.preventDefault();
    //     window.scrollTo(0, 0);
    //     const input7 = $("#input7").val();
    //     $("#p7").html("Alamat anda adalah " + input7); 
    // });

    // const btnSubmit = document.getElementById('btnSubmit');
    // btnSubmit.addEventListener('click', function handleClick(event) {
    // event.preventDefault();
    // const input1 = document.getElementById('input1');
    //  console.log(input1.value);
    // input1.value = '';
    // const input2 = document.getElementById('input2');
    // console.log(input2.value);
    // input2.value = '';
    // const input3 = document.getElementById('input3');
    // console.log(input3.value);
    // input3.value = '';
    // const input4 = document.getElementById('input4');
    // console.log(input4.value);
    // input4.value = '';
    // const input5 = document.getElementById('input5');
    // console.log(input5.value);
    // input5.value = '';
    // const input6 = document.getElementById('input6');
    // console.log(input6.value);
    // input6.value = '';
    // const input7 = document.getElementById('input7');
    // console.log(input7.value);
    // input7  .value = '';
    // });

    $("#formShipping").submit(function(e){
        e.preventDefault();
        window.scrollTo(0, 0);
        $(this).addClass("d-none");
        const input1 = $("#input1").val();
        const input3 = $("#input3").val();
        const input7 = $("#input7").val();
        $("#p1").html("Terimakasih " + input1 + " " + input3); 
        $("#p2").html("Paket akan dikirimkan ke alamat " + input7); 
        $("#p8").removeClass("d-none"); 

       
    });

    $("#formEmail").submit(function(e){
        e.preventDefault();
        const email = $("#inputEmail").val();
        $("#textEmail").html("Terimakasih " + "<strong>" + email + "</strong>" + ", Link sudah dapat dilihat di E-mail anda");
        $("#alertEmail").css("background-color", "pink");
        $("#alertEmail").removeClass("d-none");
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    $("#alertEmail").click(function(){
        $(this).addClass("d-none");
    }); 

});
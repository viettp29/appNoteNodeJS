// let Exit = require('4exit');

// let menu = require('0menu');
var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')()
});
var tty = require("tty");
var ghiChu = [

];


function note() {
    do
{
    console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Xóa nhiều ghi chú ')
    console.log('5 . Thoát ')
    let Select = prompt('Mời bạn nhập lựa chọn : ');
    var select = Number(Select);
}
while (select < 1 || select > 5)
    

if (select === 1)
    {
        console.log('Bạn vừa chọn tạo mới một ghi chú !')
        let tieuDe = prompt('Tiêu Đề : ');
        let noiDung = prompt('Nội Dung : ');
        ghiChu.push({tieude : tieuDe, noidung : noiDung})
        console.log('Đã lưu thành công!');
        console.log(ghiChu);
        return note();
        
    }
    else if(select === 2)
    {
        console.log('Bạn vừa chọn xem các ghi chú !')
        console.log(ghiChu);
        return note();

        }
    else if(select === 3)
    {
        console.log('Bạn vừa chọn xóa ghi chú !')
        let Remove = prompt('Chọn ghi chú muốn xóa ! : ')
        let remove = Number(Remove)-1;
        ghiChu.splice(remove, remove)
        console.log('Xóa thành công');
        return note();
    }
    else if(select === 4)
    {
        var Start = prompt('Nhập vào vị trí bắt đầu của phần tử bạn muốn xóa : ')
        var start = Number(Start)-1
        var End = prompt('Nhập vào vị trí cuối của phần tử bạn muốn xóa : ')
        var end = Number(End)-1
        ghiChu.splice(start, end);
        console.log('Đã xóa thành công ! ');
        return note()
    }
    else
    {
        process.openStdin().on("keypress", function(chunk, key) {
            if(key && key.name === "c" && key.ctrl) {
            console.log("bye bye");
            process.exit();
    }
    });
    }
}



do
{
    console.log('1 . Tạo ghi chú mới ')
    console.log('2 . Xem các ghi chú ')
    console.log('3 . Xóa một ghi chú ')
    console.log('4 . Xóa nhiều ghi chú ')
    console.log('5 . Thoát ')
    let Select = prompt('Mời bạn nhập lựa chọn : ');
    var select = Number(Select);
}
while (select < 1 || select > 5)
    

if (select === 1)
    {
        console.log('Bạn vừa chọn tạo mới một ghi chú !')
        let tieuDe = prompt('Tiêu Đề : ');
        let noiDung = prompt('Nội Dung : ');
        ghiChu.push({tieude : tieuDe, noidung : noiDung})
        console.log('Đã lưu thành công!');
        console.log(ghiChu);
        return note();
        
    }
    else if(select === 2)
    {
        console.log('Bạn vừa chọn xem các ghi chú !')
        console.log(ghiChu);
        return note();

        }
    else if(select === 3)
    {
        console.log('Bạn vừa chọn xóa ghi chú !')
        let Remove = prompt('Chọn ghi chú muốn xóa ! : ')
        let remove = Number(Remove) - 1;
        ghiChu.splice(remove, remove)
        console.log('Xóa thành công');
        return note();
    }
    else if(select === 4)
    {
        var Start = prompt('Nhập vào vị trí bắt đầu của phần tử bạn muốn xóa (vị trí đầu tiên là 0) : ')
        var start = Number(Start)-1
        var End = prompt('Nhập vào vị trí cuối của phần tử bạn muốn xóa : ')
        var end = Number(End)-1
        ghiChu.splice(start, end);
        console.log('Đã xóa thành công ! ');
        return note();
    }
    else
    {
        process.openStdin().on("keypress", function(chunk, key) {
            if(key && key.name === "c" && key.ctrl) {
            console.log("bye bye");
            process.exit();
    }
    });
    }
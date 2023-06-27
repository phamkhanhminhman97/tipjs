* Chăn reply attacks API

* Ví dụ https://api.com?id=1

 - Nếu thay id = 2 thì vẫn trả ra kết quả nên cần sign request gửi đi
  + ` https://api.com?id=&timstamp=12h00&sign=xxxyyyyy`

  + key= 'abcdef' -> sign = hmac(id=1 + timestamp =12h + key)
  
 -  Phía server sẽ lấy parameter truyền lên rồi kết hợp với key ở server để sinh ra chữ ký rồi so sánh với chữ ký được gửi đi
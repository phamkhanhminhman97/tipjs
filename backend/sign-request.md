* Chăn reply attacks API

* Ví dụ https://api.com?id=1

 - Nếu thay id = 2 thì vẫn trả ra kết quả nên cần sign request gửi đi
  + ` https://api.com?id=&timstamp=12h00&sign=xxxyyyyy`

  + key= 'abcdef' -> sign = hmac(id=1 + timestamp =12h + key)
  
 - Phía server sẽ laa
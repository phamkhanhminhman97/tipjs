
*  <h2>Stack</h2>

   - Stack là nơi mà JavaScript sử dụng để lưu trữ các static data, bao gồm các giá trị primitive data type (number, string, boolean, undefined và null).

    - Các static data này cũng bao gồm các reference (tham chiếu) trỏ đến các function / object mà chúng ta đã tạo ra.

  

	- Các data này có 1 điểm chung là kích thước của chúng cố định và JavaScript biết chắc chắn cần phải cấp phát bao nhiêu bộ nhớ cho chúng. Kiểu cấp phát này được gọi là “cấp phát bộ nhớ tĩnh”. Nó xảy ra trước khi code được thực thi.

  

	- Primitive values và references

  

	- Kích thước bộ nhớ được biết tại thời điểm compile

  

*  <h2>Heap</h2>

  

	- Nơi thứ 2 mà JavaScript lưu trữ data trên memory là heap. Đây là vùng nhớ động và Javascript không cấp phát bộ nhớ cố định cho nó. Thay vào đó, nó sẽ được cấp phát bộ khi cần thiết, nên được gọi là “cấp phát bộ nhớ động”.

  

	-	Object và function

  

	-	Kích thước bộ nhớ được biết tại thời điểm chạy (run time)



>// Khai báo biến và gán object cho nó
const developer = {
  firstName: 'Bao',
  lastName: 'Nguyen',
  title: 'Senior Developer'
};

function introduce() {
  return `Hello!!! I'm ${developer.firstName}.`
};

const departments = ['QA/QC', 'UI/UX', 'Developer', 'Designer'];

const isDone = true;

// Stack:
// isDone = true
// introduce (tham chiếu đến function)
// developer (tham chiếu đến object "developer")
// departments (tham chiếu đến object "departments")


// Heap:
//  {
//    firstName: 'Bao',
//    lastName: 'Nguyen',
//    title: 'Senior Developer'
//  }
//  function introduce() {
//    return `Hello!!! I'm ${developer.firstName}.`
//  }
//  ['QA/QC', 'UI/UX', 'Developer', 'Designer']

// Lưu ý: các variable "introduce", "developer",
// "departments" nằm trong stack giữ tham chiếu 
// đến các object và function năm trong heap



// Khai báo biến "car" và gán đối tượng vào nó
// Biến "car" sẽ được lưu trong stack
// Và reference (tham chiếu) đến object "car"
// Còn bản thân object "car" sẽ được lưu vào heap
const car = {
  color: 'Red',
  speed: 100,
  price: 350000
}; #123

let b = car;

b.color = 'Blue';

// Stack:
b = #123
// car (tham chiếu đến object "car") #123


// Heap:
//  {
//    color: 'Red',
//    speed: 100,
//    price: 350000
//  }

	-	Cách tránh tham chiếu là khởi tạo một địa chỉ mới 
		-	/Sử dụng spread operator:  const originalObject =  { name:  'John', age:  25  };  const clonedObject =  {  ...originalObject };
		-	//Sử dụng Object.assign() method:  const originalObject =  { name:  'John', age:  25  };  const clonedObject = Object.assign({}, originalObject);
		-	//Sử dụng JSON.parse() và JSON.stringify() methods:  const originalObject =  { name:  'John', age:  25  };  const clonedObject =  JSON.parse(JSON.stringify(originalObject));
 

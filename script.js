let result = document.querySelector('.result');
let input_1 = document.querySelector('.input-1');
let input_2 = document.querySelector('.input-2');
const addition = document.getElementById('add');
const subtraction = document.getElementById('sub');
const multiplication = document.getElementById('times');
const division = document.getElementById('divide');

addition.addEventListener('click', function () {
  result.value = Number(input_1.value) + Number(input_2.value);

  //   console.log(result.value);
});

subtraction.addEventListener('click', function () {
  result.value = Number(input_1.value) - Number(input_2.value);

  //   console.log(result.value);
});
multiplication.addEventListener('click', function () {
  result.value = Number(input_1.value) * Number(input_2.value);

  //   console.log(result.value);
});
division.addEventListener('click', function () {
  result.value = Number(input_1.value) / Number(input_2.value);

  //   console.log(result.value);
});

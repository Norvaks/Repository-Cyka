let year = prompt('вкажіть свій вік', '');

if (year < 19) {
  close();
} else if (year > 59) {
  alert( 'їбать ти старий' );
}
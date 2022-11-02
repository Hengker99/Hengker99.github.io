const greeting = document.getElementById('greeting')
let kelamin = prompt('pr/lk')
let nama = prompt('masukan nama')
let kelas = prompt('masukan kelas')
let ket = ''
let at = ''
let it = ''
switch(kelamin){
  case 'lk':
    ket = 'akang'
    break
  case 'pr':
    at = 'teteh'
    break
  default :
    it = 'ntah apa kelamin mu'
}
console.log(`selamat datang ${ket} ${nama} dari kelas ${kelas}`)
alert(`selamat datang ${ket} ${nama} dari kelas ${kelas}`)
greeting.innerHTML = 'selamat datang' + ' ' + ket + ' ' + at + ' ' + it + ' ' + nama + ' ' + 'dari kelas' + ' ' + kelas

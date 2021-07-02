const app = new Vue({
	el: '#app',
	data: {
	  errors: [],
	  name: null,
	  lastnames: null,
	  bornin: null,
	  city: null,
	  zodiac: null,

	},
	methods:{
	  checkForm: function (e) {
		if (this.name &&  this.lastnames && this.bornin && this.city && this.zodiac) {
		  return true;
		}
  
		this.errors = [];
  
		if (!this.name) {
		  this.errors.push('Insira seu nome.');
		}
		if (!this.lastnames) {
		  this.errors.push('Insira seu sobrenome.');
		}
		if (!this.bornin) {
		  this.errors.push('Insira sua data de nascimento.');
		}
		if (!this.city) {
		  this.errors.push('Insira sua cidade.');
		}
		if (!this.zodiac) {
		  this.errors.push('Insira seu signo.');
		}
  
		e.preventDefault();
	  }
	}
  })
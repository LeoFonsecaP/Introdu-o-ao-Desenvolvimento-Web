var app = new Vue({
  el: '#app',
  data: {
	  list: [
		  {title: 'Mulher maravilha'},
		  {title: 'Brainiac'},
		  {title: 'Aquaman'},
		  {title: 'Ravena'},
		  {title: 'Batman'},
		  {title: 'Superman'},
		  {title: 'Mulher Gavião'},
		  {title: 'Flash'},
		  {title: 'Lanterna Verde'},
		  {title: 'Shazam'},
	  ],
	  search: ''
    },
	computed:{
		FilteredItems: function(){
			return this.list.filter((item) => {
				return item.title.toUpperCase().match(this.search.toUpperCase());
			})
		}
	}
})
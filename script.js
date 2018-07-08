var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-h.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'film o simbie - timon i pumba <3',
		src: 'https://movieposters2.com/images/731769-b.jpg'
	},
	{
		id: 3,
		title: "Minionki",
		desc: 'Film o małych żółtych stworkach',
		src: 'https://static.posters.cz/image/750/plakaty/minionki-despicable-me-i-m-with-stupid-i24589.jpg'
	},
	{
		id: 4,
		title: "Władca pierścieni",
		desc: "Film o pewnym hobbicie i pierścieniu",
		src: 'http://www.impawards.com/2001/posters/lord_of_the_rings_the_fellowship_of_the_ring_ver4.jpg'
	},
	{
		id: 5,
		title: "Limitless",
		desc: "Film o narkotyku, który daje dostęp do 100% mózgu",
		src: 'https://images-na.ssl-images-amazon.com/images/I/91EeWyh1GzL._SY445_.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.src})
	);
});


var element =
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
		);

ReactDOM.render(element, document.getElementById('app'));

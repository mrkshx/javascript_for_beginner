// Task to do: Write a JS script that iterates over the IMDB list of 10 top rated movies and then prints each title.

//Variables

moviepage = 'https://www.imdb.com/chart/top'

// Print first 10 titles

for(var i=0; i<=10; i+=1) {
 console.log($("tr:eq(i) .titleColumn a").text())
}

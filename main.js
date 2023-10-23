//Config
var applicationID = 'latency';
var apiKey = '249078a3d4337a8231f1665ec5a44966';
var indexName = 'bestbuy';

var client = algoliasearch(applicationID, apiKey);
var helper = algoliasearchHelper(client, indexName);

helper.on('result', function(content) {
  renderHits(content);
});

function renderHits(content) {
  document.querySelector('#container').html(JSON.stringify(content, null, 2));
}

helper.search();
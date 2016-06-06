angular.module('articler').filter('articler', function() {
  return function(input, uppercase, onlyArticle) {
    if (input) {
      var article = AvsAn.query(input).article;
      if (uppercase) {
        article = article.charAt(0).toUpperCase() + article.slice(1);
      }
      return onlyArticle ? article : article + ' ' + input;
    }
  };
});
